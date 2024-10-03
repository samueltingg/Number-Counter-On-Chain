import React from 'react';
import myContract from '@/contracts/myContract';
import incrementMyNumberOnContract from '@/contracts/interact';
import { Dispatch, SetStateAction } from 'react';

export default function IncrementButton({ setMyNumber } : {setMyNumber: Dispatch<SetStateAction<number>>}) {
  const handleClick = async () => {
    try {
      // await myContract.methods.incrementNumber().send({ from: 'YOUR_WALLET_ADDRESS' });
      await incrementMyNumberOnContract();
      const number = await myContract.methods.myNumber().call();
      setMyNumber(Number(number));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button
        className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
		onClick={handleClick}
	>
		Increment Number
	</button>
  );
};

