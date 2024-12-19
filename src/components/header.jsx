'use client';

import { useModal } from "@/context/modalContext";
import { cn } from "@/lib/utils";
import { Loader } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const Navlink = ({ name, link }) => {
    return (
        <a href={link} className="tracking-[-0.06em] relative group overflow-hidden inline-block">
            <span className="block duration-500 transform relative group-hover:-translate-y-12">
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

    const handleConnectClick = () => {
        setHandling(true);
        setTimeout(() => {
            setIsModalOpen(true);
            setHandling(false);
        }, 1000);
    };


    return (
        <div className="fixed flex w-full top-0 h-[48px] items-center justify-between px-4 bg-white/90 backdrop-blur z-50 border-b-primary border-b">
            <div className="relative flex size-16">
                <Image alt="Expert HR Outsourcing manpower australian mortgage broker web development assistance help logo" fill src="/images/logo.png" />
            </div>
            <div className="flex gap-4 items-center justify-center">
                <Navlink name="About" link="#about" />
                <Navlink name="Services" link="#services" />
                <Navlink name="Testimonials" link="#testimonials" />
                <Navlink name="FAQ" link="#faq" />
                <a onClick={handleConnectClick} className="px-2 py-1 flex items-center justify-center tracking-[-0.06em] bg-primary rounded-md hover:opacity-80 duration-300 text-white" href="#cta">
                    {handling && <Loader className="animate-spin absolute" size={20} />}
                    <span className={cn(handling && 'invisible')}>Connect</span></a>
            </div>
        </div>
    )
}

export default Header