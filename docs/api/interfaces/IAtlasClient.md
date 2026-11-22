[**atlas.js v0.2.0**](../README.md)

***

[atlas.js](../README.md) / IAtlasClient

# Interface: IAtlasClient

Defined in: [src/interfaces/classes/IAtlasClient.ts:7](https://github.com/Atlas-DePIN/atlas.js/blob/91d72fd6965279f3a79a437a064ed8806aa82e02/src/interfaces/classes/IAtlasClient.ts#L7)

## Properties

### emit

> **emit**: (`event`, ...`args`) => `boolean`

Defined in: [src/interfaces/classes/IAtlasClient.ts:13](https://github.com/Atlas-DePIN/atlas.js/blob/91d72fd6965279f3a79a437a064ed8806aa82e02/src/interfaces/classes/IAtlasClient.ts#L13)

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

Defined in: [src/interfaces/classes/IAtlasClient.ts:12](https://github.com/Atlas-DePIN/atlas.js/blob/91d72fd6965279f3a79a437a064ed8806aa82e02/src/interfaces/classes/IAtlasClient.ts#L12)

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

Defined in: [src/interfaces/classes/IAtlasClient.ts:11](https://github.com/Atlas-DePIN/atlas.js/blob/91d72fd6965279f3a79a437a064ed8806aa82e02/src/interfaces/classes/IAtlasClient.ts#L11)

#### Parameters

##### event

`string`

##### listener

(...`args`) => `void`

#### Returns

`this`

## Accessors

### address

#### Get Signature

> **get** **address**(): `string`

Defined in: [src/interfaces/classes/IAtlasClient.ts:9](https://github.com/Atlas-DePIN/atlas.js/blob/91d72fd6965279f3a79a437a064ed8806aa82e02/src/interfaces/classes/IAtlasClient.ts#L9)

##### Returns

`string`

***

### query

#### Get Signature

> **get** **query**(): [`QueryHelper`](../classes/QueryHelper.md)

Defined in: [src/interfaces/classes/IAtlasClient.ts:8](https://github.com/Atlas-DePIN/atlas.js/blob/91d72fd6965279f3a79a437a064ed8806aa82e02/src/interfaces/classes/IAtlasClient.ts#L8)

##### Returns

[`QueryHelper`](../classes/QueryHelper.md)

## Methods

### connectWallet()

> **connectWallet**(`type`, `options?`): `Promise`\<`void`\>

Defined in: [src/interfaces/classes/IAtlasClient.ts:19](https://github.com/Atlas-DePIN/atlas.js/blob/91d72fd6965279f3a79a437a064ed8806aa82e02/src/interfaces/classes/IAtlasClient.ts#L19)

#### Parameters

##### type

[`WalletType`](../enumerations/WalletType.md)

##### options?

`any`

#### Returns

`Promise`\<`void`\>

***

### disconnectWallet()

> **disconnectWallet**(): `Promise`\<`void`\>

Defined in: [src/interfaces/classes/IAtlasClient.ts:20](https://github.com/Atlas-DePIN/atlas.js/blob/91d72fd6965279f3a79a437a064ed8806aa82e02/src/interfaces/classes/IAtlasClient.ts#L20)

#### Returns

`Promise`\<`void`\>

***

### dispose()

> **dispose**(): `Promise`\<`void`\>

Defined in: [src/interfaces/classes/IAtlasClient.ts:17](https://github.com/Atlas-DePIN/atlas.js/blob/91d72fd6965279f3a79a437a064ed8806aa82e02/src/interfaces/classes/IAtlasClient.ts#L17)

#### Returns

`Promise`\<`void`\>

***

### getWalletType()

> **getWalletType**(): [`WalletType`](../enumerations/WalletType.md)

Defined in: [src/interfaces/classes/IAtlasClient.ts:22](https://github.com/Atlas-DePIN/atlas.js/blob/91d72fd6965279f3a79a437a064ed8806aa82e02/src/interfaces/classes/IAtlasClient.ts#L22)

#### Returns

[`WalletType`](../enumerations/WalletType.md)

***

### initialize()

> **initialize**(): `Promise`\<`void`\>

Defined in: [src/interfaces/classes/IAtlasClient.ts:15](https://github.com/Atlas-DePIN/atlas.js/blob/91d72fd6965279f3a79a437a064ed8806aa82e02/src/interfaces/classes/IAtlasClient.ts#L15)

#### Returns

`Promise`\<`void`\>

***

### isInitialized()

> **isInitialized**(): `boolean`

Defined in: [src/interfaces/classes/IAtlasClient.ts:16](https://github.com/Atlas-DePIN/atlas.js/blob/91d72fd6965279f3a79a437a064ed8806aa82e02/src/interfaces/classes/IAtlasClient.ts#L16)

#### Returns

`boolean`

***

### isWalletConnected()

> **isWalletConnected**(): `boolean`

Defined in: [src/interfaces/classes/IAtlasClient.ts:21](https://github.com/Atlas-DePIN/atlas.js/blob/91d72fd6965279f3a79a437a064ed8806aa82e02/src/interfaces/classes/IAtlasClient.ts#L21)

#### Returns

`boolean`

***

### signAndBroadcast()

> **signAndBroadcast**(`messages`, `options?`): `Promise`\<`IndexedTx`\>

Defined in: [src/interfaces/classes/IAtlasClient.ts:25](https://github.com/Atlas-DePIN/atlas.js/blob/91d72fd6965279f3a79a437a064ed8806aa82e02/src/interfaces/classes/IAtlasClient.ts#L25)

#### Parameters

##### messages

`any`[]

##### options?

[`TxOptions`](TxOptions.md)

#### Returns

`Promise`\<`IndexedTx`\>

***

### signMessage()

> **signMessage**(`message`): `Promise`\<`string`\>

Defined in: [src/interfaces/classes/IAtlasClient.ts:24](https://github.com/Atlas-DePIN/atlas.js/blob/91d72fd6965279f3a79a437a064ed8806aa82e02/src/interfaces/classes/IAtlasClient.ts#L24)

#### Parameters

##### message

`string` \| `Uint8Array`\<`ArrayBufferLike`\>

#### Returns

`Promise`\<`string`\>
