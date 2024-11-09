import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.jpg';
import { motion } from 'framer-motion'


const Firstpage = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollPos, setLastScrollPos] = useState(0);
    const [selection, setSelection] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            setShowNavbar(lastScrollPos > currentScrollPos || currentScrollPos < 10);
            setLastScrollPos(currentScrollPos);

            // Determine the currently active section based on scroll position
            const sections = ['home', 'menu', 'ourstory', 'contact'];
            sections.forEach((section) => {
                const sectionElement = document.getElementById(section);
                if (sectionElement) {
                    const rect = sectionElement.getBoundingClientRect();
                    if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
                        setSelection(section);
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollPos]);

    // Function to dynamically set the active class for links
    const isActive = (section) => (selection === section ? 'text-orange-600' : 'hover:text-orange-600');

    return (
    
        <div className={`fixed top-0 left-0 w-full z-20 bg-white transition-transform duration-300 ${showNavbar ? 'transform translate-y-0' : 'transform -translate-y-full'}`}>
           <motion.div // Changing the key on `next` update triggers re-mount and animation reset
          initial={{ y: '-50%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeIn' }}
        >
            <div className='p-4 flex justify-between items-center'>
                {/* Logo */}
                <div className='sm:ms-4'>
                    <h1 className='font-bold text-5xl text-black logo font-semibold'>
                        A<span className='text-orange-600'>b</span>hiruchi
                    </h1>
                </div>

                {/* Navbar Items */}
                <div className='sm:me-4 hidden sm:block'>
                    <ul className='flex gap-8 text-lg font-medium'>
                        <li className={`cursor-pointer ${isActive("home")}`} onClick={() => setSelection("home")}><a href='#home'>Home</a></li>
                        <li className={`cursor-pointer ${isActive("menu")}`} onClick={() => setSelection("menu")}><a href='#menu'>Menu</a></li>
                        <li className={`cursor-pointer ${isActive("ourstory")}`} onClick={() => setSelection("ourstory")}><a href='#ourstory'>Our Story</a></li>
                        <li className={`cursor-pointer ${isActive("contact")}`} onClick={() => setSelection("contact")}><a href='#contact'>Contact</a></li>
                    </ul>
                </div>

                {/* Hamburger Menu (Visible on small screens) */}
                <div className='sm:hidden transition duration-150 ease-in'>
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className='text-3xl'>
                        &#9776;
                    </button>
                </div>

                {/* Mobile Menu (Toggles visibility) */}
                <div className={`sm:hidden ${isMenuOpen ? 'block' : 'hidden'} absolute top-16 left-0 w-full bg-white p-4 z-10 transition duration-150 ease-in`}>
                    <ul className='flex flex-col gap-4 text-lg font-medium'>
                        <li className={`cursor-pointer ${isActive("home")}`} onClick={() => setSelection("home")}><a href='#home'>Home</a></li>
                        <li className={`cursor-pointer ${isActive("menu")}`} onClick={() => setSelection("menu")}><a href='#menu'>Menu</a></li>
                        <li className={`cursor-pointer ${isActive("ourstory")}`} onClick={() => setSelection("ourstory")}><a href='#ourstory'>Our Story</a></li>
                        <li className={`cursor-pointer ${isActive("contact")}`} onClick={() => setSelection("contact")}><a href='#contact'>Contact</a></li>
                    </ul>
                </div>
            </div>
            </motion.div> 
        </div>
   
    );
};

export default Firstpage;
