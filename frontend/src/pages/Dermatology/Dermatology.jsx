import { useState } from "react";
import Container from "@/components/common/Container";
import { dermatologyServices } from "@/data/services";
import { FaCalendarCheck, FaQuestionCircle, FaCheck, FaExclamationTriangle, FaStethoscope, FaMicroscope } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Dermatology() {
    const [activeServiceId, setActiveServiceId] = useState("acne");

    const activeService = dermatologyServices.find(s => s.id === activeServiceId) || dermatologyServices[0];

    return (
        <div className="py-12 bg-slate-50 min-h-screen">
            <Container>
                {/* Header */}
                <div className="bg-gradient-to-r from-teal-900 via-sky-900 to-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-2xl mb-12 relative overflow-hidden">
                    <div className="max-w-3xl space-y-4">
                        <span className="bg-teal-500/20 text-teal-300 border border-teal-400/30 text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full">
                            Clinical & Cosmetic Dermatology
                        </span>
                        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
                            Advanced Skin, Hair & Laser Care
                        </h1>
                        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                            Personalized treatment plans led by Dr. Richa Rokade for chronic skin conditions, acne scar revision, PRP hair restoration, and medical facials.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Left Sidebar Menu: Service Tabs */}
                    <div className="lg:col-span-4 space-y-2">
                        <h3 className="text-xs font-bold uppercase text-slate-500 tracking-wider px-2 mb-3">
                            Dermatology Conditions & Therapies
                        </h3>
                        {dermatologyServices.map((service) => {
                            const IconComponent = service.icon;
                            const isActive = service.id === activeServiceId;
                            return (
                                <button
                                    key={service.id}
                                    onClick={() => setActiveServiceId(service.id)}
                                    className={`w-full flex items-center justify-between p-4 rounded-2xl text-left transition-all font-semibold text-sm ${
                                        isActive
                                            ? "bg-gradient-to-r from-sky-700 to-teal-700 text-white shadow-lg shadow-sky-700/20"
                                            : "bg-white text-slate-800 hover:bg-slate-100 border border-slate-200/80"
                                    }`}
                                >
                                    <div className="flex items-center gap-3">
                                        <div className={`p-2 rounded-xl ${isActive ? "bg-white/20 text-white" : "bg-sky-50 text-sky-700"}`}>
                                            <IconComponent className="text-base" />
                                        </div>
                                        <span>{service.title}</span>
                                    </div>
                                </button>
                            );
                        })}
                    </div>

                    {/* Right Content Area: Detailed Condition & SEO Page */}
                    <div className="lg:col-span-8 bg-white rounded-3xl p-8 border border-slate-200/80 shadow-md space-y-8">
                        <div>
                            <span className="text-xs font-bold text-teal-700 bg-teal-50 px-3 py-1 rounded-md uppercase tracking-wider">
                                {activeService.category} Condition Guide
                            </span>
                            <h2 className="text-3xl font-extrabold text-slate-900 mt-2">
                                {activeService.title}
                            </h2>
                            <p className="text-slate-600 text-base leading-relaxed mt-4">
                                {activeService.overview}
                            </p>
                        </div>

                        {/* Causes & Symptoms Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-100">
                            <div className="bg-amber-50/70 border border-amber-200/60 p-5 rounded-2xl space-y-2">
                                <h4 className="font-bold text-amber-900 flex items-center gap-2 text-sm">
                                    <FaExclamationTriangle className="text-amber-600" /> Common Causes
                                </h4>
                                <ul className="space-y-1.5 text-xs text-amber-950">
                                    {activeService.causes?.map((cause, i) => (
                                        <li key={i} className="flex items-center gap-2">
                                            <span className="h-1.5 w-1.5 rounded-full bg-amber-500"></span>
                                            {cause}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-sky-50/70 border border-sky-200/60 p-5 rounded-2xl space-y-2">
                                <h4 className="font-bold text-sky-900 flex items-center gap-2 text-sm">
                                    <FaStethoscope className="text-sky-600" /> Key Symptoms
                                </h4>
                                <ul className="space-y-1.5 text-xs text-sky-950">
                                    {activeService.symptoms?.map((symptom, i) => (
                                        <li key={i} className="flex items-center gap-2">
                                            <span className="h-1.5 w-1.5 rounded-full bg-sky-500"></span>
                                            {symptom}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Diagnostic & Treatment Plan */}
                        <div className="space-y-4 pt-4 border-t border-slate-100">
                            <div>
                                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                                    <FaMicroscope className="text-teal-600" /> Diagnostic Assessment
                                </h3>
                                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                                    {activeService.diagnosis}
                                </p>
                            </div>

                            <div>
                                <h3 className="text-lg font-bold text-slate-900 mb-3">
                                    Clinical Treatment Protocol
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {activeService.treatments?.map((treatment, i) => (
                                        <div key={i} className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs font-semibold text-slate-800">
                                            <FaCheck className="text-teal-600 shrink-0" />
                                            <span>{treatment}</span>
                                        </div>
                                    ))}
                                </div>
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
                        <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 bg-gradient-to-r from-sky-50 to-teal-50 p-6 rounded-2xl">
                            <div>
                                <h4 className="font-bold text-slate-900">Need expert evaluation for {activeService.title}?</h4>
                                <p className="text-xs text-slate-600">Consult with Dr. Richa Rokade today.</p>
                            </div>
                            <Link to="/appointment" state={{ service: activeService.title, department: "Dermatology" }}>
                                <button className="flex items-center gap-2 bg-gradient-to-r from-sky-600 to-teal-600 text-white font-bold px-6 py-3 rounded-xl shadow-md text-xs hover:shadow-lg transition-all shrink-0">
                                    <FaCalendarCheck /> Book Appointment
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}