export const slideUp = {
    initial : {
        y : '0'
    },
    exit : {
        y : '-100vh',
        transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2}
    }
}

export const slideIn = (i) => ({
    hidden : {
        y : 10,
        opacity: 0,
    },
    show : {
        y : 0,
        opacity: 1,
        transition: {duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.03 + i}
    }
})

export const slideCenter = (delay, xP, duration ) => ({
    hidden : {
        x : xP,
        opacity: 0,
    },
    show : {
        x : 0,
        opacity: 1,
        transition: {duration, ease: [0.76, 0, 0.24, 1], delay}
    },
    exit: {
        x : xP,
        opacity: 1,
        transition: {duration, ease: [0.76, 0, 0.24, 1], delay}    
    }
})

export const borderVariants = {
    hidden: {
      borderTopWidth: 0,
    },
    show: {
      borderTopWidth: 2,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
    },
};

 export const icon = {
     hidden: {
         pathLength: 0,
         fill: "rgba(255, 255, 255, 0)"
        },
        visible: {
        pathLength: 1,
        transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },    
        fill: "rgba(255, 255, 255, 1)"
    }
  }

export const openUp = (delay) =>  ({
    open: {
        x: 0,
        opacity: 1,
        transition: {delay, duration:0.2, type:'spring'}
    },
    closed: {
        x: 50,
        opacity: 0,
        transition: {
            delay, 
            y: {stiffness: 1000},
        }

    }
})

export const btnOver = () =>  ({
    open: {
        y: 0,
        opacity: 1,
        transition: {duration:0.2, velocity: -100}
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            delay, 
            y: {stiffness: 1000},
        }

    }
})

export const text = ({delay}) =>  ({
    hidden: {
        y: 50,
        x: 50,
        opacity: 0,
    },
    show: {
        y: 0,
        x: 0,
        opacity: 1,
        transition: {
            delay, 
            y: {duration: .5, delay:10},
        }

    }
})

export const container = {
    initial: {scaleY: 0},
    animate: { 
        scaleY: 1,
        transition: {
          duration: .5, 
          delay: 1,
          ease: [0.12, 0, 0.39, 1]
        }
    },
    exit: {
        scaleY: 0,
        transition: {
            delay: .8,
          duration: .5, 
          ease: [0.12, 0, 0.39, 1]
        }
        
    },
}
export const listContainer = {
    initial: {
        transition: {
            delayChildren: 0.2,
            staggerChildren: 0.1,
            staggerDirection: -1,

        }
    },
    animate: {
        transition: {
            staggerDirection: 1,
            staggerChildren: 0.08,
        }
    }
}

export const footer = {
    initial: {
        y: '40vh', opacity: 0,
        transition: {
            duration: .5,
            delay: .5,
            ease: 'easeOut'
        }
    },
    animate: {
        y: 0, opacity: 1,
        transition: {
            duration: .5,

        }
    }
}

export const liAnim = {
    initial: {
        y: '100vh', opacity: 0,
        transition: {
            ease: 'easeInOut',
            // duration: .5,
        }
    },
    animate: {
        y: 0, opacity: 1,
        transition: {
            ease: 'easeInOut',
            duration:.5,
        }
    
    },
    
}

export const navHeadings = {
    initial: {
        opacity: 0,
        y: '-100%',
        transition: {
            duration: 1,
            ease: 'easeInOut'
        }
    },
    show: {
        opacity: 1,
        y: '0%',
        transition: {
            delay: 1,
            duration: 0.5,
            ease: 'easeInOut'
        }

    }
}

export const wordAnim = {
    initial: {
        x: '50vh',
        opacity: 0,
        // transition: {
        //     duration: 0.5,
        //     delay: .5,
        //     ease: 'easeOut'
        // }
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            delay: .5,
        }
    }
}