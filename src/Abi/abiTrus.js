const abiTrust = [
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "creator",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "token",
                "type": "address"
            }
        ],
        "name": "NewToken",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "deployedTokens",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes",
                "name": "bytecode",
                "type": "bytes"
            },
            {
                "internalType": "uint256",
                "name": "salt",
                "type": "uint256"
            }
        ],
        "name": "getAddressCreate2",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "name",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "symbol",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "decimals",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "supply",
                "type": "uint256"
            },
            {
                "components": [
                    {
                        "internalType": "bool",
                        "name": "mintable",
                        "type": "bool"
                    },
                    {
                        "internalType": "bool",
                        "name": "pausable",
                        "type": "bool"
                    },
                    {
                        "internalType": "bool",
                        "name": "burnable",
                        "type": "bool"
                    }
                ],
                "internalType": "struct LaunchType",
                "name": "launchType",
                "type": "tuple"
            }
        ],
        "name": "getBytecode",
        "outputs": [
            {
                "internalType": "bytes",
                "name": "",
                "type": "bytes"
            }
        ],
        "stateMutability": "pure",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "creator",
                "type": "address"
            }
        ],
        "name": "getdeployedTokens",
        "outputs": [
            {
                "internalType": "address[]",
                "name": "",
                "type": "address[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "creator",
                "type": "address"
            }
        ],
        "name": "getdeployedTokensLen",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "name",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "symbol",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "decimals",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "supply",
                "type": "uint256"
            },
            {
                "components": [
                    {
                        "internalType": "bool",
                        "name": "mintable",
                        "type": "bool"
                    },
                    {
                        "internalType": "bool",
                        "name": "pausable",
                        "type": "bool"
                    },
                    {
                        "internalType": "bool",
                        "name": "burnable",
                        "type": "bool"
                    }
                ],
                "internalType": "struct LaunchType",
                "name": "launchType",
                "type": "tuple"
            }
        ],
        "name": "newToken",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    }
]

export default abiTrust