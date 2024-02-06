import '../App.css';
import { AnimatePresence, motion } from 'framer-motion';
import img1 from '../../images/profile-min-removebg.png'
import { useEffect, useState } from 'react';
import PreLoader from './PreLoader';
import { liAnim, navHeadings, slideIn } from '../constants/animations';
import SpringText from './SpringText';
import { IoIosMenu } from "react-icons/io"
import Nav from './Nav';



const Header = () => {


  const [ openNav, setOpenNav ] = useState(false);
  const [ fixIt, setFixIt ] = useState(false);
  const [ isLoading, setIsLoading ] = useState(true);
  const pos = 10;
  
  const trigNav = () => {
    const scrollY = window.scrollY;
    if(scrollY > pos){
       setFixIt(true);
      }else {
        setFixIt(false);
      }
    }
    
    useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
      setIsLoading(false);
    }, 2250);

    window.addEventListener('scroll', trigNav);

    return () => {
      window.removeEventListener('scroll', trigNav);
    }

  }, []);


 
  return (
    <div id='header' className="flex overflow-hidden header justify-center relative  h-screen">
      <AnimatePresence mode="wait">
        {isLoading && <PreLoader />}
      </AnimatePresence>
      <motion.div className={`${fixIt ? 'fixed top-0 bg-black z-30 border-b-[1px] border-white ' : 'absolute z-30'} w-screen  py-3`}>
        <motion.div className=" flex  justify-between px-5 mt-2 items-center text-white font-orbit">
          <motion.p
            variants={navHeadings}
            initial="initial"
            animate={openNav ? "initial" : "show"}
            className="text-xl md:text-3xl"
            // viewport={{ once: true }}
          >
            Praveen Ajjarapu
          </motion.p>
          <div
            className="cursor-pointer"
            variants={navHeadings}
            initial="initial"
            animate={openNav ? "initial" : "show"}
            onClick={() => {setOpenNav(true);}}
          >
            <IoIosMenu size={45} />
          </div>
        </motion.div>
      </motion.div>
      <div className="z-10 w-[800px] h-[695px]">
        <SpringText />
        <motion.img
          variants={slideIn(3)}
          src={img1}
          className="w-full grayscale-0 h-full object-cover"
          alt="dev-profile"
        />
      </div>
      <div className="animate block lg:hidden absolute whitespace-nowrap py-3 text-7xl text-white font-poppins bottom-10 z-10">
        <h2>I'm Praveen Ajjarapu. I'm a Web Developer.</h2>
      </div>
      <Nav openNav={openNav} setOpenNav={setOpenNav} />
    </div>
  );
}

export default Header