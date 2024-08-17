import "./scrollStyle.css"
import { motion, Variants } from "framer-motion"

const sectorVariants = {
  offscreen: {
    y: 200
  },
  onscreen: {
    y: 100,
    rotate: 10,
    transition: {
      type: "spring",
      bounce: 0.5,
      duration: 1.5
    }
  }
}

const hue = (h) => `hsl(${h}, 100%, 50%)`;

export const Component =({ sector, hueA, hueB })=> {
  const background = `linear-gradient(300deg, ${hue(hueA)}, ${hue(hueB)})`;

  return (
    <motion.div
      className="sector-container"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false, amount: 1 }}
    >
      <div className="splash" style={{ background }} />
      <motion.div className="sector" variants={sectorVariants}>
        {sector}
      </motion.div>
    </motion.div>
  );
}