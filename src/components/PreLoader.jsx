import { motion } from "framer-motion"
import { borderVariants, icon, slideIn, slideUp } from "../constants/animations"
import { useEffect, useState } from "react";
import '../App.css'
const PreLoader = () => {
    const [ dimension, setDimension ] = useState({width: 0, height: 0});

    useEffect(() => {
        setDimension({width: window.innerWidth, height: window.innerHeight})
    }, [])
    const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width/2} ${dimension.height + 300} 0 ${dimension.height}  L0 0`

    const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width/2} ${dimension.height} 0 ${dimension.height}  L0 0`



    const curve = {
      initial: {
        d: initialPath,
      },

      exit: {
        d: targetPath,
        transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
      },
    };

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className="w-[100vw] h-[100vh] flex justify-center items-center my-auto text-white bg-black overflow-hidden z-50 fixed top-0 left-0"
    >
      {dimension.width > 0 && (
        <>

          <motion.div className="font-orbit relative text-xl">
            <svg
              width="164"
              height="163"
              viewBox="0 0 164 163"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.rect variants={icon}
              initial="hidden"
              animate="visible"  width="130" height="120" fill="#FFFCFC" />
            </svg>
            <div className="absolute top-[20%] left-5 text-black">
              <motion.p variants={slideIn(1)} initial="hidden" animate="show">
                Praveen
              </motion.p>
              <motion.p variants={slideIn(1.3)} initial="hidden" animate="show">
                Ajjarapu.
              </motion.p>
            </div>
          </motion.div>
          <svg className="absolute w-[100%] h-[100% + 300px] top-0">
            <motion.path
              variants={curve}
              className="fill-black"
              initial="initial"
              exit="exit"
              d={initialPath}
            ></motion.path>
          </svg>
        </>
      )}
    </motion.div>
  );
}

export default PreLoader