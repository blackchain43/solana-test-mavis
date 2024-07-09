import { MenuAlt1Icon, XIcon } from "@heroicons/react/outline";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BUTTON_VARIANTS } from "../../Core/Button";
import clsxm from "../../../utils/clsxm";
import ButtonConnectWalletContainer from "../../ButtonConnectWallet/index.jsx";
import Button from "../../Core/Button";
import LogoIcon from "../../Icons/LogoIcon";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { Keypair, SystemProgram, Transaction } from "@solana/web3.js";

export const HEADER_LINK = [
  {
    title: "About",
    to: "/",
  },
];

const HomeHeader = () => {
  const [navbar, setNavbar] = useState(false);
  const { publicKey, connected } = useWallet();
  const { connection } = useConnection();
  const [balance, setBalance] = useState(null);

  useEffect(() => {
    const fetchBalance = async () => {
      if (connected && publicKey) {
        const balance = await connection.getBalance(publicKey);
        setBalance(balance / 1000000000); // Convert to SOL (assuming balance is in lamports)
      }
    };

    fetchBalance();
  }, [publicKey, connected, connection]);

  return (
    <div className="page-container justify-between w-full p-6 border-linear-3 mx-auto md:items-center md:flex relative z-30">
      <div className="flex items-center justify-between md:block">
        <Link to="/">
          <LogoIcon className="w-40 my-auto" enableText />
        </Link>
        <div className="md:hidden">
          <Button
            className="block md:hidden"
            variant={BUTTON_VARIANTS.BTN_TEXT}
            onClick={() => setNavbar(!navbar)}
          >
            {navbar ? (
              <XIcon className="w-6 h-6" />
            ) : (
              <MenuAlt1Icon className="w-6 h-6" />
            )}
          </Button>
        </div>
      </div>
      <div
        className={clsxm(
          "flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 hidden",
          {
            block: navbar,
          }
        )}
      >
        <nav className="items-center justify-end space-y-8 md:flex md:space-x-3 md:space-y-0">
          {connected && publicKey && (
            <div className="text-white">
              Balance:{" "}
              {balance !== null ? `${balance.toFixed(2)} SOL` : "Loading..."}
            </div>
          )}
          <ButtonConnectWalletContainer />
        </nav>
      </div>
    </div>
  );
};

export default HomeHeader;
