import { useRef } from "react";
import { motion } from "framer-motion";

const Button = ({ children }) => {
    const circle = useRef(null);

    const handleMouseEnter = (e) => {
        circle.current.top = '125%';
    }

  return (
    <div
      className=" text-center overflow-hidden relative rounded-full px-3 py-2 border-white border-2"
      onMouseEnter={() => {handleMouseEnter(e)}}
    >
      {children}
      <motion.div
        className="circle absolute w-[100%] h-[100%] left-0 rounded-full bg-white"
        ref={circle}
      ></motion.div>
    </div>
  );
}

export default Button