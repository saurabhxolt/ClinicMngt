import { useState } from "react";
import Container from "@/components/common/Container";
import { radiologyServices } from "@/data/services";
import { FaCalendarCheck, FaQuestionCircle, FaCheck, FaExclamationCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Radiology() {
    const [activeServiceId, setActiveServiceId] = useState("xray");

    const activeService = radiologyServices.find(s => s.id === activeServiceId) || radiologyServices[0];

    return (
        <div className="py-12 bg-slate-50 min-h-screen">
            <Container>
                {/* Header */}
                <div className="bg-gradient-to-r from-sky-950 via-slate-900 to-indigo-950 text-white rounded-3xl p-8 sm:p-12 shadow-2xl mb-12 relative overflow-hidden">
                    <div className="max-w-3xl space-y-4">
                        <span className="bg-sky-500/20 text-sky-300 border border-sky-400/30 text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full">
                            Diagnostic Radiology & Imaging Center
                        </span>
                        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
                            Ultra-Low Radiation & High-Resolution Imaging
                        </h1>
                        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                            Under the leadership of Dr. Sagar Bijwe (MD Radiodiagnosis), we provide instant Digital Radiography, 4D Ultrasound scans, and Color Doppler vascular imaging with zero reporting delays.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Left Sidebar Tabs */}
                    <div className="lg:col-span-4 space-y-3">
                        <h3 className="text-xs font-bold uppercase text-slate-500 tracking-wider px-2 mb-3">
                            Radiology Modalities
                        </h3>
                        {radiologyServices.map((service) => {
                            const IconComponent = service.icon;
                            const isActive = service.id === activeServiceId;
                            return (
                                <button
                                    key={service.id}
                                    onClick={() => setActiveServiceId(service.id)}
                                    className={`w-full flex items-center justify-between p-4 rounded-2xl text-left transition-all font-semibold text-sm ${
                                        isActive
                                            ? "bg-gradient-to-r from-sky-700 to-indigo-700 text-white shadow-lg shadow-sky-700/20"
                                            : "bg-white text-slate-800 hover:bg-slate-100 border border-slate-200/80"
                                    }`}
                                >
                                    <div className="flex items-center gap-3">
                                        <div className={`p-2.5 rounded-xl ${isActive ? "bg-white/20 text-white" : "bg-sky-50 text-sky-700"}`}>
                                            <IconComponent className="text-lg" />
                                        </div>
                                        <div>
                                            <div className="font-bold">{service.title}</div>
                                            <div className={`text-xs ${isActive ? "text-sky-200" : "text-slate-500"}`}>{service.shortDesc}</div>
                                        </div>
                                    </div>
                                </button>
                            );
                        })}
                    </div>

                    {/* Right Details Panel */}
                    <div className="lg:col-span-8 bg-white rounded-3xl p-8 border border-slate-200/80 shadow-md space-y-8">
                        <div>
                            <span className="text-xs font-bold text-sky-700 bg-sky-50 px-3 py-1 rounded-md uppercase tracking-wider">
                                {activeService.category} Procedure Guide
                            </span>
                            <h2 className="text-3xl font-extrabold text-slate-900 mt-2">
                                {activeService.title}
                            </h2>
                            <p className="text-slate-600 text-base leading-relaxed mt-3">
                                {activeService.overview}
                            </p>
                        </div>

                        {/* Purpose & Preparation Card */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-100">
                            <div className="bg-sky-50/80 border border-sky-200/60 p-5 rounded-2xl space-y-2">
                                <h4 className="font-bold text-sky-950 flex items-center gap-2 text-sm">
                                    <FaCheck className="text-sky-600" /> Purpose of Examination
                                </h4>
                                <p className="text-xs text-sky-900 leading-relaxed">
                                    {activeService.purpose}
                                </p>
                            </div>

                            <div className="bg-amber-50/80 border border-amber-200/60 p-5 rounded-2xl space-y-2">
                                <h4 className="font-bold text-amber-950 flex items-center gap-2 text-sm">
                                    <FaExclamationCircle className="text-amber-600" /> Patient Preparation Instructions
                                </h4>
                                <p className="text-xs text-amber-900 leading-relaxed">
                                    {activeService.preparation}
                                </p>
                            </div>
                        </div>

                        {/* Procedure Steps */}
                        <div className="space-y-3 pt-4 border-t border-slate-100">
                            <h3 className="text-lg font-bold text-slate-900">
                                How the Scan Procedure is Conducted
                            </h3>
                            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs text-slate-700 leading-relaxed">
                                {activeService.procedure}
                            </div>
                        </div>

                        {/* FAQs */}
                        {activeService.faqs && activeService.faqs.length > 0 && (
                            <div className="pt-6 border-t border-slate-100 space-y-4">
                                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                                    <FaQuestionCircle className="text-sky-600" /> Frequently Asked Questions
                                </h3>
                                <div className="space-y-3">
                                    {activeService.faqs.map((faq, idx) => (
                                        <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/60 space-y-1">
                                            <h5 className="text-xs font-bold text-slate-900">Q: {faq.question}</h5>
                                            <p className="text-xs text-slate-600">A: {faq.answer}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Booking CTA Banner */}
                        <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 bg-gradient-to-r from-sky-900 to-indigo-900 text-white p-6 rounded-2xl shadow-lg">
                            <div>
                                <h4 className="font-bold text-white text-base">Schedule Your {activeService.title}</h4>
                                <p className="text-xs text-sky-200 mt-1">Get immediate digital films and consultant radiologist report.</p>
                            </div>
                            <Link to="/appointment" state={{ service: activeService.title, department: "Radiology" }}>
                                <button className="flex items-center gap-2 bg-gradient-to-r from-teal-400 to-emerald-400 text-slate-950 font-extrabold px-6 py-3 rounded-xl shadow-md text-xs hover:scale-105 transition-all shrink-0">
                                    <FaCalendarCheck /> Book Scan Appointment
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}