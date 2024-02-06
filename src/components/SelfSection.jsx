import { useScroll, motion, useTransform, AnimatePresence } from 'framer-motion';
import { para } from '../constants/constants';
import { liAnim, listContainer, wordAnim } from '../constants/animations';
import { useRef } from 'react';
import '../App.css';




const SelfSection = () => {
    const selfPara = useRef(null);
    const { scrollYProgress } = useScroll({
        target: selfPara,
        offset: ['start 0.9', 'start 0.25'],
    });
    const words = para.split(" ");
    const ab = "About me:"
    const about = ab.split(" ");
 

    




    return (
      <div id="about" className="font-orbit p-8 text-black bg-white">
        <AnimatePresence>
          <div className="h-[30vh] lg:h-[50vh]">
            <motion.p
            viewport={{ once: true }}
              variants={listContainer}
              initial="initial"
              whileInView="animate"
              className="text-5xl chars flex  gap-10 lg:text-9xl"
            >
              {about.map((chars, i) => {
                const char = chars.split("");
                return (
                  <motion.span key={i}>
                    {char.map((c, j) => (
                      <motion.span variants={liAnim} key={j + i}>
                        {c}
                      </motion.span>
                    ))}
                  </motion.span>
                );
              })}
            </motion.p>
          </div>
        </AnimatePresence>
        <p className="flex relative flex-wrap" ref={selfPara}>
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);
            return (
              <span className="mb-2 mr-2 md:mb-6 md:mr-5 text-xl lg:text-5xl">
                <span className="absolute opacity-20">{word}</span>
                <motion.span key={i} style={{ opacity }}>
                  {word}
                </motion.span>
              </span>
            );
          })}
        </p>
        <div className="h-[20vh]"></div>
      </div>
    );
};

export default SelfSection;
