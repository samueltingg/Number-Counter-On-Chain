import React from 'react'
// import { useState } from 'react';

import { Dispatch, SetStateAction } from 'react';

declare global {
  interface Window {
    ethereum: any;
  }
}

const connectToMetamask = async () => {
  if (typeof window.ethereum !== 'undefined') {
    try {
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });
      const walletAddress = accounts[0];
      return walletAddress;
    } catch (error) {
      console.error('Error connecting to account:', error);
    }
  } else {
    console.log('MetaMask is not installed');
  }
};

export default function ConnectToMetamaskButton({ setWalletAddress } : {setWalletAddress: Dispatch<SetStateAction<string>>}) {
	return (
		<button
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            onClick={
              async function() {
                const address = await connectToMetamask();
                setWalletAddress(address);
              }
            }
        >
            Connect to Metamask
        </button>
	)
}
