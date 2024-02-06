import { useEffect, useRef } from "react"
import {gsap} from 'gsap'
import '../../App.css'
import Magnetic from "./Magnetic";

const Button = ({children, full, black}) => {
    const circle = useRef(null);
    const timeline = useRef(null);
    var time;

    useEffect(() => {
        timeline.current = gsap.timeline({paused: true});
        timeline.current
        .to(circle.current, {top: '-98%', duration: 0.4}, 'enter')
        .to(circle.current, {top: '-300%', duration: 0.2}, 'exit')
        
    },[])
    const mouseEnter = (e) => {
        if (time) {
          clearTimeout(time);
          time = null;
        }
        timeline.current.tweenFromTo('enter', 'exit');
    }
    const mouseLeave = (e) => {
        time = setTimeout(() => {
            timeline.current.play();
        }, 200);
    }
  return (
    <Magnetic>
      <div
        onMouseEnter={(e) => mouseEnter(e)}
        onMouseLeave={(e) => mouseLeave(e)}
        className= {` ${full ? 'rounded-[50%] px-3 py-16 ' : 'py-3 px-5'} cursor-pointer relative hoverBtn overflow-hidden  ${black ? 'bg-black text-white hover:text-black':'bg-white text-black hover:text-white border-2 border-black '}      rounded-full`}
      >
        {children}
        <div ref={circle} className={`circle absolute right-0 ${black ? 'bg-white' : 'bg-black'}`}></div>
      </div>
    </Magnetic>
  );
}

export default Button;