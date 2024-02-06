import { RxCross1 } from "react-icons/rx";
import {AnimatePresence, motion} from 'framer-motion';
import '../App.css'
import { container, liAnim, listContainer } from "../constants/animations";
import { navItems } from "../constants/constants";
const Nav = ({ openNav, setOpenNav }) => {
  return (
    <div>
      <AnimatePresence mode="wait">
        {openNav && (
          <motion.div
            variants={container}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-[100vw] origin-top h-screen z-40 fixed left-0 top-0 bg-black"
          >
            <motion.div
              variants={listContainer}
              initial="initial"
              animate="animate"
              exit="initial"
              className="flex items-center h-full justify-center"
            >
              <motion.div
                variants={liAnim}
                className="absolute top-10 right-10 text-white  cursor-pointer"
                onClick={() => setOpenNav(false)}
              >
                <RxCross1 size={42} />
              </motion.div>
              <motion.ul className="flex flex-col gap-16 text-4xl md:text-6xl font-orbit text-white">
                {navItems.map((item, id) => (
                  <div className="overflow-hidden">
                    <motion.li key={id} whileTap={{scale: .5}} className="stroke" variants={liAnim} onClick={() => {
                      document.getElementById(`${item.href}`).scrollIntoView();
                      setOpenNav(false)
                    }}>
                      {item.title}
                    </motion.li>
                  </div>
                ))}
              </motion.ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Nav