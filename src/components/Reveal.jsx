import { motion } from "framer-motion";

export default function Reveal({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 26,
        filter: "blur(5px)"
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)"
      }}
      viewport={{
        once: false,
        amount: 0.22,
        margin: "0px 0px -60px 0px"
      }}
      transition={{
        duration: 0.65,
        delay,
        ease: [0.22, 1, 0.36, 1]
      }}
    >
      {children}
    </motion.div>
  );
}