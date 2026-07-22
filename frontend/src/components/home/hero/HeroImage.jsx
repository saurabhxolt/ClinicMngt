import { FaStar, FaMicroscope } from "react-icons/fa";

export default function HeroImage() {
    return (
        <div className="relative mx-auto max-w-lg lg:max-w-none">
            {/* Background Blob Glow */}
            <div className="absolute -top-6 -left-6 h-72 w-72 bg-sky-200/60 rounded-full filter blur-3xl -z-10 animate-pulse"></div>
            <div className="absolute -bottom-6 -right-6 h-72 w-72 bg-teal-200/60 rounded-full filter blur-3xl -z-10"></div>

            {/* Doctor Showcase Container */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900">
                <img
                    src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800"
                    alt="Senior Specialists Dr. Richa & Dr. Sagar"
                    className="w-full h-[450px] sm:h-[500px] object-cover object-top hover:scale-105 transition-transform duration-500"
                />

                {/* Overlay Doctor Info Ribbon */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950 via-slate-900/90 to-transparent p-6 text-white">
                    <div className="flex items-center gap-3">
                        <div className="h-3 w-3 rounded-full bg-emerald-400 animate-ping"></div>
                        <span className="text-xs font-semibold text-emerald-300 uppercase tracking-wide">Doctor OPD Active Today</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mt-1">Dr. Richa Rokade & Dr. Sagar Bijwe</h3>
                    <p className="text-xs text-slate-300">MD Dermatology & MD Radiology Specialists</p>
                </div>
            </div>

            {/* Floating Badge 1: Rating */}
            <div className="absolute top-6 -left-4 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 hidden sm:flex">
                <div className="h-10 w-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center font-bold">
                    <FaStar className="text-lg" />
                </div>
                <div>
                    <div className="text-sm font-extrabold text-slate-900">4.9 / 5.0 Rating</div>
                    <div className="text-[11px] text-slate-500">Google Verified Reviews</div>
                </div>
            </div>

            {/* Floating Badge 2: Diagnostic Badge */}
            <div className="absolute bottom-12 -right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 hidden sm:flex">
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