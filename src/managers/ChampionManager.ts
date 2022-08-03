import type { ChampionData, SpellDamageData, BaseManager, MerakiChampion, FetchOptions } from '../types';
import type { Client } from '../client';
import Collection from '@discordjs/collection';
import { Champion } from '../structures';
import { StorageManager } from './index';
import path from 'path';

/**
 * A champion manager - to fetch and manage all the champion data.
 */
export class ChampionManager implements BaseManager<Champion> {
  /**
   * The champions cached in the memory.
   */
  readonly cache: Collection<string, Champion>;
  /**
   * The client that this manager belongs to.
   */
  readonly client: Client;

  private readonly _champData?: StorageManager;
  private readonly _damageData?: StorageManager;
  private readonly _pricingData?: StorageManager;

  /**
   * Create a new Champions Manager
   *
   * @param client - The client this manager belongs to.
   * @param cacheSettings - The basic caching settings.
   */
  constructor(client: Client, cacheSettings: { enable: boolean; root: string }) {
    this.client = client;
    this.cache = new Collection<string, Champion>();
    if (cacheSettings.enable) {
      this._champData = new StorageManager(client, 'dDragon/champions', cacheSettings.root);
      this._damageData = new StorageManager(client, 'cDragon/champions', cacheSettings.root);
      this._pricingData = new StorageManager(client, 'meraki/champions', cacheSettings.root);
    }
  }

  private async _fetchLocalChamp(name: string) {
    if (this._champData)
      this._champData.pathName = path.join('dDragon', this.client.version, this.client.locale, 'champions');
    return new Promise(async (resolve, reject) => {
      const data = this._champData?.fetch(name);
      if (data) resolve(data);
      else {
        const response = await this.client.http.get(
          `${this.client.version}/data/${this.client.locale}/champion/${name}.json`
        );
        if (response.status !== 200) reject("Unable to fetch the champion's data");
        else {
          this._champData?.store(name, response.data);
          resolve(response.data);
        }
      }
    });
  }

  private async _fetchLocalPricing(name: string) {
    if (this._pricingData) this._pricingData.pathName = path.join('meraki', 'champions');
    return new Promise(async (resolve, reject) => {
      const data = this._pricingData?.fetch(name);
      if (data) resolve(data);
      else {
        const response = await this.client.http.get(
          `https://cdn.merakianalytics.com/riot/lol/resources/latest/en-US/champions/${name}.json`
        );
        if (response.status !== 200) reject("Unable to fetch the champion's pricing.");
        else {
          this._pricingData?.store(name, response.data);
          resolve(response.data);
        }
      }
    });
  }

  private async _fetchLocalDamage(name: string) {
    if (this._damageData) this._damageData.pathName = path.join('cDragon', this.client.patch, 'champions');
    return new Promise(async (resolve, reject) => {
      const data = this._damageData?.fetch(name);
      if (data) resolve(data);
      else {
        const response = await this.client.http.get(
          `https://raw.communitydragon.org/${
            this.client.patch
          }/game/data/characters/${name.toLowerCase()}/${name.toLowerCase()}.bin.json`
        );
        if (response.status !== 200) reject("Unable to fetch the champion's damage data");
        else {
          this._damageData?.store(name, response.data);
          resolve(response.data);
        }
      }
    });
  }

  /**
   * Fetch all the champions and store it in the cache.
   *
   * This always fetches freshly from data dragon and community dragon.
   */
  async fetchAll(): Promise<Collection<string, Champion>> {
    return new Promise(async (resolve, reject) => {
      if (this.client.version === 'null') reject('Please initialize the client first.');
      else {
        const response = await this.client.http.get(
          this.client.version + '/data/' + this.client.locale + '/championFull.json'
        );
        if (response.status !== 200) reject('Unable to fetch the champions data.');
        else {
          const champs = <{ data: { [champ: string]: ChampionData } }>response.data;
          for (const key of Object.keys(champs.data)) {
            const champ = champs.data[key];
            const damage = <SpellDamageData>await this._fetchLocalDamage(champ.id).catch(reject);
            const meraki = <MerakiChampion>await this._fetchLocalPricing(champ.id).catch(reject);
            this.cache.set(key, new Champion(this.client, champs.data[key], damage, meraki));
          }
          resolve(this.cache);
        }
      }
    });
  }

