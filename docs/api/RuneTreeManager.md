---
title: RuneTreeManager
description: A rune trees manager - to fetch and manage rune trees data.
---

## RuneTreeManager class

A rune trees manager - to fetch and manage rune trees data.

**Signature:**

```ts
export declare class RuneTreeManager implements BaseManager<RuneTree> 
```

Implements: BaseManager&lt;RuneTree&gt;

**References:** [BaseManager](/api/BaseManager.md), [RuneTree](/api/RuneTree.md)

---

### Constructor

```ts
new RuneTreeManager (client: Client, cacheSettings: {
        enable: boolean;
        root: string;
    })
```

Constructs a new instance of the `RuneTreeManager` class.

**Parameters:**

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| client | [Client](/api/Client.md) | The client this manager belongs to. |
| cacheSettings | {         enable: boolean;         root: string;     } | The basic caching settings. |
---

### Properties

#### cache

A collection of the rune trees cached in the memory.


Only use this if you absolutely must. Prioritize using [fetch](/api/RuneTreeManager.md#fetch) instead.



**Type**: [Collection](https://discord.js.org/#/docs/collection/stable/class/Collection) \< [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String), [RuneTree](/api/RuneTree.md) \>

---

#### cachedRunes

An array of runes that have been saved in the cache.


This is similar to the cache but the cache is a collection of Rune Trees and this is an array of runes.


Only use this if you absolutely must. Prioritize using [fetchRune](/api/RuneTreeManager.md#fetchrune) instead.



**Type**: [Rune](/api/Rune.md)[]

---

#### client

The client this manager belongs to.



**Type**: [Client](/api/Client.md)

---

### Methods

#### .fetch ()

Fetch a rune tree by its key. The key is the same as the rune tree's name, for example - `Domination`.




**Signature:**

```ts
fetch(key: string, options?: FetchOptions): Promise<RuneTree>;
```

**Parameters:**

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| key | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The key of the rune tree to fetch. |
| options | [FetchOptions](/api/FetchOptions.md) | Additional fetch options. |

**Return type**: [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) \< [RuneTree](/api/RuneTree.md) \>

---

#### .fetchById ()

Find a rune tree by its numerical ID.




**Signature:**

```ts
fetchById(id: number, options?: FetchOptions): Promise<RuneTree | undefined>;
```

**Parameters:**

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| id | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The numerical ID of the rune tree to look for. |
| options | [FetchOptions](/api/FetchOptions.md) | The basic fetching options. |

**Return type**: [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) \< [RuneTree](/api/RuneTree.md) \| [Undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined) \>

---

#### .fetchByName ()

Fetch a rune tree by its name. The search is case-insensitive. The special characters are NOT ignored.




**Signature:**

```ts
fetchByName(name: string, options?: FetchOptions): Promise<RuneTree | undefined>;
```

**Parameters:**

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| name | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The name of the rune tree to look for. |
| options | [FetchOptions](/api/FetchOptions.md) | The basic fetching options. |

**Return type**: [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) \< [RuneTree](/api/RuneTree.md) \| [Undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined) \>

---

#### .fetchRune ()

Fetch a rune by its key. The key is mostly the same as the rune name, for example - `Electrocute`.




**Signature:**

```ts
fetchRune(key: string, options?: FetchOptions): Promise<Rune>;
```

**Parameters:**

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| key | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The key of the rune. |
| options | [FetchOptions](/api/FetchOptions.md) | Additional fetch options. |

**Return type**: [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) \< [Rune](/api/Rune.md) \>

---

#### .fetchRuneById ()

Fetch a rune by its numerical ID.




**Signature:**

```ts
fetchRuneById(id: number, options?: FetchOptions): Promise<Rune | undefined>;
```

**Parameters:**

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| id | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The numerical ID of the rune to look for. |
| options | [FetchOptions](/api/FetchOptions.md) | The basic fetching options. |

**Return type**: [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) \< [Rune](/api/Rune.md) \| [Undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined) \>

---

#### .fetchRuneByName ()

Fetch a rune by its name. The search is case-insensitive. The special characters are not ignored.




**Signature:**

```ts
fetchRuneByName(name: string, options?: FetchOptions): Promise<Rune | undefined>;
```

**Parameters:**

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| name | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The name of the rune to look for. |
| options | [FetchOptions](/api/FetchOptions.md) | The basic fetching options. |

**Return type**: [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) \< [Rune](/api/Rune.md) \| [Undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined) \>

---

#### .findById ()

Find a rune tree by its numerical ID.




::: warning 

This is now **deprecated**. 

Please use [fetchById](/api/RuneTreeManager.md#fetchbyid) instead.




:::

**Signature:**

```ts
findById(id: number): Promise<RuneTree | undefined>;
```

**Parameters:**

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| id | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The numerical ID of the rune tree to look for. |

**Return type**: [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) \< [RuneTree](/api/RuneTree.md) \| [Undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined) \>

---

#### .findByName ()

Find a rune tree by its name.




::: warning 

This is now **deprecated**. 

Please use [fetchByName](/api/RuneTreeManager.md#fetchbyname) instead.




:::

**Signature:**

```ts
findByName(name: string): Promise<RuneTree | undefined>;
```

**Parameters:**

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| name | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The name of the rune tree to look for. |

**Return type**: [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) \< [RuneTree](/api/RuneTree.md) \| [Undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined) \>

---

#### .findRuneById ()

Find a rune by its numerical ID.




::: warning 

This is now **deprecated**. 

Please use [fetchRuneById](/api/RuneTreeManager.md#fetchrunebyid) instead.




:::

**Signature:**

```ts
findRuneById(id: number): Promise<Rune | undefined>;
```

**Parameters:**

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| id | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The numerical ID of the rune to look for. |

**Return type**: [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) \< [Rune](/api/Rune.md) \| [Undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined) \>

---

#### .findRuneByName ()

Find a rune by its name.




::: warning 

This is now **deprecated**. 

Please use [fetchRuneByName](/api/RuneTreeManager.md#fetchrunebyname) instead.




:::

**Signature:**

```ts
findRuneByName(name: string): Promise<Rune | undefined>;
```

**Parameters:**

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| name | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The name of the rune to look for. |

**Return type**: [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) \< [Rune](/api/Rune.md) \| [Undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined) \>

---

