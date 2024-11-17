import { useState, useEffect, useCallback, useMemo } from 'react';
import { ethers } from 'ethers';

declare global {
  interface Window {
    ethereum?: any;
  }
}

export function useWallet() {
  const [account, setAccount] = useState<string | null>(null);
  const [balance, setBalance] = useState<string>('0');

  const updateBalance = useCallback(async (address: string) => {
    if (window.ethereum) {
      const provider =  new ethers.BrowserProvider(window.ethereum);
      const balance = await provider.getBalance(address);
      setBalance(ethers.formatEther(balance).slice(0, 7));
    }
  },[]);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts',
        });
        const userAccount = accounts[0];
        setAccount(userAccount);
        await updateBalance(userAccount);
      } catch (error) {
        console.error('Error connecting wallet:', error);
      }
    } else {
      alert('Please install hot wallet to use this feature!');
    }
  };

  const disconnectWallet = () => {
    setAccount(null);
    setBalance('0');
  };

  useEffect(() => {
    const checkConnection = async () => {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({
          method: 'eth_accounts',
        });
        if (accounts.length > 0) {
          setAccount(accounts[0]);
          await updateBalance(accounts[0]);
        }
      }
    };

    checkConnection();

    if (window.ethereum) {
      window.ethereum.on('accountsChanged', (accounts: string[]) => {
        if (accounts.length > 0) {
          setAccount(accounts[0]);
          updateBalance(accounts[0]);
        } else {
          setAccount(null);
          setBalance('0');
        }
      });

      window.ethereum.on('chainChanged', () => {
        window.location.reload();
      });
    }

    return () => {
      if (window.ethereum) {
        window.ethereum.removeAllListeners();
      }
    };
  }, [updateBalance]);

  return { account, balance, connectWallet, disconnectWallet };
}