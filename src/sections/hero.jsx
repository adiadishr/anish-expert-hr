'use client';

import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import ShimmerButton from "@/components/ui/shimmer-button";
import BlurFade from "@/components/ui/blur-fade";
import { cn } from "@/lib/utils";

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen grid place-items-center hero">
            <BlurFade yOffset='0'>
                <div className="relative flex flex-col w-full items-center justify-center rounded-lg px-4 container py-24">
                    <BlurFade yOffset='0' className='z-10 py-2 px-4 mb-8 bg-sky-400/30 rounded-full backdrop-blur-sm text-sm md:text-base' delay={0.25}>
                        <p className="flex justify-center w-max text-white  text-sm md:text-base">
                            Truly Trusted Partners
                        </p>
                    </BlurFade>
                    <BlurFade yOffset='0' delay={0.5}>
                        <p className="z-10 flex text-center w-full whitespace-pre-wrap !leading-[3.75rem] justify-center text-4xl md:text-5xl md:font-medium tracking-[-.06em] text-white">
                            Mortgage Broker Support & <br className="md:block hidden" /> Business Outsourcing Solutions
                        </p>
                    </BlurFade>
                    <BlurFade delay={0.75} className="z-10 my-8 text-center lg:w-[50%]">
                        <p className="text-lg md:text-xl text-neutral-100 ">
                            We are leading providers of support services for <span className="text-orange-400">Australian mortgage brokers</span> and provide <span className="text-orange-400">comprehensive outsourcing solutions.</span>
                        </p>
                    </BlurFade>
                    <BlurFade delay={1}>
                        <ShimmerButton borderRadius="6px" background="white" shimmerColor="#3eb3f7" shimmerSize=".24rem" className="z-10 text-[#197eb8] backdrop-blur-sm duration-300 hover:translate-y-[-.25rem] py-2 px-4 active:scale-[.95]">
                            Get Started Today
                        </ShimmerButton>
                    </BlurFade>
                    <AnimatedGridPattern
                        numSquares={45}
                        maxOpacity={0.5}
                        duration={2}
                        repeatDelay={0}
                        className={cn(
                            "[mask-image:radial-gradient(250px_circle_at_center,white,transparent)]",
                            "md:[mask-image:radial-gradient(350px_circle_at_center,white,transparent)]",
                            "inset-x-0 inset-y-[-50%] h-[200%] skew-y-12 stroke-white/65",
                        )}
                    />
                </div>
            </BlurFade>
        </section>
    )
}

export default Hero