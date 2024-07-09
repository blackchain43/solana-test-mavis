// import { TonConnectButton } from "@tonconnect/ui-react";
import {
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
const InstallWallet = ({ installUrl, icon }) => {
  return (
    <div className="my-4">
      <p className="px-2 text-neutrals/6">
        Please install the new version of wallet extension from the Chrome web
        store
      </p>
      <hr className="h-0.5 bg-neutrals/5 border-none my-4 mx-6" />
      <a
        className="bg-neutrals/3 flex p-2 rounded mt-2 mb-4 mx-6 items-center"
        href={installUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        {icon}
        <div className="flex-auto text-left ml-4">
          <div className="text-sm">Available in the</div>
          <div className="text-lg">Chrome Web Store</div>
        </div>
      </a>
    </div>
  );
};

const ButtonConnectWalletContainer = () => {
  // return <TonConnectButton />;
  return (
    <>
      <WalletMultiButton />
      <WalletDisconnectButton />
    </>
  );
};

export { InstallWallet };
export default ButtonConnectWalletContainer;
