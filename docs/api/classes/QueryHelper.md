[**atlas.js v0.2.0**](../README.md)

***

[atlas.js](../README.md) / QueryHelper

# Class: QueryHelper

Defined in: [src/query-helper.ts:9](https://github.com/Atlas-DePIN/atlas.js/blob/91d72fd6965279f3a79a437a064ed8806aa82e02/src/query-helper.ts#L9)

## Implements

- [`IQueryHelper`](../interfaces/IQueryHelper.md)

## Constructors

### Constructor

> **new QueryHelper**(`client`): `QueryHelper`

Defined in: [src/query-helper.ts:12](https://github.com/Atlas-DePIN/atlas.js/blob/91d72fd6965279f3a79a437a064ed8806aa82e02/src/query-helper.ts#L12)

#### Parameters

##### client

[`QueryClient`](../interfaces/QueryClient.md)

#### Returns

`QueryHelper`

## Properties

### client

> `protected` **client**: [`QueryClient`](../interfaces/QueryClient.md)

Defined in: [src/query-helper.ts:10](https://github.com/Atlas-DePIN/atlas.js/blob/91d72fd6965279f3a79a437a064ed8806aa82e02/src/query-helper.ts#L10)

## Methods

### file()

> **file**(`fid`): `Promise`\<`File`\>

Defined in: [src/query-helper.ts:22](https://github.com/Atlas-DePIN/atlas.js/blob/91d72fd6965279f3a79a437a064ed8806aa82e02/src/query-helper.ts#L22)

#### Parameters

##### fid

`string`

#### Returns

`Promise`\<`File`\>

#### Implementation of

[`IQueryHelper`](../interfaces/IQueryHelper.md).[`file`](../interfaces/IQueryHelper.md#file)

***

### fileStats()

> **fileStats**(): `Promise`\<`QueryFileStatsResponse`\>

Defined in: [src/query-helper.ts:16](https://github.com/Atlas-DePIN/atlas.js/blob/91d72fd6965279f3a79a437a064ed8806aa82e02/src/query-helper.ts#L16)

#### Returns

`Promise`\<`QueryFileStatsResponse`\>

#### Implementation of

[`IQueryHelper`](../interfaces/IQueryHelper.md).[`fileStats`](../interfaces/IQueryHelper.md#filestats)

***

### provider()

> **provider**(`address`): `Promise`\<`Provider`\>

Defined in: [src/query-helper.ts:28](https://github.com/Atlas-DePIN/atlas.js/blob/91d72fd6965279f3a79a437a064ed8806aa82e02/src/query-helper.ts#L28)

#### Parameters

##### address

`string`

#### Returns

`Promise`\<`Provider`\>

#### Implementation of

[`IQueryHelper`](../interfaces/IQueryHelper.md).[`provider`](../interfaces/IQueryHelper.md#provider)

***

### providers()

> **providers**(): `Promise`\<`Provider`[]\>

Defined in: [src/query-helper.ts:31](https://github.com/Atlas-DePIN/atlas.js/blob/91d72fd6965279f3a79a437a064ed8806aa82e02/src/query-helper.ts#L31)

#### Returns

`Promise`\<`Provider`[]\>

#### Implementation of

[`IQueryHelper`](../interfaces/IQueryHelper.md).[`providers`](../interfaces/IQueryHelper.md#providers)

***

### storageStats()

> **storageStats**(): `Promise`\<`QueryStorageStatsResponse`\>

Defined in: [src/query-helper.ts:19](https://github.com/Atlas-DePIN/atlas.js/blob/91d72fd6965279f3a79a437a064ed8806aa82e02/src/query-helper.ts#L19)

#### Returns

`Promise`\<`QueryStorageStatsResponse`\>

#### Implementation of

[`IQueryHelper`](../interfaces/IQueryHelper.md).[`storageStats`](../interfaces/IQueryHelper.md#storagestats)

***

### subscription()

> **subscription**(`address`, `id?`): `Promise`\<`StorageSubscription`\>

Defined in: [src/query-helper.ts:41](https://github.com/Atlas-DePIN/atlas.js/blob/91d72fd6965279f3a79a437a064ed8806aa82e02/src/query-helper.ts#L41)

#### Parameters

##### address

`string`

##### id?

`string` = `""`

#### Returns

`Promise`\<`StorageSubscription`\>

#### Implementation of

[`IQueryHelper`](../interfaces/IQueryHelper.md).[`subscription`](../interfaces/IQueryHelper.md#subscription)

***

### subscriptions()

> **subscriptions**(`address?`): `Promise`\<`StorageSubscription`[]\>

Defined in: [src/query-helper.ts:25](https://github.com/Atlas-DePIN/atlas.js/blob/91d72fd6965279f3a79a437a064ed8806aa82e02/src/query-helper.ts#L25)

#### Parameters

##### address?

`string`

#### Returns

`Promise`\<`StorageSubscription`[]\>

#### Implementation of

[`IQueryHelper`](../interfaces/IQueryHelper.md).[`subscriptions`](../interfaces/IQueryHelper.md#subscriptions)

***

### treeNode()

> **treeNode**(`owner`, `path`): `Promise`\<`TreeNode`\>

Defined in: [src/query-helper.ts:34](https://github.com/Atlas-DePIN/atlas.js/blob/91d72fd6965279f3a79a437a064ed8806aa82e02/src/query-helper.ts#L34)

#### Parameters

##### owner

`string`

##### path

`string`

#### Returns

`Promise`\<`TreeNode`\>

#### Implementation of

[`IQueryHelper`](../interfaces/IQueryHelper.md).[`treeNode`](../interfaces/IQueryHelper.md#treenode)

***

### treeNodeChildren()

> **treeNodeChildren**(`owner`, `path`): `Promise`\<`TreeNode`[]\>

Defined in: [src/query-helper.ts:37](https://github.com/Atlas-DePIN/atlas.js/blob/91d72fd6965279f3a79a437a064ed8806aa82e02/src/query-helper.ts#L37)

#### Parameters

##### owner

`string`

##### path

`string`

#### Returns

`Promise`\<`TreeNode`[]\>

#### Implementation of

[`IQueryHelper`](../interfaces/IQueryHelper.md).[`treeNodeChildren`](../interfaces/IQueryHelper.md#treenodechildren)
