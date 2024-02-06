import { useEffect, useState } from "react"
import '../App.css'
import {motion} from 'framer-motion'
import Button from './common/Button'
import {gsap} from 'gsap'
import nike from '../../images/nike.png'
import dd from '../../images/DD.png'
import electro from '../../images/electro.png'
import meta from '../../images/meta.png'
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const Projects = () => {

  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 4;

  const pros = [

{name:'Nike Clone', tech:'React + Tailwind + Redux',href:'https://nike-clone-23h1.vercel.app/'},
    {name:"Designers Den", tech:'Next.js + TypeScript ', href:'https://des-den.vercel.app/'},
    {name:'E-commerce',tech:'React + Context API + Tailwind', href:'https://e-commerce-website-woad.vercel.app/'},
    {name:'Metaverse', tech:'React + Framer Motion',href:'https://meta-web-lw8t.vercel.app/'}
  ]
 

    const animateSlide = (num, reveal) => {
      const mar = document.querySelector(`.t-${num}.mar-wrapper`);
      const img = document.getElementById(`t-${num}`);
      const clipPathValue = reveal ? 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)' : 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)'

      gsap.to(mar, {clipPath: clipPathValue, duration: 1, ease:'power4.out', delay: 0.3})

      gsap.to(img, {clipPath: clipPathValue, duration: 1, ease:'power4.out'})
    }
     

      const rightClick = () => {
        if(currentSlide < totalSlides) {
          animateSlide(currentSlide + 1, true);
          setCurrentSlide((prev) => prev + 1);
          
        } 
      }

      const leftClick = () => {
        if(currentSlide > 1) {
          animateSlide(currentSlide, false);
          setCurrentSlide((prev) => prev - 1);
          
        } 
      }
    


  return (
    <div id="projects" className="flex flex-col w-screen items-center ">
      <motion.h1 className="text-5xl lg:text-9xl mb-24 font-orbit p-5">
        Projects
      </motion.h1>
      <div className="container w-[100vw] h-[100vh] overflow- relative">
        <div className="overlay hidden md:block absolute top-0 left-0 uppercase w-full h-full  overflow text-[240px] ">
          <div className="t-1 bg-gray-600 mar-wrapper">
            <h1 className="h1">Nike-Clone Nike-Clone Nike-Clone</h1>
          </div>
          <div className="t-2 bg-blue-300 mar-wrapper">
            <h1 className="h1">Designer's Den Designer's Den</h1>
          </div>
          <div className="t-3 bg-orange-400 mar-wrapper">
            <h1 className="h1">E-commerce E-commerce E-commerce</h1>
          </div>
          <div className="t-4 bg-violet-500 mar-wrapper">
            <h1 className="h1">MEtaverse MEtaverse MEtaverse</h1>
          </div>
        </div>

        <div className="modal block md:hidden  absolute top-[50%] left-[50%] ">
          <div className="modal-imgs w-screen md:w-[400px] h-[500px] lg:h-[600px]">
            <div className="img border-2" id="t-1">
              <img src={nike} alt="" className="w-full h-full object-cover" />
            </div>

            <div className="img" id="t-2">
              <img src={dd} alt="" className="w-full h-full object-cover" />
            </div>

            <div className="img" id="t-3">
              <img
                src={electro}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>

            <div className="img" id="t-4">
              <img src={meta} alt="" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        <div className="w-40 absolute top-[50%] left-[50%] modal font-orbit border-none  text-center">
          <div className="flex w-full items-center justify-between">
            <motion.span
              className={`bg-white ${currentSlide > 1 ? '' : 'hidden'} border-2 p-2 text-center w-14 rounded-full`}
              whileTap={{ scale: 0.8, transition: { ease: "circInOut" } }}
              whileHover={{ scale: 1.2, transition: { ease: "circInOut" } }}
              onClick={() => leftClick()}
              >
              <GoArrowLeft
                className={`mr-2 cursor-pointer`}
                size={35}
                />
            </motion.span>
            <motion.span
              className={`bg-white cursor-pointer ${currentSlide < 4 ? '' : 'hidden'} border-2 p-2 rounded-full`}
              whileTap={{ scale: 0.8, transition: { ease: "circInOut" } }}
              whileHover={{ scale: 1.2, transition: { ease: "circInOut" } }}
              onClick={() => rightClick()}
            >
              <GoArrowRight
                size={35}
              />
            </motion.span>
          </div>
            <a href={pros[currentSlide - 1].href}>
          <Button  full={true} black={true}>
              <a>View</a>
          </Button>
              </a>
        </div>

        <div className="absolute modal top-[80%] left-[47%]">
          <div className="cursor flex justify-around w-[100px] bg-black rounded-full gap-2  opacity-95 text-white"></div>
        </div>
      </div>
      <div className="opacity-95 bg-black text-white info  text-center -mt-24 text-lg md:text-xl font-orbit lg:bg-transparent w-full lg:text-black">
        <p className="name">{pros[currentSlide - 1].name}</p>
        <p className="role">{pros[currentSlide - 1].tech}</p>
      </div>
    </div>
  );
}

export default Projects


