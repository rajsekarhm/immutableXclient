import "./styles.css";
import { Suspense, useState } from "react";
import { motion, MotionConfig, useMotionValue } from "framer-motion";
import { Shapes } from "./Shapes";
import { transition } from "./settings";
import useMeasure, { RectReadOnly } from "react-use-measure";
import connectThroughWindow from "../blockchain_client/ethereum/connectWallet";

const buttonStyle: any = {
  "--purple": "#db07d1",
  "--pink": "#f2056f",
  "--blue": "#61dafb",
  appearance: "none",
  border: "none",
  cursor: "pointer",
  backgroundColor: "#acc7ed",
  color: "#fff",
  borderRadius: "60px",
  outline: "none",
  margin: "0",
  padding: "12px 25px",
  fontFamily: '"Poppins"',
  fontSize: "48px",
  fontWeight: "600",
  lineHeight: "58px",
  letterSpacing: "-1px",
  position: "relative",
  textAlign: "center",
  display: "flex",
  alignItems: "center",
};

export function Home() {
  const [ref, bounds, remeasure] = useMeasure({ scroll: false });
  const [isHover, setIsHover] = useState(false);
  const [isPress, setIsPress] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const resetMousePosition = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <MotionConfig transition={transition}>
      <motion.button
        onClick={connectThroughWindow}
        style={
          {
            ...buttonStyle,
            position: "absolute",
            top: "10px",
            right: "10px",
            transform: "scale(0.8)",
          } as React.CSSProperties
        }
        ref={ref}
        initial={false}
        animate={isHover ? "hover" : "rest"}
        whileTap="press"
        variants={{
          rest: { scale: 0.5 },
          hover: { scale: 0.8 },
          press: { scale: 0.7 },
        }}
        onHoverStart={() => {
          resetMousePosition();
          setIsHover(true);
        }}
        onHoverEnd={() => {
          resetMousePosition();
          setIsHover(false);
        }}
        onTapStart={() => setIsPress(true)}
        onTap={() => setIsPress(false)}
        onTapCancel={() => setIsPress(false)}
        onPointerMove={(e: React.PointerEvent<HTMLButtonElement>) => {
          mouseX.set(e.clientX - bounds.x - bounds.width / 2);
          mouseY.set(e.clientY - bounds.y - bounds.height / 2);
        }}
      >
        <motion.div
          className="shapes"
          variants={{
            rest: { opacity: 0 },
            hover: { opacity: 1 },
          }}
        >
          <Shapes
            isHover={isHover}
            isPress={isPress}
            mouseX={mouseX}
            mouseY={mouseY}
          />
        </motion.div>
        <motion.div
          variants={{ hover: { scale: 0.5 }, press: { scale: 0.8 } }}
          className="label"
        >
          Connect Wallet
        </motion.div>
      </motion.button>
      <motion.button
        style={buttonStyle as React.CSSProperties}
        ref={ref}
        initial={false}
        animate={isHover ? "hover" : "rest"}
        whileTap="press"
        variants={{
          rest: { scale: 1 },
          hover: { scale: 1.5 },
          press: { scale: 1.4 },
        }}
        onHoverStart={() => {
          resetMousePosition();
          setIsHover(true);
        }}
        onHoverEnd={() => {
          resetMousePosition();
          setIsHover(false);
        }}
        onTapStart={() => setIsPress(true)}
        onTap={() => setIsPress(false)}
        onTapCancel={() => setIsPress(false)}
        onPointerMove={(e: React.PointerEvent<HTMLButtonElement>) => {
          mouseX.set(e.clientX - bounds.x - bounds.width / 2);
          mouseY.set(e.clientY - bounds.y - bounds.height / 2);
        }}
      >
        <motion.div
          className="shapes"
          variants={{
            rest: { opacity: 0 },
            hover: { opacity: 1 },
          }}
        >
          <Shapes
            isHover={isHover}
            isPress={isPress}
            mouseX={mouseX}
            mouseY={mouseY}
          />
        </motion.div>
        <motion.div
          variants={{ hover: { scale: 0.85 }, press: { scale: 1.1 } }}
          className="label"
        >
          ImmutableX Digital Assets
        </motion.div>
      </motion.button>
    </MotionConfig>
  );
}
