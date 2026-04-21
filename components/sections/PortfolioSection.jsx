"use client";

import { motion } from "framer-motion";

const projects = [
    {
        tag: "ENTERPRISE ARCHITECTURE",
        title: "Strategic Supply Chain Orchestration",
        desc: "Transformed fragmented procurement workflows into a unified, high-velocity ecosystem.",
        impact: "Engineered to reduce operational overhead by 40%.",
        tech: ["Microservices", "ERP Integration", "Distributed DB"],
    },
    {
        tag: "MISSION CRITICAL",
        title: "Resilience & Disaster Recovery Engine",
        desc: "A fortress for data volatility with zero-latency backup protocols.",
        impact: "Guarantees 99.999% data availability.",
        tech: ["Hybrid Cloud", "AES-256", "Predictive Analytics"],
    },
    {
        tag: "CUSTOM WEB SOLUTIONS",
        title: "Maritime Operations Digital Hub",
        desc: "Real-time vessel tracking built for low-bandwidth environments.",
        impact: "Cuts coordination errors by half.",
        tech: ["React", "Streaming", "Offline-First"],
    },
    {
        tag: "PROPERTY TECHNOLOGY",
        title: "Modern Real Estate Ecosystem",
        desc: "Unified tenant, finance, and maintenance systems into one platform.",
        impact: "Accelerated lease cycles by 30%.",
        tech: ["Fullstack", "GIS", "Logic Engines"],
    },
];

export default function PortfolioSection() {
    return (
        <section className="bg-[#020b08] text-white py-16 sm:py-20 px-5 sm:px-6 md:px-10">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="text-center mb-14 sm:mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-emerald-500 font-bold tracking-[0.25em] text-[10px] sm:text-xs uppercase"
                    >
                        Product Blueprints
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl sm:text-4xl md:text-6xl font-semibold mt-4 mb-5"
                    >
                        Engineered Solutions
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-emerald-100/60 max-w-xl sm:max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed"
                    >
                        We architect solutions to complex business friction — not just software.
                    </motion.p>
                </div>

                {/* Grid */}
                <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.08 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -6 }}
                            className="group relative p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-xl hover:bg-white/[0.05] transition-all duration-500"
                        >
                            {/* Glow */}
                            <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition" />

                            <div className="relative z-10">

                                {/* Tag */}
                                <div className="mb-6 sm:mb-10 flex justify-end">
                  <span className="text-[9px] sm:text-[10px] font-bold tracking-widest text-emerald-400 border border-emerald-500/30 px-2.5 py-1 rounded-full bg-emerald-500/5">
                    {project.tag}
                  </span>
                                </div>

                                {/* Title */}
                                <h3 className="text-lg sm:text-xl md:text-2xl font-medium mb-3 group-hover:text-emerald-300 transition">
                                    {project.title}
                                </h3>

                                {/* Description */}
                                <p className="text-white/60 text-sm sm:text-base leading-relaxed mb-5 italic">
                                    "{project.desc}"
                                </p>

                                {/* Impact */}
                                <p className="text-xs sm:text-sm text-emerald-100/80 mb-6">
                                    <span className="text-emerald-400 font-medium">Result:</span>{" "}
                                    {project.impact}
                                </p>

                                {/* Tech */}
                                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5 text-[10px] sm:text-xs text-white/40 uppercase">
                                    {project.tech.map((t, i) => (
                                        <span key={i}>
                      {t}
                                            {i !== project.tech.length - 1 && " •"}
                    </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}