[**atlas.js v0.2.0**](../README.md)

***

[atlas.js](../README.md) / MessageComposer

# Class: MessageComposer

Defined in: [src/utils/composer.ts:7](https://github.com/Atlas-DePIN/atlas.js/blob/91d72fd6965279f3a79a437a064ed8806aa82e02/src/utils/composer.ts#L7)

## Constructors

### Constructor

> **new MessageComposer**(): `MessageComposer`

#### Returns

`MessageComposer`

## Methods

### createBankSendMsg()

> `static` **createBankSendMsg**(`fromAddress`, `toAddress`, `amount`, `denom?`): `EncodeObject`

Defined in: [src/utils/composer.ts:109](https://github.com/Atlas-DePIN/atlas.js/blob/91d72fd6965279f3a79a437a064ed8806aa82e02/src/utils/composer.ts#L109)

Creates a cosmos bank send message

#### Parameters

##### fromAddress

`string`

##### toAddress

`string`

##### amount

`string`

##### denom?

`string` = `"uatl"`

#### Returns

`EncodeObject`

***

### MsgBuyStorage()

> `static` **MsgBuyStorage**(`creator`, `days`, `bytes`, `isDefault`): `EncodeObject`

Defined in: [src/utils/composer.ts:88](https://github.com/Atlas-DePIN/atlas.js/blob/91d72fd6965279f3a79a437a064ed8806aa82e02/src/utils/composer.ts#L88)

#### Parameters

##### creator

`string`

##### days

`number`

##### bytes

`number`

##### isDefault

`boolean`

#### Returns

`EncodeObject`

***

### MsgDeleteFile()

> `static` **MsgDeleteFile**(`creator`, `fid`): `EncodeObject`

Defined in: [src/utils/composer.ts:33](https://github.com/Atlas-DePIN/atlas.js/blob/91d72fd6965279f3a79a437a064ed8806aa82e02/src/utils/composer.ts#L33)

#### Parameters

##### creator

`string`

##### fid

`string`

#### Returns

`EncodeObject`

***

### MsgDeleteNode()

> `static` **MsgDeleteNode**(`creator`, `path`): `EncodeObject`

Defined in: [src/utils/composer.ts:78](https://github.com/Atlas-DePIN/atlas.js/blob/91d72fd6965279f3a79a437a064ed8806aa82e02/src/utils/composer.ts#L78)

#### Parameters

##### creator

`string`

##### path

`string`

#### Returns

`EncodeObject`

***

### MsgPostFile()

> `static` **MsgPostFile**(`fid`, `creator`, `merkleRoot`, `fileSize`, `replicas?`, `subscription?`): `EncodeObject`

Defined in: [src/utils/composer.ts:11](https://github.com/Atlas-DePIN/atlas.js/blob/91d72fd6965279f3a79a437a064ed8806aa82e02/src/utils/composer.ts#L11)

Creates a properly formatted EncodeObject for file upload

#### Parameters

##### fid

`string`

##### creator

`string`

##### merkleRoot

`Uint8Array`

##### fileSize

`number`

##### replicas?

`number` = `3`

##### subscription?

`string` = `""`

#### Returns

`EncodeObject`

***

### MsgPostNode()

> `static` **MsgPostNode**(`creator`, `path`, `nodeType`, `contents`, `viewers`, `editors`): `EncodeObject`

Defined in: [src/utils/composer.ts:50](https://github.com/Atlas-DePIN/atlas.js/blob/91d72fd6965279f3a79a437a064ed8806aa82e02/src/utils/composer.ts#L50)

Creates a file tree node message

#### Parameters

##### creator

`string`

##### path

`string`

##### nodeType

`string`

##### contents

`string`

##### viewers

`IReadAuthorityPackage`

##### editors

`string`[]

#### Returns

`EncodeObject`

***

### MsgPostNodeRaw()

> `static` **MsgPostNodeRaw**(`creator`, `path`, `nodeType`, `contents`, `viewers`, `editors`): `EncodeObject`

Defined in: [src/utils/composer.ts:64](https://github.com/Atlas-DePIN/atlas.js/blob/91d72fd6965279f3a79a437a064ed8806aa82e02/src/utils/composer.ts#L64)

#### Parameters

##### creator

`string`

##### path

`string`

##### nodeType

`string`

##### contents

`string`

##### viewers

`string`

##### editors

`string`

#### Returns

`EncodeObject`
