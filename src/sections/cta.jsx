'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useModal } from '@/context/modalContext';

const CTA = () => {

    const { setIsModalOpen } = useModal();
    if (!setIsModalOpen) {
        console.log("setIsModalOpen is undefined. Ensure ModalProvider wraps this component.");
    }
    const handleConnectClick = () => {
        setIsModalOpen(true);
    };
    const [beams, setBeams] = useState([]);
    useEffect(() => {
        const interval = setInterval(() => {
            const newBeam = {
                id: Date.now(),
                x: Math.random() * 100,
                y: Math.random() * 100,
                direction: Math.random() > 0.5 ? 'horizontal' : 'vertical',
            };
            setBeams((prev) => [...prev.slice(-4), newBeam]);
        }, 1200);

        return () => clearInterval(interval);
    }, []);

    return (
        <section id="cta" className="relative min-h-screen overflow-hidden bg-gradient-to-b from-primary to-black">
            {/* Grid Background */}
            <div
                className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage: `linear-gradient(to right, #304875 1px, transparent 1px),linear-gradient(to bottom, #304875 1px, transparent 1px)`,
                    backgroundSize: '50px 50px',
                }}
            />
            {/* Animated Beams */}
            {beams.map((beam) => (
                <motion.div
                    key={beam.id}
                    className="absolute bg-blue-400"
                    initial={{
                        opacity: 0,
                        [beam.direction === 'horizontal' ? 'width' : 'height']: '0%',
                        [beam.direction === 'horizontal' ? 'height' : 'width']: '2px',
                        left: beam.direction === 'horizontal' ? '0%' : `${beam.x}%`,
                        top: beam.direction === 'horizontal' ? `${beam.y}%` : '0%',
                    }}
                    animate={{
                        opacity: [0, 0.8, 0],
                        [beam.direction === 'horizontal' ? 'width' : 'height']: '100%',
                    }}
                    transition={{
                        duration: 2,
                        ease: 'easeInOut',
                    }}
                />
            ))}

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-24 text-center">
                <motion.div
                    className="flex flex-col items-center justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-4xl md:text-5xl font-medium tracking-[-.06em] text-center max-w-xl capitalize text-white mb-12">
                        Connnect with us, and get set up easily!
                    </h1>

                    <div className="flex flex-wrap justify-center gap-4">
                        <button
                            onClick={handleConnectClick}
                            className="px-6 py-3 flex text-black rounded-md bg-white duration-300 relative overflow-hidden hover:scale-[1.05] hover:opacity-95 active:scale-[.9] group backdrop-blur-sm"
                        >
                            <span className="block tracking-[-0.06em] duration-500 transform relative group-hover:-translate-y-12">
                                Contact Us
                            </span>
                            <span className="absolute tracking-[-0.06em] duration-500 translate-y-12 group-hover:translate-y-0">
                                Contact Us
                            </span>
                        </button>
                    </div>
                </motion.div>
            </div>

        </section>
    );
};

export default CTA;
