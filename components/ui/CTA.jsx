export default function CTA() {
    return (
        <section className="py-20 sm:py-24 md:py-28 bg-gradient-to-br from-teal-600 via-teal-700 to-emerald-600 text-white relative overflow-hidden">

            {/* Softer decorative glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#ffffff15_0%,transparent_55%)]"></div>
            <div className="absolute -bottom-24 -right-24 sm:-bottom-32 sm:-right-32 w-72 sm:w-96 h-72 sm:h-96 bg-white/10 rounded-full blur-3xl"></div>

            <div className="max-w-4xl mx-auto px-5 sm:px-6 md:px-10 text-center relative">

                {/* Headline */}
                <h2 className="text-3xl sm:text-4xl md:text-6xl font-semibold tracking-tight leading-[1.2]">
                    Let’s Build Something{" "}
                    <span className="text-white">Scalable</span>
                </h2>

                {/* Subtext */}
                <p className="mt-5 sm:mt-6 text-base sm:text-lg md:text-xl text-white/90 max-w-xl sm:max-w-2xl mx-auto leading-relaxed">
                    Partner with us to create high-performance enterprise software
                    tailored to your business growth and long-term success.
                </p>

                {/* CTA Button */}
                <div className="mt-10 sm:mt-12">
                    <a
                        href="#contact-us"
                        className="group px-7 sm:px-10 md:px-12 py-4 sm:py-5 bg-white text-teal-700 font-semibold text-base sm:text-lg md:text-xl rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl shadow-black/20 hover:scale-[1.05] active:scale-[0.97] transition-all duration-300 inline-flex items-center gap-3 sm:gap-4 mx-auto"
                    >
                        Get Free Consultation
                        <span className="text-xl sm:text-2xl group-hover:translate-x-1 transition-transform">
              →
            </span>
                    </a>
                </div>

                {/* Trust line */}
                <p className="mt-8 sm:mt-10 text-xs sm:text-sm text-white/70 tracking-wide">
                    No long sales calls • Fast onboarding • Results that matter
                </p>
            </div>
        </section>
    );
}