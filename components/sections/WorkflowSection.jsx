"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const steps = [
    {
        title: "Discovery",
        description:
            "We deeply understand your business goals, users, and technical requirements to define a clear path forward. This ensures every decision is aligned with long-term success.",
    },
    {
        title: "Architecture",
        description:
            "We design scalable, high-performance system architecture with modern best practices. This creates a solid foundation that supports growth and flexibility.",
    },
    {
        title: "Development",
        description:
            "Clean, efficient, and maintainable code built using cutting-edge technologies. Our approach ensures reliability while keeping future updates seamless.",
    },
    {
        title: "Deployment",
        description:
            "Seamless launch with performance optimization, monitoring, and long-term scalability. We ensure your product runs smoothly from day one and beyond.",
    },
];

export default function WorkflowSection() {
    const [index, setIndex] = useState(0);
    const [particles, setParticles] = useState([]);

    // ✅ FIX: generate random values ONLY on client
    useEffect(() => {
        const generated = [...Array(40)].map(() => ({
            width: Math.random() * 3 + 2,
            height: Math.random() * 3 + 2,
            top: Math.random() * 100,
            left: Math.random() * 100,
            duration: Math.random() * 6 + 6,
            delay: Math.random() * 4,
        }));

        setParticles(generated);
    }, []);

    const goToPrev = () => {
        setIndex((prev) => (prev === 0 ? steps.length - 1 : prev - 1));
    };

    const goToNext = () => {
        setIndex((prev) => (prev === steps.length - 1 ? 0 : prev + 1));
    };

    const getCardPosition = (i) => {
        if (i === index) return "center";
        if (i === (index - 1 + steps.length) % steps.length) return "left";
        if (i === (index + 1) % steps.length) return "right";
        return "hidden";
    };

    return (
        <section className="relative py-16 sm:py-24 bg-[#0b1a14] text-white overflow-hidden">
            {/* BACKGROUND DOTS (FIXED) */}
            <div className="absolute inset-0 pointer-events-none">
                {particles.map((p, i) => (
                    <motion.div
                        key={i}
                        className="absolute bg-green-400 rounded-full opacity-60"
                        style={{
                            width: p.width + "px",
                            height: p.height + "px",
                            top: p.top + "%",
                            left: p.left + "%",
                        }}
                        animate={{
                            y: [0, -100],
                            opacity: [0, 0.8, 0],
                        }}
                        transition={{
                            duration: p.duration,
                            repeat: Infinity,
                            ease: "linear",
                            delay: p.delay,
                        }}
                    />
                ))}
            </div>

            {/* HEADER */}
            <div className="relative z-10 max-w-6xl mx-auto text-center mb-12 sm:mb-16 px-5">
                <h4 className="text-green-400 tracking-widest uppercase text-xs sm:text-sm mb-3 sm:mb-4">
                    Proven Workflow
                </h4>

                <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
                    Our Development Process
                </h2>

                <p className="text-gray-400 text-sm sm:text-base max-w-xl sm:max-w-2xl mx-auto">
                    A structured, battle-tested workflow designed for scalability,
                    clarity, and exceptional results.
                </p>
            </div>

            {/* DESKTOP CAROUSEL */}
            <div className="relative z-10 hidden md:flex items-center justify-center">
                <div className="relative w-full max-w-5xl h-[420px] flex items-center justify-center">
                    {steps.map((step, i) => {
                        const position = getCardPosition(i);
                        if (position === "hidden") return null;

                        const isLeft = position === "left";
                        const isRight = position === "right";

                        return (
                            <motion.div
                                key={i}
                                initial={false}
                                animate={{
                                    opacity: position === "center" ? 1 : 0.65,
                                    scale: position === "center" ? 1 : 0.9,
                                    x: isLeft ? -280 : isRight ? 280 : 0,
                                    zIndex: position === "center" ? 20 : 10,
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 280,
                                    damping: 28,
                                    mass: 0.8,
                                }}
                                className={`absolute w-[420px] h-[480px] rounded-3xl 
                  bg-gradient-to-br from-[#0A1F16] to-[#07140E] 
                  border border-green-500/10 shadow-2xl p-8 backdrop-blur-xl 
                  flex flex-col justify-center text-center
                  ${
                                    position !== "center"
                                        ? "cursor-pointer hover:border-green-500/40"
                                        : ""
                                }`}
                                onClick={() => {
                                    if (isLeft) goToPrev();
                                    if (isRight) goToNext();
                                }}
                            >
                                <h3 className="text-3xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-green-400 to-green-500">
                                    {step.title}
                                </h3>

                                <p className="text-gray-100 text-mg leading-relaxed max-w-[240px] mx-auto">
                                    {step.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* MOBILE VERSION */}
            <div className="md:hidden relative z-10 px-5">
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="rounded-2xl p-6 bg-gradient-to-br from-[#0A1F16] to-[#07140E] border border-green-500/10 text-center"
                >
                    <h3 className="text-xl font-bold mb-3 text-green-400">
                        {steps[index].title}
                    </h3>

                    <p className="text-gray-400 text-sm leading-relaxed">
                        {steps[index].description}
                    </p>
                </motion.div>

                {/* CONTROLS */}
                <div className="flex justify-center gap-6 mt-6">
                    <button
                        onClick={goToPrev}
                        className="px-4 py-2 bg-white/10 rounded-full text-sm"
                    >
                        Prev
                    </button>

                    <button
                        onClick={goToNext}
                        className="px-4 py-2 bg-green-500 text-black rounded-full text-sm"
                    >
                        Next
                    </button>
                </div>
            </div>
        </section>
    );
}