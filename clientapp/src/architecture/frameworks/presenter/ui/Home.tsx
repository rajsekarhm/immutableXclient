import { motion } from "framer-motion";
import { AuroraBackground } from "./background/Aurora-background";
import { useWallet } from "../hooks/useWallet";
 function Home() {
  const {connectWallet } = useWallet()
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.5,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
          Immutable X
        </div>
        {/* <SVG></SVG> */}
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
          Digitalize your assets in Blockchain... 
        </div>
        <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2" onClick={connectWallet}>
          connect wallet
        </button>
      </motion.div>
    </AuroraBackground>
  );
}

export default Home