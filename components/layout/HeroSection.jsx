"use client";

import { useEffect, useState } from "react";

const services = [
    {
        title: "Custom Development",
        image: "/custom.jpg",
        description:
            "Most businesses struggle with rigid, off-the-shelf software that limits growth and innovation.",
    },
    {
        title: "Performance Optimization",
        image: "/performance.png",
        description:
            "Slow applications cost you users, revenue, and trust.",
    },
    {
        title: "Security & Compliance",
        image: "/security.png",
        description:
            "Security is foundational. We protect sensitive data.",
    },
    {
        title: "Full-Stack Solutions",
        image: "/fullstack.png",
        description:
            "We deliver fully integrated full-stack solutions.",
    },
];

const DURATION = 8000;

export default function HeroSection() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [startTime, setStartTime] = useState(Date.now());
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        let frame;

        const animate = () => {
            const now = Date.now();
            const elapsed = now - startTime;

            if (elapsed >= DURATION) {
                setActiveIndex((prev) => (prev + 1) % services.length);
                setStartTime(now);
                setProgress(0);
            } else {
                setProgress((elapsed / DURATION) * 100);
            }

            frame = requestAnimationFrame(animate);
        };

        frame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(frame);
    }, [startTime, activeIndex]);

    return (
        <section className="relative min-h-screen w-full overflow-hidden flex flex-col">

            {/* Background Images */}
            {services.map((service, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-1000 ${
                        index === activeIndex
                            ? "opacity-100 scale-100"
                            : "opacity-0 scale-105"
                    }`}
                    style={{
                        backgroundImage: `url(${service.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                />
            ))}

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black z-10" />

            {/* Content */}
            <div className="relative z-20 flex flex-col justify-center min-h-screen px-5 sm:px-6 md:px-10 lg:px-16 py-24 sm:py-28">
                <div className="max-w-3xl mx-auto lg:mx-0">

                    {/* Headline */}
                    <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                        Building Scalable Systems That{" "}
                        <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
              Solve Real Problems
            </span>
                    </h1>

                    {/* Description */}
                    <p className="mt-5 sm:mt-6 text-sm sm:text-base md:text-lg text-zinc-300 leading-relaxed max-w-2xl">
                        We engineer high-performance, secure, and scalable solutions that
                        help your business grow without technical limitations.
                    </p>

                    {/* Bullet Points */}
                    <div className="mt-6 sm:mt-8 space-y-2 sm:space-y-3 text-sm sm:text-base text-zinc-400">
                        <div className="flex gap-2">
                            <span className="text-green-400">→</span>
                            <p>Modern scalable architecture</p>
                        </div>
                        <div className="flex gap-2">
                            <span className="text-green-400">→</span>
                            <p>Performance & security focused</p>
                        </div>
                        <div className="flex gap-2">
                            <span className="text-green-400">→</span>
                            <p>Built for long-term growth</p>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="mt-8 sm:mt-10">
                        <a
                            href="#contact-us"
                            className="inline-block px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 text-black font-semibold text-sm sm:text-lg active:scale-95 transition-all"
                        >
                            Get Started
                        </a>
                    </div>

                    {/* Progress */}
                    <div className="mt-10 sm:mt-14">
                        <p className="text-green-400 text-xs sm:text-sm tracking-widest uppercase">
                            {services[activeIndex].title}
                        </p>

                        <div className="mt-2 w-full max-w-[200px] sm:max-w-xs h-[2px] bg-white/20 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-gradient-to-r from-green-400 to-emerald-500"
                                style={{ width: `${progress}%` }}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2 sm:gap-3 md:hidden">
                {services.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            setActiveIndex(index);
                            setStartTime(Date.now());
                            setProgress(0);
                        }}
                        className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full ${
                            index === activeIndex
                                ? "bg-green-400 scale-125"
                                : "bg-white/40"
                        }`}
                    />
                ))}
            </div>
        </section>
    );
}