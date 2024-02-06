import {motion} from 'framer-motion';
import { useEffect, useRef, useState } from "react";
import Button from './common/Button';
import { FaLinkedin, FaMessage, FaTwitter } from 'react-icons/fa6';
import { container, footer, listContainer, text } from '../constants/animations';



const Footer = () => {
  
    var btn = useRef(null);
    const para = "Let's work together";
    const words = para.split(" ");
    useEffect(() => {
      if(btn.current) {
        const btnWidth = btn.current.offsetWidth;
        btn.current.nextSibling.style.width = `${btnWidth}px`
      }
    },[])

  return (
    <div id='footer' className="bg-white relative pt-20 border-black">
      <div className="px-8 text-black font-orbit">
        <motion.div variants={listContainer} initial='initial' whileInView='animate' className="text-[50px] sm:text-[75px] md:text-[120px] xl:text-[200px] flex flex-wrap mb-">
          {words.map((word, i) => {
            const characters = word.split("");
            return (
              <motion.span className="mr-3 md:mr-5 xl:mr-10 chars" key={i}>
                {characters.map((char, j) => (
                  <motion.span
                    key={j}
                    variants={footer}
                    initial={{y: '10vh', opacity: 0}}
                    whileInView={{ y: 0, opacity: 1}}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.span>
            );
          })}
        </motion.div>
        
      </div>
      <div className="flex flex-col md:flex-row relative pb- items-center justify-around">
        <div className="flex relative font-orbit z-30 p-8 justify-center items-center gap-4 md:gap-12">
          <Button>
            <a
              className="md:block hidden"
              href="mailto:saipraveenajjarapu@gmail.com"
            >
              saipraveenajjarapu@gmail.com
            </a>
            <a
              className="block md:hidden"
              href="mailto:saipraveenajjarapu@gmail.com"
            >
              <FaMessage />
            </a>
          </Button>
          <Button>
            <a href="https://twitter.com/SaiPraveen_Ajj">
              <FaTwitter />
            </a>
          </Button>
          <Button>
            <a href="https://www.linkedin.com/in/praveen-ajjarapu-229657226/">
              <FaLinkedin />
            </a>
          </Button>
        </div>
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="relative z-30 font-orbit"
        >
          <Button full={true} className="rounded-full font-orbit">
            <a href="">Go back to Top</a>
          </Button>
        </div>
        <div className="absolute z-10 bottom-[45%] right-0 h-[1px] w-[100%] bg-black"></div>
      </div>
    </div>
  );
}

export default Footer