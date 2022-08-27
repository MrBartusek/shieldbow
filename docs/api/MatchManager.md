---
title: MatchManager
description: A match manager - to fetch and manage matches.
---

## MatchManager class

A match manager - to fetch and manage matches.

**Signature:**

```ts
export declare class MatchManager implements BaseManager<Match> 
```

Implements: BaseManager&lt;Match&gt;

**References:** [BaseManager](/api/BaseManager.md), [Match](/api/Match.md)

---

### Constructor

```ts
new MatchManager (client: Client)
```

Constructs a new instance of the `MatchManager` class.

**Parameters:**

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| client | [Client](/api/Client.md) | The client that instantiated the manager. |
---

### Properties

#### cache

The collection of cached matches.


Only use this if you absolutely must. Prioritize using [fetch](/api/MatchManager.md#fetch) and [fetchMatchListByPlayer](/api/MatchManager.md#fetchmatchlistbyplayer) instead.



**Type**: [Collection](https://discord.js.org/#/docs/collection/stable/class/Collection) \< [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String), [Match](/api/Match.md) \>

---

#### client

The client that instantiated the manager.



**Type**: [Client](/api/Client.md)

---

#### timelineCache

The collection of cached match timelines.


Only use this if you absolutely must. Prioritize using [fetchMatchTimeline](/api/MatchManager.md#fetchmatchtimeline) instead.



**Type**: [Collection](https://discord.js.org/#/docs/collection/stable/class/Collection) \< [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String), [MatchTimeline](/api/MatchTimeline.md) \>

---

### Methods

#### .fetch ()

Fetch a match by its ID.




**Signature:**

```ts
fetch(id: string, options?: FetchOptions): Promise<Match>;
```

**Parameters:**

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| id | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The ID of the match |
| options | [FetchOptions](/api/FetchOptions.md) | The basic fetch options |

**Return type**: [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) \< [Match](/api/Match.md) \>

---

#### .fetchMatchListByPlayer ()

Fetch a list of match IDs by a player ID.




**Signature:**

```ts
fetchMatchListByPlayer(player: Summoner | string, options?: MatchByPlayerOptions): Promise<string[]>;
```

**Parameters:**

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| player | [Summoner](/api/Summoner.md) \| [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The summoner or their player ID whose matches need to be fetched. |
| options | [MatchByPlayerOptions](/api/MatchByPlayerOptions.md) | The options for filtering the matches. |

**Return type**: [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) \< [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)[] \>

---

#### .fetchMatchTimeline ()

Fetch a match timeline by the match ID.




**Signature:**

```ts
fetchMatchTimeline(matchId: string, options?: FetchOptions): Promise<MatchTimeline>;
```

**Parameters:**

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| matchId | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The ID of the match |
| options | [FetchOptions](/api/FetchOptions.md) | The basic fetch options |

**Return type**: [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) \< [MatchTimeline](/api/MatchTimeline.md) \>

---

