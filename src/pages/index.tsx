import localFont from "next/font/local";
import { useState, useEffect } from 'react';
import ConnectToMetamaskButton from "@/components/connectToMetamask";
import IncrementButton from "@/components/incrementButton";
import Head from 'next/head';
import myContract from "@/contracts/myContract";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {

  const [walletAddress, setWalletAddress] = useState('');
  const [myNumber, setMyNumber] = useState(0);

  useEffect(() => {
    const getNumber = async () => {
      const number = await myContract.methods.myNumber().call();
      console.log("number->>>>", typeof(number));
      setMyNumber(Number(number));
    };
    getNumber();
  }, []);

  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <Head>
        <title>Ethereum Number Tracker</title>
      </Head>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <ConnectToMetamaskButton setWalletAddress={setWalletAddress} />
          <p> Wallet Address: {walletAddress}</p>
        </div>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <IncrementButton  setMyNumber={setMyNumber}/>
          <p> Number: {myNumber}</p>
        </div>
      </main>
    </div>

  );
}
