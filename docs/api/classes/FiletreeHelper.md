[**atlas.js v0.2.0**](../README.md)

***

[atlas.js](../README.md) / FiletreeHelper

# Class: FiletreeHelper

Defined in: [src/filetree-helper.ts:11](https://github.com/Atlas-DePIN/atlas.js/blob/91d72fd6965279f3a79a437a064ed8806aa82e02/src/filetree-helper.ts#L11)

## Constructors

### Constructor

> **new FiletreeHelper**(`client`): `FiletreeHelper`

Defined in: [src/filetree-helper.ts:15](https://github.com/Atlas-DePIN/atlas.js/blob/91d72fd6965279f3a79a437a064ed8806aa82e02/src/filetree-helper.ts#L15)

#### Parameters

##### client

[`AtlasClient`](AtlasClient.md)

#### Returns

`FiletreeHelper`

## Properties

### accessKey?

> `protected` `optional` **accessKey?**: `PrivateKey`

Defined in: [src/filetree-helper.ts:13](https://github.com/Atlas-DePIN/atlas.js/blob/91d72fd6965279f3a79a437a064ed8806aa82e02/src/filetree-helper.ts#L13)

***

### client

> `protected` **client**: [`AtlasClient`](AtlasClient.md)

Defined in: [src/filetree-helper.ts:12](https://github.com/Atlas-DePIN/atlas.js/blob/91d72fd6965279f3a79a437a064ed8806aa82e02/src/filetree-helper.ts#L12)

## Methods

### createDirectory()

> **createDirectory**(`metadata`, `dir`, `encryption?`): `Promise`\<`EncodeObject`\>

Defined in: [src/filetree-helper.ts:110](https://github.com/Atlas-DePIN/atlas.js/blob/91d72fd6965279f3a79a437a064ed8806aa82e02/src/filetree-helper.ts#L110)

#### Parameters

##### metadata

[`IAtlasDirectoryInfo`](../interfaces/IAtlasDirectoryInfo.md)

##### dir

`string`

##### encryption?

[`Privacy`](../enumerations/Privacy.md) = `Privacy.ENCRYPTED`

#### Returns

`Promise`\<`EncodeObject`\>

***

### createDrive()

> **createDrive**(`metadata`): `Promise`\<`EncodeObject`\>

Defined in: [src/filetree-helper.ts:76](https://github.com/Atlas-DePIN/atlas.js/blob/91d72fd6965279f3a79a437a064ed8806aa82e02/src/filetree-helper.ts#L76)

Create a top-level drive node for the active account.

#### Parameters

##### metadata

[`IAtlasDriveInfo`](../interfaces/IAtlasDriveInfo.md)

#### Returns

`Promise`\<`EncodeObject`\>

***

### createFile()

> **createFile**(`file`, `dir`): `Promise`\<`EncodeObject`\>

Defined in: [src/filetree-helper.ts:90](https://github.com/Atlas-DePIN/atlas.js/blob/91d72fd6965279f3a79a437a064ed8806aa82e02/src/filetree-helper.ts#L90)

#### Parameters

##### file

[`IQueuedFile`](../interfaces/IQueuedFile.md)

##### dir

`string`

#### Returns

`Promise`\<`EncodeObject`\>

***

### createTreeNode()

> **createTreeNode**(`path`, `contents`, `aes?`, `nodeType?`): `Promise`\<`EncodeObject`\>

Defined in: [src/filetree-helper.ts:52](https://github.com/Atlas-DePIN/atlas.js/blob/91d72fd6965279f3a79a437a064ed8806aa82e02/src/filetree-helper.ts#L52)

#### Parameters

##### path

`string`

##### contents

`any`

##### aes?

[`IAesBundle`](../interfaces/IAesBundle.md)

##### nodeType?

`string` = `'object'`

#### Returns

`Promise`\<`EncodeObject`\>

***

### deleteTreeNode()

> **deleteTreeNode**(`path`, `owner?`): `EncodeObject`

Defined in: [src/filetree-helper.ts:69](https://github.com/Atlas-DePIN/atlas.js/blob/91d72fd6965279f3a79a437a064ed8806aa82e02/src/filetree-helper.ts#L69)

#### Parameters

##### path

`string`

##### owner?

`string` = `...`

#### Returns

`EncodeObject`

***

### extractAesKey()

> **extractAesKey**(`permissions`): `Promise`\<[`IAesBundle`](../interfaces/IAesBundle.md)\>

Defined in: [src/filetree-helper.ts:182](https://github.com/Atlas-DePIN/atlas.js/blob/91d72fd6965279f3a79a437a064ed8806aa82e02/src/filetree-helper.ts#L182)

Decrypt the AES bundle granted to the connected wallet.

#### Parameters

##### permissions

`string`

#### Returns

`Promise`\<[`IAesBundle`](../interfaces/IAesBundle.md)\>

***

### getTreeNode()

> **getTreeNode**(`path`, `owner?`): `Promise`\<[`TreeNode`](../type-aliases/TreeNode.md)\>

Defined in: [src/filetree-helper.ts:39](https://github.com/Atlas-DePIN/atlas.js/blob/91d72fd6965279f3a79a437a064ed8806aa82e02/src/filetree-helper.ts#L39)

#### Parameters

##### path

`string`

##### owner?

`string` = `...`

#### Returns

`Promise`\<[`TreeNode`](../type-aliases/TreeNode.md)\>

***

### getTreeNodeChildren()

> **getTreeNodeChildren**(`path`, `owner?`): `Promise`\<[`TreeNode`](../type-aliases/TreeNode.md)[]\>

Defined in: [src/filetree-helper.ts:24](https://github.com/Atlas-DePIN/atlas.js/blob/91d72fd6965279f3a79a437a064ed8806aa82e02/src/filetree-helper.ts#L24)

#### Parameters

##### path

`string`

##### owner?

`string` = `...`

#### Returns

`Promise`\<[`TreeNode`](../type-aliases/TreeNode.md)[]\>

***

### incrementDirectoryItemCount()

> **incrementDirectoryItemCount**(`path`, `delta`): `Promise`\<`EncodeObject`\>

Defined in: [src/filetree-helper.ts:143](https://github.com/Atlas-DePIN/atlas.js/blob/91d72fd6965279f3a79a437a064ed8806aa82e02/src/filetree-helper.ts#L143)

Build a replacement directory node with an adjusted child item count.

#### Parameters

##### path

`string`

##### delta

`number`

#### Returns

`Promise`\<`EncodeObject`\>

***

### setAccessKey()

> **setAccessKey**(`accessKey`): `Promise`\<`void`\>

Defined in: [src/filetree-helper.ts:19](https://github.com/Atlas-DePIN/atlas.js/blob/91d72fd6965279f3a79a437a064ed8806aa82e02/src/filetree-helper.ts#L19)

#### Parameters

##### accessKey

`PrivateKey`

#### Returns

`Promise`\<`void`\>
