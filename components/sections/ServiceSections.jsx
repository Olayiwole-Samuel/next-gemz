"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import Image from "next/image";

const services = [
    {
        title: "Custom Development",
        description:
            "We build tailored systems that match your workflow and eliminate inefficiencies.",
        image:
            "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1000&q=80",
    },
    {
        title: "Performance Optimization",
        description:
            "We improve speed, responsiveness, and efficiency for seamless user experience.",
        image:
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
    },
    {
        title: "Security & Compliance",
        description:
            "We secure your platform and protect sensitive data against modern threats.",
        image:
            "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1000&q=80",
    },
    {
        title: "Full Stack Solutions",
        description:
            "We deliver scalable frontend + backend systems built for long-term growth.",
        image:
            "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1000&q=80",
    },
];

const icons = [
    Icons.Code,
    Icons.Zap,
    Icons.Shield,
    Icons.Layers,
];

export default function ServicesSection() {
    const [activeIndex, setActiveIndex] = useState(null);

    return (
        <section
            className="relative py-16 sm:py-20 px-5 sm:px-6 lg:px-12 overflow-hidden"
            id="service"
        >
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-green-100" />

            {/* Glow blobs */}
            <div className="absolute top-[-120px] left-[-120px] w-[300px] h-[300px] bg-green-400 opacity-20 blur-3xl rounded-full" />
            <div className="absolute bottom-[-120px] right-[-120px] w-[300px] h-[300px] bg-green-500 opacity-20 blur-3xl rounded-full" />

            <div className="relative max-w-7xl mx-auto">
                {/* HEADER */}
                <div className="text-center mb-12 sm:mb-14">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-100 text-green-700 text-xs sm:text-sm font-medium mb-5">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        OUR EXPERTISE
                    </div>

                    <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-900">
                        Our Solutions Are Built To{" "}
                        <span className="text-green-600">Scale</span>
                    </h2>

                    <p className="mt-4 text-sm sm:text-base text-gray-600 max-w-xl sm:max-w-2xl mx-auto leading-relaxed">
                        We build scalable software solutions that eliminate inefficiencies,
                        automate workflows, and grow with your business.
                    </p>
                </div>

                {/* GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8">
                    {services.map((service, index) => {
                        const Icon = icons[index];

                        return (
                            <TiltCard
                                key={index}
                                service={service}
                                Icon={Icon}
                                isActive={activeIndex === index}
                                setActive={() => setActiveIndex(index)}
                                unsetActive={() => setActiveIndex(null)}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

/* =========================
   🎯 TILT CARD
========================= */

function TiltCard({ service, Icon, isActive, setActive, unsetActive }) {
    const cardRef = useRef(null);
    const glowRef = useRef(null);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;

        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -6;
        const rotateY = ((x - centerX) / centerX) * 6;

        cardRef.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;

        if (glowRef.current) {
            glowRef.current.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(34,197,94,0.25), transparent 70%)`;
        }
    };

    const resetTilt = () => {
        if (cardRef.current) {
            cardRef.current.style.transform = `rotateX(0) rotateY(0) scale(1)`;
        }
    };

    return (
        <div
            className="relative"
            onMouseMove={handleMouseMove}
            onMouseLeave={() => {
                resetTilt();
                unsetActive();
            }}
            onMouseEnter={setActive}
        >
            {/* Glow border */}
            <div
                className={`absolute -inset-1 rounded-2xl blur-xl transition duration-500 ${
                    isActive ? "opacity-100" : "opacity-0"
                }`}
                style={{
                    background:
                        "linear-gradient(135deg, #22c55e, #4ade80, #16a34a)",
                }}
            />

            <motion.div
                ref={cardRef}
                className="relative h-[380px] sm:h-[420px] rounded-2xl overflow-hidden bg-white transition-all duration-300"
                style={{ transformStyle: "preserve-3d" }}
            >
                {/* Glow effect */}
                <div
                    ref={glowRef}
                    className="absolute inset-0 pointer-events-none opacity-0 hover:opacity-100 transition"
                />

                {/* Image */}
                <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className={`object-cover transition-all duration-500 ${
                        isActive ? "opacity-0 scale-110" : "opacity-100"
                    }`}
                />

                {/* Overlay */}
                <div
                    className={`absolute inset-0 bg-black/40 transition-all duration-500 ${
                        isActive ? "opacity-0" : "opacity-100"
                    }`}
                />

                {/* Content */}
                <div className="relative z-10 p-6 flex flex-col justify-end h-full">
                    {/* Icon */}
                    <div
                        className={`transition-all duration-300 ${
                            isActive ? "opacity-100 mb-3" : "opacity-0"
                        }`}
                    >
                        <Icon className="w-8 h-8 text-green-600" />
                    </div>

                    {/* Title */}
                    <h3
                        className={`text-lg sm:text-xl font-semibold transition ${
                            isActive ? "text-black mb-2" : "text-white"
                        }`}
                    >
                        {service.title}
                    </h3>

                    {/* Description */}
                    <p
                        className={`text-sm text-gray-700 leading-relaxed transition-all duration-300 ${
                            isActive ? "opacity-100 mt-1" : "opacity-0 h-0"
                        }`}
                    >
                        {service.description}
                    </p>
                </div>
            </motion.div>
        </div>
    );
}