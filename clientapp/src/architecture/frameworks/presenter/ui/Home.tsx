import { motion } from "framer-motion";
import "../../../../../output.css"
import connectThroughWindow from "../../../../../blockchain_client/ethereum/connectWallet";
import { AuroraBackground } from "./background/Aurora-background";

 function Home() {
  return (
    <AuroraBackground className="aurora" >
    <motion.div
      initial={{ opacity: 0.5, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration:1,
        ease: "easeInOut",
      }}
      className="relative flex flex-col gap-4 items-center justify-center px-4"
    >
      <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
      Immutable X
      </div>
      <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
        digitalize your asset blockchain
      </div>
      <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
        Debug now
      </button>
      <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
         connect wallet
      </button>
    </motion.div>
  </AuroraBackground>
  );
}

export default Home