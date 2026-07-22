import { Link } from "react-router-dom";
import { FaCalendarCheck, FaPhoneAlt, FaWhatsapp, FaShieldAlt } from "react-icons/fa";
import { clinicInfo } from "../../../data/clinic";

export default function HeroContent() {
    return (
        <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-sky-100/80 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-sky-800 border border-sky-200">
                <FaShieldAlt className="text-sky-600" />
                <span>NABH Standard Diagnostic & Skin Care Center</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
                Precision Diagnostics <br />
                <span className="bg-gradient-to-r from-sky-600 via-teal-600 to-indigo-600 bg-clip-text text-transparent">
                    & Expert Dermatology
                </span>
            </h1>

            <p className="max-w-xl text-base sm:text-lg leading-relaxed text-slate-600">
                Trusted by 25,000+ patients. Combining 14+ years of clinical excellence, US-FDA laser treatments, high-resolution Color Doppler ultrasound, and low-dose digital X-ray under one roof.
            </p>

            {/* Quick Action CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link to="/appointment">
                    <button className="flex items-center gap-2 bg-gradient-to-r from-sky-600 to-teal-600 hover:from-sky-700 hover:to-teal-700 text-white font-bold px-6 py-3.5 rounded-xl shadow-lg shadow-sky-600/25 transition-all text-sm sm:text-base">
                        <FaCalendarCheck /> Book Appointment
                    </button>
                </Link>
                <a
                    href={`tel:${clinicInfo.phone}`}
                    className="flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-800 font-bold px-5 py-3.5 rounded-xl border border-slate-200 shadow-sm transition-all text-sm sm:text-base"
                >
                    <FaPhoneAlt className="text-sky-600" /> Call Now
                </a>
                <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-bold px-4 py-3.5 rounded-xl border border-emerald-200 transition-all text-sm sm:text-base"
                >
                    <FaWhatsapp className="text-lg text-emerald-600" /> WhatsApp
                </a>
            </div>

            {/* Micro Highlights */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 border-t border-slate-200/80">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                    <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                    <span>Same-Day Reports</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                    <span className="h-2 w-2 rounded-full bg-sky-500"></span>
                    <span>Zero Waiting Time</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                    <span className="h-2 w-2 rounded-full bg-teal-500"></span>
                    <span>Affordable Care</span>
                </div>
            </div>
        </div>
    );
}