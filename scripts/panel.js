const contractAddress = "0xc5076e7470e7bb1B16A84142F79F6fCbA83fb9fD";
const contractABI = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "tokenAddress",
				"type": "address"
			}
		],
		"name": "TokenCreated",
		"type": "event"
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
				"name": "initialSupply",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "maxSupply",
				"type": "uint256"
			}
		],
		"name": "createToken",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	}
]; // abi.

const tokenAbi = [
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
				"name": "maxSupply",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
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
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "allowance",
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
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "balanceOf",
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
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "subtractedValue",
				"type": "uint256"
			}
		],
		"name": "decreaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "addedValue",
				"type": "uint256"
			}
		],
		"name": "increaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "initialSupply",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			}
		],
		"name": "initialize",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "mint",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
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
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]; // Token ABI.

const provider = new ethers.providers.Web3Provider(window.ethereum, 3333)//ChainID 97 Meganet testnet
let signer;
let signerAddress;
let contract;

const event = "TokenCreated";

provider.send("eth_requestAccounts", []).then(()=>{
    provider.listAccounts().then( async (accounts) => {
        signer = provider.getSigner(accounts[0]); //account in metamask
        signerAddress = await signer.getAddress();

		contract = new ethers.Contract(
            contractAddress,
            contractABI,
            signer
        )
     
    }
    )
}
)

const targetNetworkId = '0xd05';

const checkNetwork = async () => {
	if (window.ethereum) {
	  const currentChainId = await window.ethereum.request({
		method: 'eth_chainId',
	  });

	  // return true if network id is the same
	  if (currentChainId == targetNetworkId) return true;
	  // return false is network id is different
	  return false;
	}
  };

const switchNetwork = async () => {
	const network_status = await checkNetwork();
	if (network_status === true) return;
	await window.ethereum.request({
	  method: 'wallet_switchEthereumChain',
	  params: [{ chainId: targetNetworkId }],
	});
	// refresh
	window.location.reload();
  };

switchNetwork();

async function createAsset(){
	await switchNetwork();
	let name = document.getElementById("name").value;
	let symbol = document.getElementById("symbol").value;
	symbol = symbol.toUpperCase();
	let startSupplyInETH = document.getElementById("start_supply").value;
	let maxSupplyInETH = document.getElementById("max_supply").value;
	let startSupplyInWei = ethers.utils.parseEther(startSupplyInETH.toString())
	let maxSupplyInWei = ethers.utils.parseEther(maxSupplyInETH.toString())

    let result = await contract.createToken(name, symbol, startSupplyInWei, maxSupplyInWei);
    const res = await result.wait();
    console.log(res);
if (typeof res.events[0] === 'undefined') return;
	let tokenAddress = res.events[0].address;
	let resultLog = document.getElementById("resultLog");
    resultLog.innerHTML = `<h3>Token was created.</h3>
<p>Address: ${tokenAddress}:<br>
<a href="https://scan.testnet.metagarden.io/address/${tokenAddress}" target="_blank">Block-explorer</a>, <a href="/tokens-panel/#address=${tokenAddress}" target="_blank">Go to mint</a></p>`;
}

async function mintToken() {
	const tokenAddress = getParameterByName("address");
	const mintAmount = ethers.utils.parseEther(document.getElementById("mint_amount").value);
  
	const tokenContract = new ethers.Contract(tokenAddress, tokenAbi, signer);
	tokenContract.mint(signerAddress, mintAmount)
	  .then(() => {
		window.alert("Minted", ethers.utils.formatEther(mintAmount), "tokens");
	  })
	  .catch((error) => {
		window.alert(JSON.stringify(error));
	  });
  }
  
  function getParameterByName(name) {
	const urlParams = new URLSearchParams(window.location.hash.substring(1));
	return urlParams.get(name) || "";
  }
  