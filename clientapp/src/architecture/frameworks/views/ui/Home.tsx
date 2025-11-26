import { motion } from "framer-motion";
import { Vortex } from "./background/Vortex";
import { useWallet } from "../hooks/useWallet";
import React from "react"
import SignUpOrSignInButton from "../../components/utils/CornerSignUp";

function Home() {
  const { connectWallet } = useWallet();
  const SignUpHome = React.memo(() => (
    <SignUpOrSignInButton name="Sign-Up" routerUrl="/sign-up/users" />
  ));  
  return (
    <Vortex>
      <SignUpHome/>
      <div className="min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.5,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="flex flex-col gap-6 items-center justify-center px-4 text-center"
        >
          <div className="text-4xl md:text-7xl font-extrabold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent animate-pulse drop-shadow-md">
            Immutable X
          </div>
          <div className="font-light text-lg md:text-3xl dark:text-neutral-200 text-white max-w-xl leading-relaxed tracking-wide">
            Digitalize your assets in the Blockchain like never before.
          </div>
          <button
            className="bg-black dark:bg-white rounded-full text-white dark:text-black px-6 py-3 text-lg font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
            onClick={connectWallet}
          >
            Connect Wallet
          </button>
        </motion.div>
      </div>
    </Vortex>
  );
}

export default Home;
