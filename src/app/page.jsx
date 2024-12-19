"use client";

import dynamic from 'next/dynamic';
import { useEffect } from "react";
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Testimonials from "@/sections/testimonials";
import Details from "@/sections/details";
import Hero from "@/sections/hero";
import FAQ from "@/sections/faq";
import Header from "@/components/header";
import { useModal } from '@/context/modalContext'
import { AnimatePresence } from "framer-motion";
import { ContactForm } from "@/components/contact-form";

const CTA = dynamic(() => import('@/sections/cta'), { ssr: false });

export default function Home() {

  const { isModalOpen } = useModal();

  useEffect(() => {
    const lenis = new Lenis();

    // Use requestAnimationFrame to continuously update the scroll
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    AOS.init();
  }, []);

  return (
    <main className="relative">
      <Header />
      <Hero />
      <Details />
      <Testimonials />
      <FAQ />
      <CTA />
      <AnimatePresence>
        {isModalOpen && (
          <ContactForm />
        )}
      </AnimatePresence>
    </main>
  );
}
