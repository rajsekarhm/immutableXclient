
import { Wallet } from "lucide-react";
import { useWallet } from "../views/hooks/useWallet";

function WalletConnect(){
    const { account, balance, connectWallet, disconnectWallet } = useWallet();
    return !account ? (
        <button
          onClick={connectWallet}
          className="flex items-center gap-2 bg-black hover:bg-b-600 text-white px-4 py-2 rounded-lg transition-colors"
        >
          <Wallet className="w-5 h-5" />
          Connect Wallet
        </button>
      ) : (<>
       <div className="space-y-2">
       <div className="text-sm text-black-300 mb-2">
            {account.slice(0, 6)}...{account.slice(-4)}
          </div>
          <div className="text-sm text-black-300 mb-3">
            Balance: {balance} ETH
          </div>
          <button
            onClick={disconnectWallet}
            className="w-full text-sm bg-black hover:bg-red-600 text-white px-3 py-1 rounded transition-colors"
          >
            Disconnect
          </button>

       </div>
      </>
      )
}

export default WalletConnect