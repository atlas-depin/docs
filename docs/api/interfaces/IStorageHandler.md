[**atlas.js v0.2.0**](../README.md)

***

[atlas.js](../README.md) / IStorageHandler

# Interface: IStorageHandler

Defined in: [src/interfaces/classes/IStorageHandler.ts:7](https://github.com/Atlas-DePIN/atlas.js/blob/91d72fd6965279f3a79a437a064ed8806aa82e02/src/interfaces/classes/IStorageHandler.ts#L7)

## Accessors

### providers

#### Get Signature

> **get** **providers**(): `Provider`[]

Defined in: [src/interfaces/classes/IStorageHandler.ts:8](https://github.com/Atlas-DePIN/atlas.js/blob/91d72fd6965279f3a79a437a064ed8806aa82e02/src/interfaces/classes/IStorageHandler.ts#L8)

##### Returns

`Provider`[]

## Methods

### deleteFile()

> **deleteFile**(`fid`): `Promise`\<`string`\>

Defined in: [src/interfaces/classes/IStorageHandler.ts:40](https://github.com/Atlas-DePIN/atlas.js/blob/91d72fd6965279f3a79a437a064ed8806aa82e02/src/interfaces/classes/IStorageHandler.ts#L40)

#### Parameters

##### fid

`string`

#### Returns

`Promise`\<`string`\>

***

### deleteFiles()

> **deleteFiles**(`fids`): `Promise`\<`string`[]\>

Defined in: [src/interfaces/classes/IStorageHandler.ts:41](https://github.com/Atlas-DePIN/atlas.js/blob/91d72fd6965279f3a79a437a064ed8806aa82e02/src/interfaces/classes/IStorageHandler.ts#L41)

#### Parameters

##### fids

`string`[]

#### Returns

`Promise`\<`string`[]\>

***

### downloadFile()

> **downloadFile**(`fid`, `aes?`, `provider?`, `name?`): `Promise`\<`File`\>

Defined in: [src/interfaces/classes/IStorageHandler.ts:37](https://github.com/Atlas-DePIN/atlas.js/blob/91d72fd6965279f3a79a437a064ed8806aa82e02/src/interfaces/classes/IStorageHandler.ts#L37)

#### Parameters

##### fid

`string`

##### aes?

[`IAesBundle`](IAesBundle.md)

##### provider?

`string`

##### name?

`string`

#### Returns

`Promise`\<`File`\>

***

### downloadRaw()

> **downloadRaw**(`fid`, `provider`, `name?`): `Promise`\<`File`\>

Defined in: [src/interfaces/classes/IStorageHandler.ts:38](https://github.com/Atlas-DePIN/atlas.js/blob/91d72fd6965279f3a79a437a064ed8806aa82e02/src/interfaces/classes/IStorageHandler.ts#L38)

#### Parameters

##### fid

`string`

##### provider

`string`

##### name?

`string`

#### Returns

`Promise`\<`File`\>

***

### loadProviders()

> **loadProviders**(`hostnames?`): `Promise`\<`void`\>

Defined in: [src/interfaces/classes/IStorageHandler.ts:10](https://github.com/Atlas-DePIN/atlas.js/blob/91d72fd6965279f3a79a437a064ed8806aa82e02/src/interfaces/classes/IStorageHandler.ts#L10)

#### Parameters

##### hostnames?

`string`[]

#### Returns

`Promise`\<`void`\>

***

### purchaseSubscription()

> **purchaseSubscription**(`bytes`, `days`, `isDefault`, `address?`): `Promise`\<`string`\>

Defined in: [src/interfaces/classes/IStorageHandler.ts:11](https://github.com/Atlas-DePIN/atlas.js/blob/91d72fd6965279f3a79a437a064ed8806aa82e02/src/interfaces/classes/IStorageHandler.ts#L11)

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

### uploadFile()

> **uploadFile**(`file`, `subscriptionId`, `privacy?`, `opts?`): `Promise`\<[`UploadedFile`](UploadedFile.md)\>

Defined in: [src/interfaces/classes/IStorageHandler.ts:13](https://github.com/Atlas-DePIN/atlas.js/blob/91d72fd6965279f3a79a437a064ed8806aa82e02/src/interfaces/classes/IStorageHandler.ts#L13)

#### Parameters

##### file

`File`

##### subscriptionId

`string`

##### privacy?

[`Privacy`](../enumerations/Privacy.md)

##### opts?

###### encryption?

[`IEncryptionOptions`](IEncryptionOptions.md)

###### maxProviderAttempts?

`number`

###### provider?

`string`

###### replicas?

`number`

#### Returns

`Promise`\<[`UploadedFile`](UploadedFile.md)\>

***

### uploadFiles()

> **uploadFiles**(`files`, `subscriptionId`, `privacy?`, `opts?`): `Promise`\<[`UploadedFile`](UploadedFile.md)[]\>

Defined in: [src/interfaces/classes/IStorageHandler.ts:25](https://github.com/Atlas-DePIN/atlas.js/blob/91d72fd6965279f3a79a437a064ed8806aa82e02/src/interfaces/classes/IStorageHandler.ts#L25)

#### Parameters

##### files

`File`[]

##### subscriptionId

`string`

##### privacy?

[`Privacy`](../enumerations/Privacy.md)

##### opts?

###### encryption?

[`IEncryptionOptions`](IEncryptionOptions.md)

###### maxProviderAttempts?

`number`

###### provider?

`string`

###### replicas?

`number`

#### Returns

`Promise`\<[`UploadedFile`](UploadedFile.md)[]\>
