let global : any = typeof window !== 'undefined' ? window : self;
global.config = {
	apiUrl:typeof window !== 'undefined' && window.location ? window.location.href.substr(0,window.location.href.lastIndexOf('/')+1)+'api/' : 'https://wallet.wazn.io/api/',
	trustedDaemonsAddresses: "95.179.152.61:11787",
	mainnetExplorerUrl: "http://explorer.wazn.io/",
	mainnetExplorerUrlHash: "http://explorer.wazn.io/tx/{ID}",
	mainnetExplorerUrlBlock: "http://explorer.wazn.io/block/{ID}",
	testnet: false,
	coinUnitPlaces: 6,
	txMinConfirms: 10,         // corresponds to CRYPTONOTE_DEFAULT_TX_SPENDABLE_AGE in WAZN
	txCoinbaseMinConfirms: 60, // corresponds to CRYPTONOTE_MINED_MONEY_UNLOCK_WINDOW in WAZN
	addressPrefix: 1274160,
	integratedAddressPrefix: 3910448,
	addressPrefixTestnet: 646450,
	integratedAddressPrefixTestnet: 23858,
	subAddressPrefix: 3124016,
	subAddressPrefixTestnet: 24242,
	feePerKB: new JSBigInt('4000000000'), //20^10 - for testnet its not used, as fee is dynamic.
	dustThreshold: new JSBigInt('1'), // 2 * pow(10, 9) -> nah. 1
	defaultMixin: 12, // webwallet mixin is 12. minimum mixin for WAZN is 8.

	idleTimeout: 30,
	idleWarningDuration: 20,

	coinSymbol: 'WAZN',
	openAliasPrefix: "wazn",
	coinName: 'WAZN',
	coinUriPrefix: 'wazn:',
	avgBlockTime: 120,
	maxBlockNumber: 500000000,

};
