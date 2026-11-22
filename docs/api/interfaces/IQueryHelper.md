[**atlas.js v0.2.0**](../README.md)

***

[atlas.js](../README.md) / IQueryHelper

# Interface: IQueryHelper

Defined in: [src/interfaces/classes/IQueryHelper.ts:5](https://github.com/Atlas-DePIN/atlas.js/blob/91d72fd6965279f3a79a437a064ed8806aa82e02/src/interfaces/classes/IQueryHelper.ts#L5)

## Methods

### file()

> **file**(`fid`): `Promise`\<`File`\>

Defined in: [src/interfaces/classes/IQueryHelper.ts:9](https://github.com/Atlas-DePIN/atlas.js/blob/91d72fd6965279f3a79a437a064ed8806aa82e02/src/interfaces/classes/IQueryHelper.ts#L9)

#### Parameters

##### fid

`string`

#### Returns

`Promise`\<`File`\>

***

### fileStats()

> **fileStats**(): `Promise`\<`QueryFileStatsResponse`\>

Defined in: [src/interfaces/classes/IQueryHelper.ts:6](https://github.com/Atlas-DePIN/atlas.js/blob/91d72fd6965279f3a79a437a064ed8806aa82e02/src/interfaces/classes/IQueryHelper.ts#L6)

#### Returns

`Promise`\<`QueryFileStatsResponse`\>

***

### provider()

> **provider**(`address`): `Promise`\<`Provider`\>

Defined in: [src/interfaces/classes/IQueryHelper.ts:12](https://github.com/Atlas-DePIN/atlas.js/blob/91d72fd6965279f3a79a437a064ed8806aa82e02/src/interfaces/classes/IQueryHelper.ts#L12)

#### Parameters

##### address

`string`

#### Returns

`Promise`\<`Provider`\>

***

### providers()

> **providers**(): `Promise`\<`Provider`[]\>

Defined in: [src/interfaces/classes/IQueryHelper.ts:13](https://github.com/Atlas-DePIN/atlas.js/blob/91d72fd6965279f3a79a437a064ed8806aa82e02/src/interfaces/classes/IQueryHelper.ts#L13)

#### Returns

`Promise`\<`Provider`[]\>

***

### storageStats()

> **storageStats**(): `Promise`\<`QueryStorageStatsResponse`\>

Defined in: [src/interfaces/classes/IQueryHelper.ts:7](https://github.com/Atlas-DePIN/atlas.js/blob/91d72fd6965279f3a79a437a064ed8806aa82e02/src/interfaces/classes/IQueryHelper.ts#L7)

#### Returns

`Promise`\<`QueryStorageStatsResponse`\>

***

### subscription()

> **subscription**(`address`, `id?`): `Promise`\<`StorageSubscription`\>

Defined in: [src/interfaces/classes/IQueryHelper.ts:10](https://github.com/Atlas-DePIN/atlas.js/blob/91d72fd6965279f3a79a437a064ed8806aa82e02/src/interfaces/classes/IQueryHelper.ts#L10)

#### Parameters

##### address

`string`

##### id?

`string`

#### Returns

`Promise`\<`StorageSubscription`\>

***

### subscriptions()

> **subscriptions**(`address?`): `Promise`\<`StorageSubscription`[]\>

Defined in: [src/interfaces/classes/IQueryHelper.ts:11](https://github.com/Atlas-DePIN/atlas.js/blob/91d72fd6965279f3a79a437a064ed8806aa82e02/src/interfaces/classes/IQueryHelper.ts#L11)

#### Parameters

##### address?

`string`

#### Returns

`Promise`\<`StorageSubscription`[]\>

***

### treeNode()

> **treeNode**(`owner`, `path`): `Promise`\<`TreeNode`\>

Defined in: [src/interfaces/classes/IQueryHelper.ts:15](https://github.com/Atlas-DePIN/atlas.js/blob/91d72fd6965279f3a79a437a064ed8806aa82e02/src/interfaces/classes/IQueryHelper.ts#L15)

#### Parameters

##### owner

`string`

##### path

`string`

#### Returns

`Promise`\<`TreeNode`\>

***

### treeNodeChildren()

> **treeNodeChildren**(`owner`, `path`): `Promise`\<`TreeNode`[]\>

Defined in: [src/interfaces/classes/IQueryHelper.ts:16](https://github.com/Atlas-DePIN/atlas.js/blob/91d72fd6965279f3a79a437a064ed8806aa82e02/src/interfaces/classes/IQueryHelper.ts#L16)

#### Parameters

##### owner

`string`

##### path

`string`

#### Returns

`Promise`\<`TreeNode`[]\>
