export default {
    // Wallet creation config.
    defaultLanguage: 'English',
    updateInterval: 45000, // ms
    // Default remote RPC wallet config.
    remoteWallet: {
        rpcAddress: 'http://localhost:3001',
        jsonRpc: 'json_rpc',
        rpcLogin: {
            rpcUser: 'nerva',
            rpcPassword: 'nerva'
        }
    },
    explorer: {
        api: 'http://localhost:17500/api/daemon/explorer/',
        txHashMask: 'http://localhost:17500/explorer/detail/<hash>',
        blockHashMask: 'http://localhost:17500/explorer/detail/<hash>'
    },
    tagline: 'Nerva Wallet'
};