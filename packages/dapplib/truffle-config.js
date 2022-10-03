require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good clock bottom short blanket crater remember equip half kitchen success size'; 
let testAccounts = [
"0xf6af6b00f4c790bfc20b26e92a722f6eca4b2b6db648e098f0e77ee3fce2a994",
"0xe3a81ac982554a133894e2189b4abc8909150effcef212a45ec0ccb56b1b3ac7",
"0xcb8959ce83df6dac3c0b3790d49018da2eb3ee6129214932b7accfa124bab348",
"0xff13524bd11d9dfbfdbde388d43a68f083ab3b9d5eb62e33da19f8acf0af0d31",
"0xb3561e05a91e3f8f8a5029e7fbff1ad2681d6d5f148c90620dc87f7bf49b1758",
"0x67ce5974b46987250d2c6654c0efe535c6f935c2b358e5e57520e5d8b089e481",
"0xa120e5b8c15bf4ca826a5d4f9c52074c0f02b88ded9cc8114d72e20886f3fe9e",
"0x70f31b732d54b0948c8cd83e876a88d8ddabdb040826c54669879f0be4d46beb",
"0x81e75ede3792157c7660abb9e6a0488847943fd21f763ba224c776b9e979643c",
"0x4c35d0ffd95c57f1bafc36d7921b267edda45a304e1b27eaa0c5b64eaa56325f"
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

