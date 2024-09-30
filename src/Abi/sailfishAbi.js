const sailfishAbi = [
    {
        "inputs": [
            {
                "internalType": "contract IVC",
                "name": "vc_",
                "type": "address"
            },
            {
                "internalType": "contract IWETH",
                "name": "weth_",
                "type": "address"
            },
            {
                "internalType": "Token",
                "name": "ballot_",
                "type": "bytes32"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "contract IGauge",
                "name": "gauge",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "contract IBribe",
                "name": "bribe",
                "type": "address"
            }
        ],
        "name": "BribeAttached",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "contract IGauge",
                "name": "gauge",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "contract IBribe",
                "name": "bribe",
                "type": "address"
            }
        ],
        "name": "BribeKilled",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "contract IConverter",
                "name": "pool",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "user",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "Token[]",
                "name": "tokenRef",
                "type": "bytes32[]"
            },
            {
                "indexed": false,
                "internalType": "int128[]",
                "name": "delta",
                "type": "int128[]"
            }
        ],
        "name": "Convert",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "components": [
                    {
                        "internalType": "address",
                        "name": "facetAddress",
                        "type": "address"
                    },
                    {
                        "internalType": "enum VaultStorage.FacetCutAction",
                        "name": "action",
                        "type": "uint8"
                    },
                    {
                        "internalType": "bytes4[]",
                        "name": "functionSelectors",
                        "type": "bytes4[]"
                    }
                ],
                "indexed": false,
                "internalType": "struct VaultStorage.FacetCut[]",
                "name": "_diamondCut",
                "type": "tuple[]"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "_init",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "bytes",
                "name": "_calldata",
                "type": "bytes"
            }
        ],
        "name": "DiamondCut",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "contract IGauge",
                "name": "pool",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "user",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "Token[]",
                "name": "tokenRef",
                "type": "bytes32[]"
            },
            {
                "indexed": false,
                "internalType": "int128[]",
                "name": "delta",
                "type": "int128[]"
            }
        ],
        "name": "Gauge",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "contract IGauge",
                "name": "gauge",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "bool",
                "name": "killed",
                "type": "bool"
            }
        ],
        "name": "GaugeKilled",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "contract ISwap",
                "name": "pool",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "user",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "Token[]",
                "name": "tokenRef",
                "type": "bytes32[]"
            },
            {
                "indexed": false,
                "internalType": "int128[]",
                "name": "delta",
                "type": "int128[]"
            }
        ],
        "name": "Swap",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "Token[]",
                "name": "tokenRef",
                "type": "bytes32[]"
            },
            {
                "indexed": false,
                "internalType": "int128[]",
                "name": "delta",
                "type": "int128[]"
            }
        ],
        "name": "UserBalance",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "contract IGauge",
                "name": "pool",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "user",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "int256",
                "name": "voteDelta",
                "type": "int256"
            }
        ],
        "name": "Vote",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "Token[]",
                "name": "tokens",
                "type": "bytes32[]"
            },
            {
                "internalType": "uint256[]",
                "name": "balancesBefore",
                "type": "uint256[]"
            }
        ],
        "name": "balanceDelta",
        "outputs": [
            {
                "internalType": "int128[]",
                "name": "delta",
                "type": "int128[]"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "Token[]",
                "name": "tokenRef",
                "type": "bytes32[]"
            },
            {
                "internalType": "int128[]",
                "name": "deposit",
                "type": "int128[]"
            },
            {
                "components": [
                    {
                        "internalType": "bytes32",
                        "name": "poolId",
                        "type": "bytes32"
                    },
                    {
                        "internalType": "bytes32[]",
                        "name": "tokenInformations",
                        "type": "bytes32[]"
                    },
                    {
                        "internalType": "bytes",
                        "name": "data",
                        "type": "bytes"
                    }
                ],
                "internalType": "struct VelocoreOperation[]",
                "name": "ops",
                "type": "tuple[]"
            }
        ],
        "name": "execute",
        "outputs": [
            {
                "internalType": "int128[]",
                "name": "",
                "type": "int128[]"
            }
        ],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "bribeIndex",
                "type": "uint256"
            },
            {
                "internalType": "Token[]",
                "name": "tokenRef",
                "type": "bytes32[]"
            },
            {
                "internalType": "int128[]",
                "name": "cumDelta",
                "type": "int128[]"
            },
            {
                "internalType": "contract IGauge",
                "name": "gauge",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "elapsed",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "user",
                "type": "address"
            }
        ],
        "name": "extort",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "initializeFacet",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "user",
                "type": "address"
            },
            {
                "internalType": "Token[]",
                "name": "tokenRef",
                "type": "bytes32[]"
            },
            {
                "internalType": "int128[]",
                "name": "deposit",
                "type": "int128[]"
            },
            {
                "components": [
                    {
                        "internalType": "bytes32",
                        "name": "poolId",
                        "type": "bytes32"
                    },
                    {
                        "internalType": "bytes32[]",
                        "name": "tokenInformations",
                        "type": "bytes32[]"
                    },
                    {
                        "internalType": "bytes",
                        "name": "data",
                        "type": "bytes"
                    }
                ],
                "internalType": "struct VelocoreOperation[]",
                "name": "ops",
                "type": "tuple[]"
            }
        ],
        "name": "query",
        "outputs": [
            {
                "internalType": "int128[]",
                "name": "",
                "type": "int128[]"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    }
]

export default sailfishAbi