  /**
   * Fetches a champion (from the cache, if already available), or from data dragon and community dragon.
   * @param id - The {@link Champion.id | ID} of the champion whose data needs to be fetched.
   * @param options - The basic fetching options.
   */
  async fetch(id: string, options?: FetchOptions) {
    const force = options?.force ?? false;
    const cache = options?.cache ?? true;
    if (id === 'FiddleSticks') id = 'Fiddlesticks'; // There is some internal inconsistency in Riot's JSON files.
    return new Promise<Champion>(async (resolve, reject) => {
      if (this.cache.has(id) && !force) resolve(this.cache.get(id)!);
      else if (this.client.version === 'null') reject('Please initialize the client first.');
      else {
        const champs = <{ data: { [key: string]: ChampionData } }>await this._fetchLocalChamp(id).catch(reject);
        const key = Object.keys(champs.data)[0];
        const damage = <SpellDamageData>await this._fetchLocalDamage(id).catch(reject);
        const meraki = <MerakiChampion>await this._fetchLocalPricing(id).catch(reject);
        const champ = new Champion(this.client, champs.data[key], damage, meraki);
        if (cache) this.cache.set(key, champ);
        resolve(champ);
      }
    });
  }

  /**
   * Find a champion by their 3-digit key.
   *
   * @param key - The 3-digit key of the champion to look for.
   */
  async findByKey(key: number) {
    if (!this.cache.size) await this.fetchAll();
    return this.cache.find((champ) => champ.key === key);
  }

  /**
   * Find a champion by their name (instead of ID, which is very similar but not the same as the name).
   * The search is case-insensitive.
   * The special characters are NOT ignored.
   *
   * @param name - The name of the champion to look for.
   */
  async findByName(name: string) {
    if (!this.cache.size) await this.fetchAll();
    return this.cache.find((champ) => champ.name.toLowerCase().includes(name.toLowerCase()));
  }

  /**
   * Fetch and cache champion by their unique 3-digit keys.
   *
   * This is mostly for internal use while fetching match (or live match) data to improve performance.
   *
   * @param key - The key of the champions to fetch.
   */
  async fetchByKey(key: number) {
    return this.fetchByKeys([key]).then((c) => c.first());
  }

  /**
   * Fetch and cache champions by their unique 3-digit keys.
   *
   * This is mostly for internal use while fetching match (or live match) data to improve performance.
   *
   * @param keys - The keys of the champions to fetch.
   */
  async fetchByKeys(keys: number[]): Promise<Collection<string, Champion>> {
    return new Promise(async (resolve, reject) => {
      const result = new Collection<string, Champion>();
      if (this.client.version === 'null') reject('Please initialize the client first.');
      else {
        const response = await this.client.http.get(
          this.client.version + '/data/' + this.client.locale + '/championFull.json'
        );
        if (response.status !== 200) reject('Unable to fetch the champions data.');
        else {
          const champs = <{ data: { [champ: string]: ChampionData } }>response.data;
          for (const key of Object.keys(champs.data)) {
            const champ = champs.data[key];
            if (keys.some((k) => champ.key === String(k))) {
              const damage = <SpellDamageData>await this._fetchLocalDamage(champ.id).catch(reject);
              const meraki = <MerakiChampion>await this._fetchLocalPricing(champ.id).catch(reject);
              const champion = new Champion(this.client, champs.data[key], damage, meraki);
              result.set(key, champion);
              this.cache.set(key, champion);
            }
          }
          resolve(result);
        }
      }
    });
  }
}
