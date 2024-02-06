export const headerImg = 'https://static.wixstatic.com/media/538f0a_dc89c5b8b3284b92a3d5ac76cc452391~mv2.jpg/v1/fill/w_1555,h_1125,al_c,q_85,usm_0.33_1.00_0.00,enc_auto/538f0a_dc89c5b8b3284b92a3d5ac76cc452391~mv2.jpg';
export const header2Img = "https://static.wixstatic.com/media/538f0a_789765cd170c484090df931fe4e64ded~mv2_d_3840_2160_s_2.jpg/v1/fill/w_1899,h_1374,al_c,q_90,usm_0.33_1.00_0.00,enc_auto/538f0a_789765cd170c484090df931fe4e64ded~mv2_d_3840_2160_s_2.jpg";
export const headerDivStyle = 'font-rubik bg-white ease-in-out duration-500 text-black text-8xl -ml-24 p-10 rounded-tr-[100px]'


export const textVariants = (direction) => ({
  hidden: {
    x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
    y: direction === 'up' ? '100%' : direction === 'down' ? '100%' : 0,
  },
  show: {
    x: 0,
    y: 0,
    transition: {
      type: 'spring',
      duration: 3.5,
      delay: 2.5,
      ease: 'easeOut',
      damping: 7
    },
  },
  });
  

export const textVariant2 = {
  hidden: {
    opacity: 0,
    x: 20,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'tween',
      ease: 'easeIn',
    },
  },
};

export const navItems = [
  {title: 'Home', href: 'header'},
  {title: 'About Me', href: 'about'},
  {title: 'Projects', href: 'projects'},
  {title: 'Contact', href: 'footer'},
   
  ]
export const para = "Hello! I'm Praveen Ajjarapu, a passionate front-end developer based in India. I am constantly seeking opportunities to grow and enhance my skill set, and I am excited about the prospect of contributing to innovative projects. Thank you for visiting, and I look forward to the possibility of working together!"