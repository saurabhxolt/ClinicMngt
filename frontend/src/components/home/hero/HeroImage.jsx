import { FaStar, FaMicroscope } from "react-icons/fa";
import { useSiteConfig } from "../../../context/SiteConfigContext";

export default function HeroImage() {
    const { config } = useSiteConfig();
    const drRicha = config.doctors.find(d => d.id === 1) || config.doctors[0];
    const drSagar = config.doctors.find(d => d.id === 2) || config.doctors[1];

    return (
        <div className="relative mx-auto max-w-lg lg:max-w-none">
            {/* Background Glow Blobs */}
            <div className="absolute -top-10 -left-10 h-72 w-72 bg-sky-300/40 rounded-full filter blur-3xl -z-10 animate-pulse"></div>
            <div className="absolute -bottom-10 -right-10 h-72 w-72 bg-teal-300/40 rounded-full filter blur-3xl -z-10"></div>

            {/* Doctor Dual Showcase Grid */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-950 p-4 space-y-4">
                <div className="grid grid-cols-2 gap-3.5">
                    {/* Dr. Richa Portrait */}
                    <div className="relative rounded-2xl overflow-hidden group bg-slate-900 border border-slate-800 flex flex-col justify-between">
                        <div className="h-64 sm:h-72 w-full overflow-hidden bg-slate-900 flex items-center justify-center p-1">
                            <img
                                src={drRicha?.image || "/images/doctors/dr_richa_rokade.png"}
                                alt={drRicha?.name || "Dr. Richa Rokade Bijwe"}
                                className="w-full h-full object-cover object-top rounded-xl group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <div className="bg-gradient-to-t from-slate-950 via-slate-900 to-transparent p-3 text-white">
                            <span className="text-[10px] font-bold text-teal-400 uppercase tracking-wide block">MD Dermatology</span>
                            <h4 className="text-xs font-extrabold text-white leading-tight mt-0.5">Dr. Richa Rokade Bijwe</h4>
                            <p className="text-[10px] text-slate-300">Ex-AIIMS Bhopal</p>
                        </div>
                    </div>

                    {/* Dr. Sagar Portrait */}
                    <div className="relative rounded-2xl overflow-hidden group bg-slate-900 border border-slate-800 flex flex-col justify-between">
                        <div className="h-64 sm:h-72 w-full overflow-hidden bg-slate-900 flex items-center justify-center p-1">
                            <img
                                src={drSagar?.image || "/images/doctors/dr_sagar_bijwe.png"}
                                alt={drSagar?.name || "Dr. Sagar Rajabhau Bijwe"}
                                className="w-full h-full object-cover object-top rounded-xl group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <div className="bg-gradient-to-t from-slate-950 via-slate-900 to-transparent p-3 text-white">
                            <span className="text-[10px] font-bold text-sky-400 uppercase tracking-wide block">MD Radiodiagnosis</span>
                            <h4 className="text-xs font-extrabold text-white leading-tight mt-0.5">Dr. Sagar R. Bijwe</h4>
                            <p className="text-[10px] text-slate-300">Ex-JJ Hospital Mumbai</p>
                        </div>
                    </div>
                </div>

                {/* Banner Caption */}
                <div className="bg-slate-900/90 rounded-2xl p-3 text-center border border-slate-800/80">
                    <div className="flex items-center justify-center gap-2">
                        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-ping"></span>
                        <span className="text-xs font-bold text-white">Vandana Diagnostic & Dr. Richa Skin Clinic</span>
                    </div>
                    <p className="text-[11px] text-slate-400 mt-0.5">Behind Gawande Jewellers, Pandhurna Chawk, Warud • 8421729984</p>
                </div>
            </div>

            {/* Floating Badge 1: Rating (Placed neatly at top-left) */}
            <div className="absolute -top-5 -left-5 bg-white/95 backdrop-blur-md px-3.5 py-2.5 rounded-2xl shadow-xl border border-slate-200/80 flex items-center gap-3 hidden sm:flex z-20">
                <div className="h-9 w-9 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center font-bold shrink-0">
                    <FaStar className="text-base" />
                </div>
                <div>
                    <div className="text-xs font-extrabold text-slate-900">4.9 / 5.0 Rating</div>
                    <div className="text-[10px] text-slate-500">Google Verified Reviews</div>
                </div>
            </div>

            {/* Floating Badge 2: Diagnostic Badge (Placed neatly at bottom-right) */}
            <div className="absolute -bottom-5 -right-5 bg-white/95 backdrop-blur-md px-3.5 py-2.5 rounded-2xl shadow-xl border border-slate-200/80 flex items-center gap-3 hidden sm:flex z-20">
                <div className="h-9 w-9 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center font-bold shrink-0">
                    <FaMicroscope className="text-base" />
                </div>
                <div>
                    <div className="text-xs font-extrabold text-slate-900">Digital Doppler & X-Ray</div>
                    <div className="text-[10px] text-slate-500">Same-Day Reports</div>
                </div>
            </div>
        </div>
    );
}