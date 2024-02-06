import { textVariants } from "../constants/constants"
import { motion } from "framer-motion"

const SpringText = () => {
  return (
    <div className="absolute hidden md:block uppercase font-orbit stroke-1 -z-10 pointer-events-none text-container text-[#ABDCFF] text-5xl md:text-8xl lg:text-9xl top-[20%]  ">
        <motion.p
          variants={textVariants("left", "spring")}
          initial="hidden"
          whileInView="show"
          viewport={{once: true}}
          >
          Hey There!
        </motion.p>
        <motion.p
          variants={textVariants("right", "spring")}
          initial="hidden"
          whileInView="show"
          viewport={{once: true}}
          >
          Hey There!
        </motion.p>
        <motion.p
          variants={textVariants("left", "spring")}
          viewport={{once: true}}
          initial="hidden"
          whileInView="show"
          >
          Hey There!
        </motion.p>
        <motion.p
          viewport={{once: true}}
          variants={textVariants("right", "spring")}
          initial="hidden"
          whileInView="show"
        >
          Hey There!
        </motion.p>
      </div>
  )
}

export default SpringText