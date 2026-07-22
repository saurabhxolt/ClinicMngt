import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";
import { FaShieldAlt, FaAward, FaHeartbeat, FaCheckCircle, FaCalendarCheck } from "react-icons/fa";
import { Link } from "react-router-dom";
import doctors from "@/data/doctors";
import { clinicInfo } from "@/data/clinic";

export default function About() {
    return (
        <div className="py-12 bg-slate-50 min-h-screen">
            <Container>
                {/* Hero Banner */}
                <div className="bg-gradient-to-r from-sky-900 via-teal-900 to-slate-900 text-white rounded-3xl p-8 sm:p-14 shadow-2xl relative overflow-hidden mb-16">
                    <div className="max-w-3xl relative z-10 space-y-4">
                        <span className="bg-sky-500/20 text-sky-300 border border-sky-400/30 text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full">
                            About Skin & Imaging Clinic
                        </span>
                        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
                            Providing World-Class Skin Care & Diagnostic Precision
                        </h1>
                        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                            Established in 2012, Skin & Imaging Clinic brings together senior clinical dermatologists and diagnostic radiodiagnosis specialists under one roof. We combine compassionate medical care with FDA-approved laser technology and low-dose digital imaging.
                        </p>
                        <div className="pt-2 flex flex-wrap gap-4">
                            <Link to="/appointment">
                                <button className="flex items-center gap-2 bg-gradient-to-r from-sky-500 to-teal-500 hover:from-sky-600 hover:to-teal-600 text-white font-bold px-6 py-3 rounded-xl shadow-lg text-sm">
                                    <FaCalendarCheck /> Book Consultation
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Mission & Vision Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-md space-y-3">
                        <div className="h-12 w-12 rounded-2xl bg-sky-100 text-sky-700 flex items-center justify-center font-bold text-xl mb-4">
                            <FaShieldAlt />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900">Our Clinical Mission</h3>
                        <p className="text-xs text-slate-600 leading-relaxed">
                            To deliver evidence-based, affordable, and highly accurate dermatological and diagnostic services while maintaining absolute patient privacy and safety.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-md space-y-3">
                        <div className="h-12 w-12 rounded-2xl bg-teal-100 text-teal-700 flex items-center justify-center font-bold text-xl mb-4">
                            <FaHeartbeat />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900">Diagnostic Vision</h3>
                        <p className="text-xs text-slate-600 leading-relaxed">
                            To be the premier outpatient clinic known for zero-error diagnostic imaging, early disease detection, and transformative aesthetic skin solutions.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-md space-y-3">
                        <div className="h-12 w-12 rounded-2xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-xl mb-4">
                            <FaAward />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900">Quality Standards</h3>
                        <p className="text-xs text-slate-600 leading-relaxed">
                            Strict adherence to NABH hygiene standards, daily calibration of radiology scanners, sterile disposable laser tips, and patient-first protocols.
                        </p>
                    </div>
                </div>

                {/* Key Facility Highlights */}
                <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-md mb-16">
                    <div className="max-w-2xl mb-8">
                        <span className="text-xs font-bold text-sky-700 uppercase tracking-widest bg-sky-100 px-3 py-1 rounded-md">
                            Why Patients Trust Us
                        </span>
                        <h2 className="text-3xl font-extrabold text-slate-900 mt-2">
                            Infrastructure & Technology
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {clinicInfo.highlights.map((highlight, idx) => (
                            <div key={idx} className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
                                <FaCheckCircle className="text-teal-600 text-lg shrink-0" />
                                <span className="text-sm font-semibold text-slate-800">{highlight}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Doctors Section */}
                <div>
                    <SectionTitle
                        title="Our Medical Directors & Consultants"
                        subtitle="Board-certified specialists with over a decade of clinical experience."
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
                        {doctors.slice(0, 2).map((doc) => (
                            <div key={doc.id} className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-md flex flex-col md:flex-row gap-6 items-center">
                                <img
                                    src={doc.image}
                                    alt={doc.name}
                                    className="h-44 w-44 rounded-2xl object-cover object-top border-4 border-sky-100 shadow-md shrink-0"
                                />
                                <div className="space-y-2 text-center md:text-left">
                                    <span className="bg-sky-100 text-sky-800 text-[11px] font-bold px-3 py-1 rounded-full">
                                        {doc.department}
                                    </span>
                                    <h3 className="text-xl font-bold text-slate-900">{doc.name}</h3>
                                    <p className="text-xs font-bold text-sky-700">{doc.qualification}</p>
                                    <p className="text-xs text-slate-600 leading-relaxed">{doc.bio}</p>
                                    <p className="text-xs font-semibold text-slate-700 pt-2">
                                        Experience: <span className="text-teal-700">{doc.experience}</span>
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    );
}