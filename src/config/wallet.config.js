export default {
    // Wallet creation config.
    defaultLanguage: 'English',
    updateInterval: 45000, // ms
    // Default remote RPC wallet config.
    remoteWallet: {
        rpcAddress: 'http://localhost:11111',
        jsonRpc: 'json_rpc',
        rpcLogin: {
            rpcUser: 'wazn',
            rpcPassword: 'wazn'
        }
    },
    explorer: {
        api: 'http://localhost:19500/api/daemon/explorer/',
        txHashMask: 'http://localhost:19500/explorer/detail/<hash>',
        blockHashMask: 'http://localhost:19500/explorer/detail/<hash>'
    },
    tagline: 'WAZN Webwallet'
};
