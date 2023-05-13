const contractAddress = "0xC7f183B79607f3eFaADde183FD26fA607fE13ca2";
const contractABI = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "minerAddress",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "creatorAddress",
				"type": "address"
			}
		],
		"name": "MinerCreated",
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
				"internalType": "address",
				"name": "rewardTokenAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "firstPrice",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "increment",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "totalDays",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "rewardPerDay",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "totalMiners",
				"type": "uint256"
			}
		],
		"name": "createMiner",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]; // abi.

const minerAbi = [
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
				"internalType": "address",
				"name": "rewardTokenAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "firstPrice",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "increment",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "totalDays",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "rewardPerDay",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "totalMiners",
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
				"name": "approved",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
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
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "ApprovalForAll",
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
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
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
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
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
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "getApproved",
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
		"inputs": [],
		"name": "getPrice",
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
		"name": "getRewards",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
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
				"name": "operator",
				"type": "address"
			}
		],
		"name": "isApprovedForAll",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "mint",
		"outputs": [],
		"stateMutability": "payable",
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
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "ownerOf",
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
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
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
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "data",
				"type": "bytes"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "setApprovalForAll",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes4",
				"name": "interfaceId",
				"type": "bytes4"
			}
		],
		"name": "supportsInterface",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
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
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "tokenURI",
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
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "withdraw",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]; // Token ABI.

const provider = new ethers.providers.Web3Provider(window.ethereum, 9000)//ChainID 97 Meganet testnet
let signer;
let signerAddress;
let contract;

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

const targetNetworkId = '0x2328';

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

async function createMiner(){
	await switchNetwork();
	let name = document.getElementById("name").value;
	let symbol = document.getElementById("symbol").value;
	symbol = symbol.toUpperCase();
	let rewardTokenAddress = document.getElementById("rewardTokenAddress").value;
	let fearstPriceInETH = document.getElementById("firstPrice").value;
	let increment = parseInt(document.getElementById("increment").value);
	let totalDays = parseInt(document.getElementById("totalDays").value);
	let rewardPerDayInETH = document.getElementById("rewardPerDay").value;
	let totalMiners = parseInt(document.getElementById("totalMiners").value);
	let fearstPriceInWei = ethers.utils.parseEther(fearstPriceInETH.toString())
	let rewardPerDayInWEI = ethers.utils.parseEther(rewardPerDayInETH.toString())

    let result = await contract.createMiner(name, symbol, rewardTokenAddress, fearstPriceInWei, increment, totalDays, rewardPerDayInWEI, totalMiners);
    const res = await result.wait();
    console.log(res);
if (typeof res.events[0] === 'undefined') return;
	let tokenAddress = res.events[0].args[0];
	let resultLog = document.getElementById("resultLog");
    resultLog.innerHTML = `<h3>Miner was created.</h3>
<p>Address: ${tokenAddress}:<br>
<a href="https://scan.testnet.metagarden.io/address/${tokenAddress}" target="_blank">Block-explorer</a>, <a href="/tokens-panel/miners.html#address=${tokenAddress}" target="_blank">Go to mint and get rewards</a></p>`;
}

async function mintMiner() {
	const tokenAddress = getParameterByName("address");
  
	const tokenContract = new ethers.Contract(tokenAddress, minerAbi, signer);
	const price = await tokenContract.getPrice();
	tokenContract.mint({value: price})
	  .then(() => {
		window.alert("Minted ", "miner");
	  })
	  .catch((error) => {
		window.alert(JSON.stringify(error));
	  });
  }
  
  async function getRewards() {
	const tokenAddress = getParameterByName("address");
  
	const tokenContract = new ethers.Contract(tokenAddress, minerAbi, signer);
	tokenContract.getRewards()
	  .then(() => {
		window.alert("The rewards are collected!");
	  })
	  .catch((error) => {
		window.alert(JSON.stringify(error));
	  });
  }

  function getParameterByName(name) {
	const urlParams = new URLSearchParams(window.location.hash.substring(1));
	return urlParams.get(name) || "";
  }
  