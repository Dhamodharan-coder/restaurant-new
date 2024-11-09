import React, { useState } from 'react'
import { motion, useInView } from 'framer-motion'
import Firstpage from "./Firstpage"

const Mainpage = ({ dishes }) => {
  const [next, setNext] = useState(0)

  function handlenext() {
    if (next !== 1) {
      setNext(prev => prev + 1)
    }
  }

  function handleprev() {
    if (next !== 0) {
      setNext(prev => prev - 1)
    }
  }

  const titleRef = React.useRef(null);
  const titleInView = useInView(titleRef, { triggerOnce: false, threshold: 0.2 });
  const descriptionRef = React.useRef(null);
  const descriptionInView = useInView(descriptionRef, { triggerOnce: false, threshold: 0.2 });

  return (
    <div id='home'>
      <Firstpage />
      <div className='flex justify-between items-center flex-wrap-reverse md:flex-nowrap sm:my-12'>
        
        <div className='mx-12 md:max-w-90 xl:max-w-2xl max-w-70 sm:max-w-80'>
          
          <motion.h1
            ref={titleRef}
            className='text-6xl font-semibold'
            initial={{ y: '-100%', opacity: 0 }}
            animate={titleInView ? { y: 0, opacity: 1 } : { y: '-100%', opacity: 0 }}
            transition={{ duration: 1, ease: 'easeIn' }}
          >
            <span className='text-orange-600 font-bold'>{dishes[next].title[0]}</span>{dishes[next].title.slice(1)}
          </motion.h1>
          
          <motion.h4
            ref={descriptionRef}
            className='text-lg my-6 text-slate-700'
            initial={{ x: '-100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: 'easeIn' }}
          >
            {dishes[next].description}
          </motion.h4>
          <motion.h4
            ref={descriptionRef}
            className='text-lg my-6 text-slate-700'
            initial={{ y: '50%', opacity: 0 }}
            animate={descriptionInView ? { y: 0, opacity: 1 } : { x: '-100%', opacity: 0 }}
            transition={{ duration: 1, ease: 'easeIn' }}
          >
          <div className='flex gap-5'>
            <div className='border-2 rounded-full p-2 border-slate-300 cursor-pointer' onClick={handleprev}>
              <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#000000">
                <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" />
              </svg>
            </div>
            <div className='border-2 rounded-full p-2 border-slate-300 cursor-pointer' onClick={handlenext}>
              <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#000000">
                <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
              </svg>
            </div>
          </div>

          <div>
            <h1 className='mt-4 text-lg'>Recommended</h1>
            <div className='flex items-center overflow-x-auto scrollbar-hide'>
              <img
                src='https://i.pinimg.com/736x/0e/4d/24/0e4d24cae8c9783ae7c827df7cacb58d.jpg'
                className={`cursor-pointer ${next === 0 ? 'h-28' : 'h-20 opacity-80'}`}
                onClick={() => setNext(0)}
              />
              <img
                src='https://i.pinimg.com/736x/a7/39/c2/a739c2f3639bccae6a71b15a5013519c.jpg'
                className={`cursor-pointer ${next === 1 ? 'h-28' : 'h-20 opacity-80'}`}
                onClick={() => setNext(1)}
              />
            </div>
          </div>
          </motion.h4>
        </div>

        <motion.div
          key={next} // Changing the key on `next` update triggers re-mount and animation reset
          initial={{ scale:(0.1), opacity: 0 }}
          animate={{ scale:(1),  opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeIn' }}
        >
          <img src={dishes[next].image} className='h-1/2 sm:h-1/2 md:h-1/2 big-image' />
        </motion.div>
      </div>
    </div>
  )
}

export default Mainpage
