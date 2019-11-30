Official WAZN Web Wallet
======================

[![License](https://img.shields.io/badge/license-EUPL--1.2-red)](https://opensource.org/licenses/EUPL-1.2)

This web wallet is doing everything client-side to deliver outstanding privacy to users.  
Server is used solely to optimize the communication with the daemon and to compress the blockchain.

## Security
**No keys, seeds, or sensitive data is sent to the server**  
If you find a potential security issue, please contact our support and we will look into it promptly.  
Encryption is done with a certified library, [Tweetnacl.Js.](https://github.com/dchest/tweetnacl-js)

## Features
- Complete wallet sync without server side processing for security
- Receive/send history
- Mempool support to check incoming transfers
- Send coins - including QR code scanning and subaddress support
- Receive page to generate a custom QR code
- Import from private keys, mnemonic seed, or json file (exported by the wallet)
- Export private keys, mnemonic phrase, or json file (which include all the history)
- View-only wallet
- Basic network stats

## License
```
Licensed under the EUPL-1.2
Copyright (c) 2019 WAZN Project
Copyright (c) 2018 The Masari Project
```
