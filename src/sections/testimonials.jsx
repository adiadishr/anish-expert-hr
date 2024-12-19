import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import BlurFade from "@/components/ui/blur-fade";

const Testimonials = () => {

    const reviews = [
        {
            name: "Uddav Bhatta",
            username: "Mortgage Broker",
            body: "Their compliance management services have been a lifesaver. I no longer worry about regulatory requirements, and my business runs smoothly.",
            img: "https://github.com/shadcn.png",
        },
        {
            name: "Sunita Sharma",
            username: "Business Owner",
            body: "Their administrative support team is outstanding! Scheduling and email management have never been easier for my growing business.",
            img: "https://github.com/shadcn.png",
        },
        {
            name: "Manisha Khadka",
            username: "Accountant",
            body: "Their accounting and bookkeeping services are precise and reliable. I can now focus on expanding my business without worrying about financial management.",
            img: "https://github.com/shadcn.png",
        },
        {
            name: "Santosh Shrestha",
            username: "Mortgage Broker",
            body: "Document handling has always been a challenge, but Expert HR Outsourcing made it effortless. My clients appreciate the efficiency!",
            img: "https://github.com/shadcn.png",
        },
    ];

    const firstRow = reviews.slice(0, reviews.length / 2);
    const secondRow = reviews.slice(reviews.length / 2);

    const ReviewCard = ({ img, name, username, body, }) => {
        return (
            <figure
                className={cn(
                    "relative w-96 cursor-pointer overflow-hidden rounded-xl border p-4 z-10",
                    // light styles
                    "border-gray-950/[.1] bg-white hover:bg-white/95",
                )}
            >
                <div className="flex flex-row items-center gap-2">
                    <img className="rounded-full" width="40" height="40" alt="" src={img} />
                    <div className="flex flex-col gap-0">
                        <figcaption className="tracking-tight text-sm font-semibold leading-tight">{name}</figcaption>
                        <p className="font-medium text-sm dark:text-white/40 leading-tight">{username}</p>
                    </div>
                </div>
                <blockquote className="mt-2 tracking-tight">{body}</blockquote>
            </figure>
        );
    };

    return (
        <section id="testimonials" className="min-h-screen flex flex-col items-center justify-center hero relative">
            <BlurFade delay={0.25} inView>
                <div className="text-3xl md:text-4xl md:font-medium tracking-[-0.06em] text-white pt-24 text-center">
                    Wall of Love
                </div>
            </BlurFade>
            <BlurFade delay={0.5} inView>
                <div className="text-xl md:text-2xl tracking-[-0.06em] text-neutral-100 pt-2 text-center">
                    Here's a few choice words from our valued customers
                </div>
            </BlurFade>
            <div className=" flex z-10 h-[500px] md:h-[600px] w-full flex-col items-center justify-center overflow-hidden md:py-4">
                <Marquee pauseOnHover className="[--duration:20s]">
                    {firstRow.map((review) => (
                        <ReviewCard key={review.name} {...review} />
                    ))}
                </Marquee>
                <Marquee reverse pauseOnHover className="[--duration:20s]">
                    {secondRow.map((review) => (
                        <ReviewCard key={review.username} {...review} />
                    ))}
                </Marquee>
            </div>
            <div className="pointer-events-none z-20 absolute inset-y-0 left-0 md:w-1/4 w-1/6 bg-gradient-to-r from-[#00327c]/50"></div>
            <div className="pointer-events-none z-20 absolute inset-y-0 right-0 md:w-1/4 w-1/6 bg-gradient-to-l from-[#00327c]/50"></div>
        </section>
    )
}

export default Testimonials