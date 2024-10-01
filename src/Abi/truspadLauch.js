const truspadLAuch = [
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
                "name": "launch",
                "type": "address"
            }
        ],
        "name": "NewFairLaunch",
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
        "name": "deployedLaunches",
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
                "components": [
                    {
                        "internalType": "address",
                        "name": "token",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "softCap",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "hardCap",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "amountForSale",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "listingRate",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "minimumBuy",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "maximumBuy",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "percentageForLiquidity",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "percentageForTeam",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "startDate",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "endDate",
                        "type": "uint256"
                    }
                ],
                "internalType": "struct FairLaunchConfig",
                "name": "config",
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
        "name": "getdeployedLaunches",
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
        "name": "getdeployedLaunchesLen",
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
                "components": [
                    {
                        "internalType": "address",
                        "name": "token",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "softCap",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "hardCap",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "amountForSale",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "listingRate",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "minimumBuy",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "maximumBuy",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "percentageForLiquidity",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "percentageForTeam",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "startDate",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "endDate",
                        "type": "uint256"
                    }
                ],
                "internalType": "struct FairLaunchConfig",
                "name": "config",
                "type": "tuple"
            }
        ],
        "name": "newFairLaunch",
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

export default truspadLAuch