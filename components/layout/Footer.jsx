"use client";

import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-100 pt-16 sm:pt-20 pb-10 sm:pb-12">
            <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-10">

                {/* Grid */}
                <div className="grid gap-12 md:grid-cols-12">

                    {/* Brand */}
                    <div className="md:col-span-5">
                        <div className="flex items-center gap-3">
                            <Image
                                src="/download.png"
                                alt="Gemz Logo"
                                width={60}
                                height={60}
                                className="object-contain"
                            />

                            <div>
                                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
                                    Gemz
                                </h1>

                                <p className="text-[10px] tracking-[3px] text-teal-600">
                                    SOFTWARE INNOVATIVE
                                </p>
                            </div>
                        </div>

                        <p className="mt-5 sm:mt-6 text-sm sm:text-base text-gray-600 leading-relaxed max-w-md">
                            Building tomorrow's enterprise software today with precision,
                            innovation, and uncompromising quality.
                        </p>

                        {/* Socials */}

                    </div>

                    {/* Links Section */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 md:col-span-7">

                        {/* Services */}
                        <div>
                            <h4 className="font-semibold text-gray-900 mb-4 sm:mb-6">
                                Services
                            </h4>
                            <ul className="space-y-3 text-sm text-gray-600">
                                <li className="hover:text-teal-600 cursor-pointer">
                                    Custom Development
                                </li>
                                <li className="hover:text-teal-600 cursor-pointer">
                                    Security & Compliance
                                </li>
                                <li className="hover:text-teal-600 cursor-pointer">
                                    Performance Optimization
                                </li>
                                <li className="hover:text-teal-600 cursor-pointer">
                                    Full-Stack Solutions
                                </li>
                            </ul>
                        </div>

                        {/* Company */}
                        <div>
                            <h4 className="font-semibold text-gray-900 mb-4 sm:mb-6">
                                Company
                            </h4>
                            <ul className="space-y-3 text-sm text-gray-600">
                                <li className="hover:text-teal-600 cursor-pointer">
                                    About Us
                                </li>
                                <li className="hover:text-teal-600 cursor-pointer">
                                    Our Process
                                </li>
                                <li className="hover:text-teal-600 cursor-pointer">
                                    Case Studies
                                </li>
                                <li className="hover:text-teal-600 cursor-pointer">
                                    Careers
                                </li>
                            </ul>
                        </div>

                        {/* Contact */}
                        <div className="col-span-2 sm:col-span-1">
                            <h4 className="font-semibold text-gray-900 mb-4 sm:mb-6">
                                Get In Touch
                            </h4>

                            <div className="space-y-1 text-sm text-gray-600">
                                <p>support@gemzsoftware.com</p>
                                <p>Lagos, Nigeria</p>
                            </div>

                            <div className="mt-6 sm:mt-10">
                                <h4 className="font-semibold text-gray-900 mb-3 sm:mb-4">
                                    Legal
                                </h4>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li className="hover:text-teal-600 cursor-pointer">
                                        Privacy Policy
                                    </li>
                                    <li className="hover:text-teal-600 cursor-pointer">
                                        Terms of Service
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-gray-100 flex flex-col sm:flex-row gap-4 sm:gap-0 justify-between items-center text-xs sm:text-sm text-gray-500">
                    <p className="text-center sm:text-left">
                        © 2026 Gemz Software Inc. All rights reserved.
                    </p>

                    <div className="flex gap-6 sm:gap-8">
            <span className="hover:text-teal-600 cursor-pointer">
              Privacy
            </span>
                        <span className="hover:text-teal-600 cursor-pointer">
              Legal
            </span>
                        <span className="hover:text-teal-600 cursor-pointer">
              Cookies
            </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}