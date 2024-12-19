'use client';

import { useModal } from "@/context/modalContext";
import { cn } from "@/lib/utils";
import { Loader } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion'

const Navlink = ({ name, link }) => {
    return (
        <a href={link} className="tracking-[-0.06em] relative group overflow-hidden inline-block">
            <span className="block duration-500 relative group-hover:-translate-y-12">
                {name}
            </span>
            <span className="absolute left-0 top-0 duration-500 translate-y-12 group-hover:translate-y-0">
                {name}
            </span>
        </a>

    )
}

const Header = () => {

    const { setIsModalOpen } = useModal();
    const [handling, setHandling] = useState(false);
    const [nav, setnav] = useState(false);

    const handleMobileNavLinkClick = () => {
        setTimeout(() => {
            setnav(false);
        }, 200);
    };

    const handleMobileNavConnectClick = () => {
        setTimeout(() => {
            setnav(false);
            setTimeout(() => {
                setIsModalOpen(true);
            }, 200);
        }, 200);
    };

    const handleConnectClick = () => {
        setHandling(true);
        setTimeout(() => {
            setIsModalOpen(true);
            setHandling(false);
        }, 750);
    };

    return (
        <div className="fixed flex w-full top-0 h-[48px] items-center justify-between px-4 bg-white/90 backdrop-blur z-50 border-b-primary border-b">
            {/* Logo */}
            <a href="#hero" className="relative flex size-16">
                <Image alt="Expert HR Outsourcing manpower australian mortgage broker web development assistance help logo" fill src="/images/logo.png" />
            </a>
            {/* Fullscreen navbar */}
            <div className="sm:flex hidden gap-4 items-center justify-center">
                <Navlink name="About" link="#about" />
                {/* <Navlink name="Services" link="#services" /> */}
                <Navlink name="Testimonials" link="#testimonials" />
                <Navlink name="FAQ" link="#faq" />
                <a
                    onClick={handleConnectClick}
                    className="px-2 relative py-1 flex items-center justify-center tracking-[-0.06em] bg-primary rounded-md hover:opacity-80 duration-300 text-white overflow-hidden group"
                    href="#cta"
                >
                    {handling && <Loader className="animate-spin absolute" size={20} />}
                    <span className={`block relative group-hover:-translate-y-12 ${handling ? "invisible" : ""}`} style={{ transition: "transform 0.5s" }}>
                        Connect
                    </span>
                    <span style={{ transition: "transform 0.5s" }} className={`absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-12 group-hover:translate-y-[-50%] ${handling ? "invisible" : ""}`}>
                        Connect
                    </span>

                </a>
            </div>
            {/* Mobile navbar */}
            <div className="sm:hidden flex items-center justify-center gap-4">
                <a onClick={handleConnectClick} className="px-2 py-1 flex items-center justify-center tracking-[-0.06em] bg-primary rounded-md hover:opacity-80 duration-300 text-white" href="#cta">
                    {handling && <Loader className="animate-spin absolute" size={20} />}
                    <span className={cn(handling && 'invisible')}>Connect</span>
                </a>
                <motion.button
                    onClick={() => setnav(!nav)}
                    className={cn('z-[100] relative size-10 duration-300', nav && 'px-4 py-2 hover:bg-neutral-600/50 rounded-full')}
                    animate={nav ? "open" : "close"}
                >
                    <motion.span
                        style={{ left: '50%', top: '40%', x: '-50%', y: '-50%' }}
                        className={cn('absolute h-[1.5px] w-6')}
                        variants={{ open: { rotate: "45deg", top: '50%', background: 'white', }, close: { rotate: "0deg", background: 'black', } }}
                    />
                    <motion.span
                        style={{ left: '50%', top: '60%', x: '-50%', y: '-50%', }}
                        className={cn('absolute h-[1.5px] w-6')}
                        variants={{ open: { rotate: "-45deg", top: '50%', background: 'white', }, close: { rotate: "0deg", background: 'black', } }}

                    />
                </motion.button>
                <motion.div
                    initial="close"
                    variants={{ open: { visibility: 'visible', height: '100vh' }, close: { visibility: 'hidden', height: 0 } }}
                    transition={{ duration: 1, ease: [0.860, 0.000, 0.070, 1.000], bounce: 0.3, }}
                    animate={nav ? "open" : "close"}
                    className='fixed w-full inset-0 z-[50] hero px-4 backdrop-blur-lg flex items-center justify-center'
                >
                    <motion.div
                        variants={{ open: { visibility: 'visible', opacity: 1 }, close: { visibility: 'hidden', opacity: 0 } }}
                        transition={{ duration: 1.5 }}
                        initial="close"
                        animate={nav ? "open" : "close"}
                        className='flex flex-col items-center container gap-4 divide-y w-full divide-neutral-400'
                    >
                        <a onClick={() => handleMobileNavLinkClick()} href='#about' className='text-neutral-100 tracking-[-0.06em] cursor-pointer w-full text-center flex items-center justify-center text-4xl'>About</a>
                        <a onClick={() => handleMobileNavLinkClick()} href="#testimonials" className='text-neutral-100 tracking-[-0.06em] pt-4 cursor-pointer w-full text-center flex items-center justify-center text-4xl'>
                            Testimonials
                        </a>
                        <a onClick={() => handleMobileNavLinkClick()} href='#faq' className='text-neutral-100 tracking-[-0.06em] pt-4 cursor-pointer w-full text-center flex items-center justify-center text-4xl'>FAQ</a>
                        <a onClick={() => handleMobileNavConnectClick()} href='#cta' className='text-neutral-100 tracking-[-0.06em] pt-4 cursor-pointer w-full text-center flex items-center justify-center text-4xl'>Connect with us!</a>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}

export default Header