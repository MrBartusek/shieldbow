import { Champion, Client } from '../dist';

describe('Test champion fetching.', () => {
  const client = new Client(process.env.RIOT_API_KEY!);

  let kayn: Champion;

  beforeAll(async () => {
    await client.initialize({
      cache: false
    });
    kayn = await client.champions.fetch('Kayn');
  });

  test('Check champion fetching by ID', () => {
    expect(kayn.name).toBe('Kayn');
  });

  test('Check champion fetching by name and key (cached)', async () => {
    const byName = await client.champions.fetchByName('Kayn');
    const byKey = await client.champions.fetchByKey(kayn.key);

    expect(byName).toBe(kayn);
    expect(byKey).toBe(kayn);
  });

  test('Check champion fetching by name and key', async () => {
    const byName = await client.champions.fetchByName("kai'sa");
    const byKey = await client.champions.fetchByKey(523);

    expect(byName?.name).toBe("Kai'Sa");
    expect(byKey?.name).toBe('Aphelios');
  });

  test('Check champion spells', () => {
    expect(kayn.spells.has('Q')).toBeTruthy();
    expect(kayn.spells.get('Q')!.name).toBe('Reaping Slash');

    expect(kayn.spells.has('W')).toBeTruthy();
    expect(kayn.spells.get('W')!.name).toBe("Blade's Reach");

    expect(kayn.spells.has('E')).toBeTruthy();
    expect(kayn.spells.get('E')!.name).toBe('Shadow Step');

    expect(kayn.spells.has('R')).toBeTruthy();
    expect(kayn.spells.get('R')!.name).toBe('Umbral Trespass');
  });

  test('Check champion passive', () => {
    expect(kayn.passive.name).toBe('The Darkin Scythe');
  });

  test('Check champion classes', () => {
    expect(kayn.classes).toContain('Assassin');
    expect(kayn.classes).toContain('Fighter');
  });

  test('Check champion assets', () => {
    expect(kayn.defaultSplashArt).toBe(
      'http://raw.communitydragon.org/pbe/plugins/rcp-be-lol-game-data/global/default/v1/champion-splashes/uncentered/141/141000.jpg'
    );
    expect(kayn.defaultLoadingScreen).toBe(
      'https://raw.communitydragon.org/pbe/plugins/rcp-be-lol-game-data/global/default/assets/characters/kayn/skins/base/kaynloadscreen.jpg'
    );
  });

  test('Check champion caching', async () => {
    expect(client.champions.cache.get('Kayn')).toBe(kayn);
  });
});
