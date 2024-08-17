import "./scrollStyle.css"
import { motion, Variants } from "framer-motion"

const sectorVariants = {
  offscreen: {
    y: 300
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
}

const hue = (h) => `hsl(${h}, 100%, 50%)`;

export const Component =({ sector, hueA, hueB })=> {
  const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;

  return (
    <motion.div
      className="sector-container"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <div className="splash" style={{ background }} />
      <motion.div className="card" variants={sectorVariants}>
        {sector}
      </motion.div>
    </motion.div>
  );
}