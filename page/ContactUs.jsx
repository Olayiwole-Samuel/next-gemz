"use client";

import { useState } from 'react';

const servicesOptions = [
    'Procurement System Optimization',
    'Backup & Disaster Recovery',
    'Marine Logistics Platform',
    'Real Estate Portal Development',
    'Other Consult'
];

export default function ContactUs() {
    const [formData, setFormData] = useState({
        email: '',
        service: [],
        description: '',
    });
    const [status, setStatus] = useState({ type: '', message: '' });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (type === 'checkbox') {
            let updatedService = [...formData.service];

            if (checked) {
                updatedService.push(value);
            } else {
                updatedService = updatedService.filter((s) => s !== value);
            }

            setFormData({ ...formData, [name]: updatedService });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.service.length === 0) {
            setStatus({ type: 'error', message: 'Please select at least one service.' });
            return;
        }

        setLoading(true);
        setStatus({ type: 'info', message: 'Sending enquiry...' });

        try {
            // ✅ FIXED: direct Next.js API route (NO ENV)
            const response = await fetch("/api/send-email", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus({ type: 'success', message: 'Thank you! We will be in touch.' });
                setFormData({ email: '', service: [], description: '' });
            } else {
                setStatus({ type: 'error', message: data.message || 'Something went wrong.' });
            }
        } catch (error) {
            setStatus({ type: 'error', message: 'Network error. Please try again.' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="py-16 md:py-24 bg-[#FAFBFC] relative overflow-hidden" id="contact-us">
            {/* Background Blur Decor */}
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-emerald-100/30 blur-[120px] md:blur-[150px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative">
                {/* Header */}
                <div className="max-w-2xl mx-auto lg:mx-0 mb-12 md:mb-16 text-center lg:text-left">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold tracking-wide mb-6">
                        GET IN TOUCH
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-slate-900 leading-tight">
                        Connect with Our Team for a{' '}
                        <span className="text-emerald-700 font-semibold">Transformative Consultation.</span>
                    </h2>

                    <p className="mt-6 text-base md:text-lg text-slate-600 leading-relaxed font-light px-4 sm:px-0">
                        We are dedicated to helping businesses like yours achieve measurable digital growth.
                    </p>
                </div>

                <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-start">
                    {/* Form Section */}
                    <div className="lg:col-span-3">
                        <div className="bg-white p-6 sm:p-8 md:p-10 lg:p-12 border border-slate-100 rounded-3xl shadow-sm">
                            <form onSubmit={handleSubmit} className="space-y-8">
                                {/* Email Field */}
                                <div>
                                    <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2.5">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-5 py-4 border border-slate-200 rounded-2xl focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all"
                                        placeholder="you@company.com"
                                    />
                                </div>

                                {/* Services Checkboxes */}
                                <div>
                                    <label className="block text-sm font-semibold text-slate-900 mb-4">
                                        What services are you interested in?
                                    </label>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {servicesOptions.map((service, index) => (
                                            <div key={index} className="flex items-center gap-3 bg-slate-50 hover:bg-slate-100 p-4 rounded-2xl transition-all">
                                                <input
                                                    id={`service-${index}`}
                                                    name="service"
                                                    type="checkbox"
                                                    value={service}
                                                    checked={formData.service.includes(service)}
                                                    onChange={handleChange}
                                                    className="h-5 w-5 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
                                                />
                                                <label
                                                    htmlFor={`service-${index}`}
                                                    className="text-sm font-medium text-slate-700 cursor-pointer flex-1"
                                                >
                                                    {service}
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Description */}
                                <div>
                                    <label htmlFor="description" className="block text-sm font-semibold text-slate-900 mb-2.5">
                                        Project Description
                                    </label>
                                    <textarea
                                        name="description"
                                        id="description"
                                        value={formData.description}
                                        onChange={handleChange}
                                        required
                                        rows={6}
                                        className="w-full px-5 py-4 border border-slate-200 rounded-2xl focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none resize-y min-h-[140px]"
                                        placeholder="Tell us more about your project or requirements..."
                                    />
                                </div>

                                {/* Status Message */}
                                {status.message && (
                                    <div className={`p-4 rounded-2xl text-sm font-medium ${
                                        status.type === 'success'
                                            ? 'bg-emerald-50 text-emerald-800 border border-emerald-100'
                                            : status.type === 'error'
                                                ? 'bg-red-50 text-red-800 border border-red-100'
                                                : 'bg-slate-100 text-slate-700'
                                    }`}>
                                        {status.message}
                                    </div>
                                )}

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full py-5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-base transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                >
                                    {loading ? (
                                        "Sending your enquiry..."
                                    ) : (
                                        <>
                                            Send Enquiry
                                            <span className="text-lg">→</span>
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Side Information */}
                    <div className="lg:col-span-2 space-y-8 lg:space-y-12">
                        <div className="p-8 bg-white border border-slate-100 rounded-3xl shadow-sm">
                            <h4 className="text-xl font-medium text-slate-900 mb-3">Dedicated Support</h4>
                            <p className="text-slate-600 leading-relaxed">
                                We engineer solutions that generate tangible results. Our team is ready to discuss your unique needs.
                            </p>
                        </div>

                        <div className="p-8 bg-emerald-700 text-white rounded-3xl shadow-lg">
                            <p className="text-lg font-medium">Send us an email directly</p>
                            <div className="h-px w-12 bg-emerald-200/50 my-6" />
                            <a
                                href="mailto:support@gemzsoftware.com"
                                className="block text-2xl md:text-3xl font-light tracking-tight hover:text-emerald-200 transition-colors break-all"
                            >
                                support@gemzsoftware.com
                            </a>
                            <p className="mt-8 text-emerald-100 text-sm">
                                We typically respond within 24 hours.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}