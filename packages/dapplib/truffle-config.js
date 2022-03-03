require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict enter brand venture stone rice rifle coin hunt pave army gasp'; 
let testAccounts = [
"0x48c13be54940354fc06a1f93f732576a0eafe7a2fb10d27a82d15af972917bf1",
"0x8b193e3df33ab5a2955050a43172331d129810c0925bedd11ba48697470e25a3",
"0x173636bbfc67596d528798026f0f480bc3d4db48f1cf8de0a622c422df8762c7",
"0x304f948c999b190846d1362a932389b352a0eb75304267ff354d1ddc66483ba2",
"0x33e279f1e6797448ad9abe2f4ec855b3621b929b29cf7f54553390a9a175cd85",
"0x9494c3657f23ecb8c9cfa21a68c8805576516b42644d7d7399a2baa4888e3aa6",
"0x155b474f2f73c2378515ed6217dee0c6446c22c24aa7ef1beeee1ae94d4443f1",
"0xcdef3fae33cc1e1cf3efd381bd0437d2a6109e86f795822883ae0367818a27e1",
"0x4e87953441d4c3a7f79208a476d50d8a3810fc66b3f4254310d81af07269e601",
"0x1c486bfa80971d883c3218c49069d5a3abf1f0548e2d049b456d2ca57b2c7ac8"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

