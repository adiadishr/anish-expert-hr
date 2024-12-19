'use client';

import { cn } from "@/lib/utils";
import { MagicCard } from "@/components/ui/magic-card";
import { Activity, Users, Settings, BarChart3 } from 'lucide-react';
import BlurFade from "@/components/ui/blur-fade";
import Image from "next/image";

const features = [
    {
        icon: <BarChart3 className="w-8 h-8 stroke-white" />,
        title: "Mortgage Broker Support Services",
        description: "We understand the complexities of the mortgage industry and offer immediate data processing, evaluation, and support to streamline your operations, to enhance your productivity and ensure client satisfaction.",
        delay: '250',
        color: 'bg-purple-600'
    },
    {
        icon: <Settings className="w-8 h-8 stroke-white" />,
        title: "Accounting and Bookkeeping",
        description: "From setting up your first account to managing payroll seamlessly, our services make financial management easy and efficient. We provide accurate, real-time insights into your financial health, so you can make informed decisions quickly.",
        delay: '500',
        color: 'bg-green-600'
    },
    {
        icon: <Users className="w-8 h-8 stroke-white" />,
        title: "Digital Marketing",
        description: "Connect with your employees and foster a positive working environment. Our digital marketing strategies are designed to enhance your brand’s presence and engagement, driving growth and success for your business.",
        delay: '500',
        color: 'bg-blue-600'
    },
    {
        icon: <Activity className="w-8 h-8 stroke-white" />,
        title: "24 / 7 Customer support",
        description: "We’re here for you around the clock, ensuring that nothing disrupts your HR activities. Mukaryo integrates thousands of systems to provide seamless support, enhancing your business operations and customer experience.",
        delay: '750',
        color: 'bg-teal-600'
    }
]

const Details = () => {

    return (
        <section id="about" className="min-h-screen bg-neutral-100/50 relative overflow-hidden">
            <div className="absolute opacity-30 md:opacity-100 top-36 right-36 z-0">
                <BlurFade inView delay={0.5}>
                    <div className="w-[0.12rem] absolute h-48 bg-neutral-300 -top-36 right-[3.25rem]"></div>
                    <div className="size-28">
                        <Image src="/images/decor-1.png" fill alt="decor" />
                    </div>
                </BlurFade>
            </div>
            <div className="absolute opacity-30 md:opacity-100 top-48 right-12 z-0">
                <BlurFade inView delay={0.5}>
                    <div className="w-[0.12rem] absolute h-64 bg-neutral-300 -top-48 right-[3.25rem]"></div>
                    <div className="size-28">
                        <Image src="/images/decor-2.png" fill alt="decor" />
                    </div>
                </BlurFade>
            </div>
            <div className="container mx-auto px-4 py-32">
                <BlurFade delay={0.25} inView>
                    <div className="flex items-center gap-2 mb-8 text-sm text-primary bg-primary-light/20 px-4 py-2 rounded-full w-max animate-pulse">
                        <span className="w-2 h-2 bg-primary rounded-full" />
                        Why choose us?
                    </div>
                </BlurFade>
                <BlurFade delay={0.5} inView>
                    <h1 className="text-4xl md:text-5xl font-medium tracking-[-.06em] mb-2 max-w-2xl capitalize">
                        We tailor your experience
                    </h1>
                    <h2 className="text-4xl md:text-5xl font-medium tracking-[-.06em] mb-16 max-w-2xl capitalize">
                        To cater to your needs
                    </h2>
                </BlurFade>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <MagicCard gradientColor="#299cdf" gradientSize={200} gradientOpacity={0.35} delay={feature.delay} key={index} className="border-neutral-200 shadow-none">
                            <div className="p-6">
                                <div className={cn('p-3 rounded-lg inline-block mb-4', feature.color)}>
                                    {feature.icon}
                                </div>
                                <h3 className="font-medium tracking-tight text-lg leading-tight mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-muted-foreground tracking-tight">
                                    {feature.description}
                                </p>
                            </div>
                        </MagicCard>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Details;