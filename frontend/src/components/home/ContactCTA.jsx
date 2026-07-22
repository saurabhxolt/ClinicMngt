import { Link } from "react-router-dom";
import { FaPhoneAlt, FaWhatsapp, FaCalendarCheck, FaMapMarkerAlt } from "react-icons/fa";
import Container from "../common/Container";
import { clinicInfo } from "../../data/clinic";

export default function ContactCTA() {
    return (
        <section className="py-16 bg-gradient-to-r from-sky-900 via-teal-900 to-slate-900 text-white relative overflow-hidden">
            <Container className="relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    <div className="lg:col-span-8 space-y-4">
                        <span className="bg-sky-500/20 text-sky-300 border border-sky-400/30 text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full">
                            Instant Appointment & Inquiries
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                            Have Questions About Skin Care or Diagnostic Scans?
                        </h2>
                        <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
                            Our patient care team is available to assist with doctor schedules, scan preparations, and instant appointment booking.
                        </p>
                        <div className="flex items-center gap-2 text-xs text-teal-300 font-medium">
                            <FaMapMarkerAlt /> {clinicInfo.address}
                        </div>
                    </div>

                    <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
                        <Link to="/appointment">
                            <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-sky-500 to-teal-500 hover:from-sky-400 hover:to-teal-400 text-white font-bold py-3.5 px-6 rounded-xl shadow-xl transition-all">
                                <FaCalendarCheck /> Book Online Now
                            </button>
                        </Link>
                        <a
                            href={`tel:${clinicInfo.phone}`}
                            className="w-full flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold py-3.5 px-6 rounded-xl border border-white/20 transition-all text-sm"
                        >
                            <FaPhoneAlt className="text-teal-400" /> Call {clinicInfo.phone}
                        </a>
                        <a
                            href="https://wa.me/919876543210"
                            target="_blank"
                            rel="noreferrer"
                            className="w-full flex items-center justify-center gap-2 bg-emerald-600/30 hover:bg-emerald-600/40 text-emerald-300 font-bold py-3 px-6 rounded-xl border border-emerald-500/40 transition-all text-xs"
                        >
                            <FaWhatsapp className="text-emerald-400 text-base" /> Chat on WhatsApp
                        </a>
                    </div>
                </div>
            </Container>
        </section>
    );
}
