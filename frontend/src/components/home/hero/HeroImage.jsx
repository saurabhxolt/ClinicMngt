import { FaStar, FaMicroscope } from "react-icons/fa";
import { useSiteConfig } from "../../../context/SiteConfigContext";

export default function HeroImage() {
    const { config } = useSiteConfig();
    const drRicha = config.doctors.find(d => d.id === 1) || config.doctors[0];
    const drSagar = config.doctors.find(d => d.id === 2) || config.doctors[1];

    return (
        <div className="relative mx-auto max-w-lg lg:max-w-none">
            {/* Background Blob Glow */}
            <div className="absolute -top-6 -left-6 h-72 w-72 bg-sky-200/60 rounded-full filter blur-3xl -z-10 animate-pulse"></div>
            <div className="absolute -bottom-6 -right-6 h-72 w-72 bg-teal-200/60 rounded-full filter blur-3xl -z-10"></div>

            {/* Doctor Dual Showcase Grid */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 p-4 space-y-4">
                <div className="grid grid-cols-2 gap-3">
                    {/* Dr. Richa Portrait */}
                    <div className="relative rounded-2xl overflow-hidden group bg-slate-950 border border-slate-800">
                        <img
                            src={drRicha?.image || "/images/doctors/dr_richa_rokade.png"}
                            alt={drRicha?.name || "Dr. Richa Rokade Bijwe"}
                            className="w-full h-56 sm:h-64 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950 via-slate-900/90 to-transparent p-3 text-white">
                            <span className="text-[10px] font-bold text-teal-300 uppercase tracking-wide">MD Dermatology</span>
                            <h4 className="text-xs font-bold text-white leading-tight">Dr. Richa Rokade Bijwe</h4>
                            <p className="text-[9px] text-slate-300">Ex-AIIMS Bhopal</p>
                        </div>
                    </div>

                    {/* Dr. Sagar Portrait */}
                    <div className="relative rounded-2xl overflow-hidden group bg-slate-950 border border-slate-800">
                        <img
                            src={drSagar?.image || "/images/doctors/dr_sagar_bijwe.png"}
                            alt={drSagar?.name || "Dr. Sagar Rajabhau Bijwe"}
                            className="w-full h-56 sm:h-64 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950 via-slate-900/90 to-transparent p-3 text-white">
                            <span className="text-[10px] font-bold text-sky-300 uppercase tracking-wide">MD Radiodiagnosis</span>
                            <h4 className="text-xs font-bold text-white leading-tight">Dr. Sagar R. Bijwe</h4>
                            <p className="text-[9px] text-slate-300">Ex-JJ Hospital Mumbai</p>
                        </div>
                    </div>
                </div>

                {/* Banner Caption */}
                <div className="bg-slate-950/80 rounded-2xl p-3.5 text-center border border-slate-800">
                    <div className="flex items-center justify-center gap-2">
                        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-ping"></span>
                        <span className="text-xs font-bold text-white">Vandana Diagnostic & Dr. Richa Skin Clinic</span>
                    </div>
                    <p className="text-[11px] text-slate-400 mt-0.5">Warud, Amravati • Phone: +91 8421729984</p>
                </div>
            </div>

            {/* Floating Badge 1: Rating */}
            <div className="absolute top-4 -left-4 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 hidden sm:flex">
                <div className="h-10 w-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center font-bold">
                    <FaStar className="text-lg" />
                </div>
                <div>
                    <div className="text-sm font-extrabold text-slate-900">4.9 / 5.0 Rating</div>
                    <div className="text-[11px] text-slate-500">Google Verified Reviews</div>
                </div>
            </div>

            {/* Floating Badge 2: Diagnostic Badge */}
            <div className="absolute bottom-8 -right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 hidden sm:flex">
                <div className="h-10 w-10 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center font-bold">
                    <FaMicroscope className="text-lg" />
                </div>
                <div>
                    <div className="text-sm font-extrabold text-slate-900">Digital Doppler & X-Ray</div>
                    <div className="text-[11px] text-slate-500">Same-Day Diagnostic Reports</div>
                </div>
            </div>
        </div>
    );
}