[**atlas.js v0.2.0**](../README.md)

***

[atlas.js](../README.md) / IStorageManager

# Interface: IStorageManager

Defined in: [src/interfaces/classes/IStorageManager.ts:6](https://github.com/Atlas-DePIN/atlas.js/blob/91d72fd6965279f3a79a437a064ed8806aa82e02/src/interfaces/classes/IStorageManager.ts#L6)

## Properties

### emit

> **emit**: (`event`, ...`args`) => `boolean`

Defined in: [src/interfaces/classes/IStorageManager.ts:14](https://github.com/Atlas-DePIN/atlas.js/blob/91d72fd6965279f3a79a437a064ed8806aa82e02/src/interfaces/classes/IStorageManager.ts#L14)

#### Parameters

##### event

`string`

##### args

...`any`[]

#### Returns

`boolean`

***

### off

> **off**: (`event`, `listener`) => `this`

Defined in: [src/interfaces/classes/IStorageManager.ts:13](https://github.com/Atlas-DePIN/atlas.js/blob/91d72fd6965279f3a79a437a064ed8806aa82e02/src/interfaces/classes/IStorageManager.ts#L13)

#### Parameters

##### event

`string`

##### listener

(...`args`) => `void`

#### Returns

`this`

***

### on

> **on**: (`event`, `listener`) => `this`

Defined in: [src/interfaces/classes/IStorageManager.ts:12](https://github.com/Atlas-DePIN/atlas.js/blob/91d72fd6965279f3a79a437a064ed8806aa82e02/src/interfaces/classes/IStorageManager.ts#L12)

#### Parameters

##### event

`string`

##### listener

(...`args`) => `void`

#### Returns

`this`

## Accessors

### directory

#### Get Signature

> **get** **directory**(): [`IDirectory`](IDirectory.md)

Defined in: [src/interfaces/classes/IStorageManager.ts:10](https://github.com/Atlas-DePIN/atlas.js/blob/91d72fd6965279f3a79a437a064ed8806aa82e02/src/interfaces/classes/IStorageManager.ts#L10)

##### Returns

[`IDirectory`](IDirectory.md)

***

### drives

#### Get Signature

> **get** **drives**(): [`IAtlasDriveInfo`](IAtlasDriveInfo.md)[]

Defined in: [src/interfaces/classes/IStorageManager.ts:9](https://github.com/Atlas-DePIN/atlas.js/blob/91d72fd6965279f3a79a437a064ed8806aa82e02/src/interfaces/classes/IStorageManager.ts#L9)

##### Returns

[`IAtlasDriveInfo`](IAtlasDriveInfo.md)[]

***

### providers

#### Get Signature

> **get** **providers**(): `Provider`[]

Defined in: [src/interfaces/classes/IStorageManager.ts:7](https://github.com/Atlas-DePIN/atlas.js/blob/91d72fd6965279f3a79a437a064ed8806aa82e02/src/interfaces/classes/IStorageManager.ts#L7)

##### Returns

`Provider`[]

***

### subscription

#### Get Signature

> **get** **subscription**(): `StorageSubscription`

Defined in: [src/interfaces/classes/IStorageManager.ts:8](https://github.com/Atlas-DePIN/atlas.js/blob/91d72fd6965279f3a79a437a064ed8806aa82e02/src/interfaces/classes/IStorageManager.ts#L8)

##### Returns

`StorageSubscription`

## Methods

### deleteFile()

> **deleteFile**(`fid`, `basepath?`): `Promise`\<`string`\>

Defined in: [src/interfaces/classes/IStorageManager.ts:27](https://github.com/Atlas-DePIN/atlas.js/blob/91d72fd6965279f3a79a437a064ed8806aa82e02/src/interfaces/classes/IStorageManager.ts#L27)

#### Parameters

##### fid

`string`

##### basepath?

`string`

#### Returns

`Promise`\<`string`\>

***

### downloadFile()

> **downloadFile**(`fid`, `basepath?`): `Promise`\<`File`\>

Defined in: [src/interfaces/classes/IStorageManager.ts:26](https://github.com/Atlas-DePIN/atlas.js/blob/91d72fd6965279f3a79a437a064ed8806aa82e02/src/interfaces/classes/IStorageManager.ts#L26)

#### Parameters

##### fid

`string`

##### basepath?

`string`

#### Returns

`Promise`\<`File`\>

***

### listSubscriptions()

> **listSubscriptions**(): `Promise`\<`StorageSubscription`[]\>

Defined in: [src/interfaces/classes/IStorageManager.ts:19](https://github.com/Atlas-DePIN/atlas.js/blob/91d72fd6965279f3a79a437a064ed8806aa82e02/src/interfaces/classes/IStorageManager.ts#L19)

#### Returns

`Promise`\<`StorageSubscription`[]\>

***

### loadDirectory()

> **loadDirectory**(`path`, `owner?`): `Promise`\<`void`\>

Defined in: [src/interfaces/classes/IStorageManager.ts:18](https://github.com/Atlas-DePIN/atlas.js/blob/91d72fd6965279f3a79a437a064ed8806aa82e02/src/interfaces/classes/IStorageManager.ts#L18)

#### Parameters

##### path

`string`

##### owner?

`string`

#### Returns

`Promise`\<`void`\>

***

### loadProviders()

> **loadProviders**(`hostnames?`): `Promise`\<`void`\>

Defined in: [src/interfaces/classes/IStorageManager.ts:16](https://github.com/Atlas-DePIN/atlas.js/blob/91d72fd6965279f3a79a437a064ed8806aa82e02/src/interfaces/classes/IStorageManager.ts#L16)

#### Parameters

##### hostnames?

`string`[]

#### Returns

`Promise`\<`void`\>

***

### loadSubscription()

> **loadSubscription**(`id?`): `Promise`\<`void`\>

Defined in: [src/interfaces/classes/IStorageManager.ts:17](https://github.com/Atlas-DePIN/atlas.js/blob/91d72fd6965279f3a79a437a064ed8806aa82e02/src/interfaces/classes/IStorageManager.ts#L17)

#### Parameters

##### id?

`string`

#### Returns

`Promise`\<`void`\>

***

### purchaseSubscription()

> **purchaseSubscription**(`bytes`, `days`, `isDefault`, `address?`): `Promise`\<`string`\>

Defined in: [src/interfaces/classes/IStorageManager.ts:20](https://github.com/Atlas-DePIN/atlas.js/blob/91d72fd6965279f3a79a437a064ed8806aa82e02/src/interfaces/classes/IStorageManager.ts#L20)

#### Parameters

##### bytes

`number`

##### days

`number`

##### isDefault

`boolean`

##### address?

`string`

#### Returns

`Promise`\<`string`\>

***

### queuePrivateFile()

> **queuePrivateFile**(`file`, `options`): `Promise`\<`void`\>

Defined in: [src/interfaces/classes/IStorageManager.ts:23](https://github.com/Atlas-DePIN/atlas.js/blob/91d72fd6965279f3a79a437a064ed8806aa82e02/src/interfaces/classes/IStorageManager.ts#L23)

#### Parameters

##### file

`File`

##### options

[`IFileUploadOptions`](IFileUploadOptions.md)

#### Returns

`Promise`\<`void`\>

***

### queuePublicFile()

> **queuePublicFile**(`file`, `options`): `Promise`\<`void`\>

Defined in: [src/interfaces/classes/IStorageManager.ts:22](https://github.com/Atlas-DePIN/atlas.js/blob/91d72fd6965279f3a79a437a064ed8806aa82e02/src/interfaces/classes/IStorageManager.ts#L22)

#### Parameters

##### file

`File`

##### options

[`IFileUploadOptions`](IFileUploadOptions.md)

#### Returns

`Promise`\<`void`\>

***

### startUploads()

> **startUploads**(`provider?`, `dir?`): `Promise`\<`void`\>

Defined in: [src/interfaces/classes/IStorageManager.ts:24](https://github.com/Atlas-DePIN/atlas.js/blob/91d72fd6965279f3a79a437a064ed8806aa82e02/src/interfaces/classes/IStorageManager.ts#L24)

#### Parameters

##### provider?

`string`

##### dir?

`string`

#### Returns

`Promise`\<`void`\>
