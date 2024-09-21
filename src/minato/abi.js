const abi = [
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "arg0",
          "type": "uint256"
        },
        {
          "internalType": "address[]",
          "name": "arg1",
          "type": "address[]"
        },
        {
          "internalType": "address",
          "name": "arg2",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "arg3",
          "type": "uint256"
        }
      ],
      "name": "swapExactETHForTokens",
      "outputs": [
        {
          "internalType": "uint256[]",
          "name": "",
          "type": "uint256[]"
        }
      ],
      "stateMutability": "payable",
      "type": "function"
    },
    {
        "constant": true,
        "inputs": [
          { "name": "amountIn", "type": "uint256" },
          { "name": "path", "type": "address[]" }
        ],
        "name": "getAmountsOut",
        "outputs": [
          { "name": "", "type": "uint256[]" }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      }, 
      {
        "constant": false,
        "inputs": [
          {
            "name": "spender",
            "type": "address"
          },
          {
            "name": "value",
            "type": "uint256"
          }
        ],
        "name": "approve",
        "outputs": [
          {
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      }, 
      {
        "constant": false,
        "inputs": [
          {
            "name": "arg0",
            "type": "address"
          },
          {
            "name": "arg1",
            "type": "uint256"
          },
          {
            "name": "arg2",
            "type": "uint256"
          },
          {
            "name": "arg3",
            "type": "uint256"
          },
          {
            "name": "arg4",
            "type": "address"
          },
          {
            "name": "arg5",
            "type": "uint256"
          }
        ],
        "name": "addLiquidityETH",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
      }
  ];

  export default abi