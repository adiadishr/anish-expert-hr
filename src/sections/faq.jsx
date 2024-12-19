'use client'

import Image from "next/image"
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import BlurFade from "@/components/ui/blur-fade";

export const faqData = [
    {
        id: 1,
        question: "What industries do you serve?",
        answer: "We specialize in supporting mortgage brokers and businesses in accounting, admin, marketing, web development, and IT services."
    },
    {
        id: 2,
        question: "Do you cater to countries outside Australia?",
        answer: "Yes, we provide mortgage broker support to clients worldwide."
    },
    {
        id: 3,
        question: "What mortgage broker support services do you offer?",
        answer: "Our services include loan application management, compliance, document handling, and stakeholder communication."
    },
    {
        id: 4,
        question: "Can you handle financial management tasks?",
        answer: "Yes, we provide accounting, bookkeeping, financial reporting, and audit assistance."
    },
    {
        id: 5,
        question: "What administrative support do you provide?",
        answer: "We offer scheduling, email management, virtual assistance, and document coordination."
    },
    {
        id: 6,
        question: "What digital marketing services are available?",
        answer: "We provide SEO, social media management, email campaigns, and content creation."
    },
    {
        id: 7,
        question: "Do you offer custom web development?",
        answer: "Yes, we build custom websites, maintain them, and optimize their performance."
    },
    {
        id: 8,
        question: "What IT support services do you provide?",
        answer: "Our IT services include software maintenance, marketing strategies, and campaign performance analysis."
    },
    {
        id: 9,
        question: "What compliance support do you offer for mortgage brokers?",
        answer: "We help mortgage brokers adhere to regulatory standards with expert compliance management services."
    },
];

const FAQItem = ({ id, question, answer, isOpen, toggleFAQ }) => {
    return (
        <div className="mb-4 flex flex-col">
            <button
                className="flex justify-between border border-gray-200 items-center w-full p-4 text-left bg-white hover:bg-gray-50 focus:outline-none rounded-t-md"
                onClick={() => toggleFAQ(id)}
            >
                <span className="font-medium text-gray-900">
                    <span className="mr-2 text-primary">{id}.</span>
                    {question}
                </span>
                <motion.div
                    initial={false}
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    {isOpen ? <Minus className="w-5 h-5 text-primary" /> : <Plus className="w-5 h-5 text-primary" />}
                </motion.div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden bg-white border-b border-r border-l"
                    >
                        <div className="p-4">
                            <p className="text-muted-foreground">{answer}</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};


const FAQ = () => {

    const [openFAQs, setOpenFAQs] = useState({});
    const toggleFAQ = (id) => {
        setOpenFAQs(prev => ({ ...prev, [id]: !prev[id] }));
    };


    return (
        <section id="faq" className="bg-neutral-100/50 relative md:pt-48">
            <div className="container relative mx-auto px-4 py-20 z-10">
                <div className="size-4 hidden md:block border-neutral-400/50 border-2 rounded-full absolute bg-primary bottom-72 right-1/2 translate-x-[50%] z-0" />
                <div className="w-[.04rem] hidden md:block absolute h-72 bg-neutral-400/50 bottom-0 right-1/2 translate-x-[50%] z-0" />
                <BlurFade delay={0.25} inView>
                    <h1 className="text-4xl md:text-5xl font-medium tracking-[-.06em] max-w-2xl capitalize mb-4 md:mb-0">
                        Everything you need to know
                    </h1>
                </BlurFade>
                <BlurFade delay={0.5} inView>
                    <p className="md:text-lg text-muted-foreground">You've got questions, we've got answers.</p>
                </BlurFade>
            </div>
            <div className="absolute right-1/2 translate-x-[50%] translate-y-[-50%] bg-neutral-100 z-20 border-2 border-neutral-400/50 flex items-center justify-center size-24 rounded-full">
                <Image src='/images/faq-logo.svg' width={42} height={42} alt="FAQ Logo" />
            </div>
            <div className="container border-t-2 border-neutral-400/50 mx-auto px-4 py-24 z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {faqData.map((faq) => (
                        <FAQItem
                            key={faq.id}
                            {...faq}
                            isOpen={openFAQs[faq.id]}
                            toggleFAQ={toggleFAQ}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FAQ