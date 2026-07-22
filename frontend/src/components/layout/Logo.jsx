import { Link } from "react-router-dom";
import { FaUserMd } from "react-icons/fa";

export default function Logo() {
    return (
        <Link to="/" className="flex items-center gap-2.5 group shrink-0">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-teal-600 via-sky-600 to-indigo-600 text-white shadow-md shadow-sky-500/20 group-hover:scale-105 transition-transform shrink-0">
                <FaUserMd className="text-lg" />
            </div>
            <div className="flex flex-col leading-tight">
                <span className="text-xs sm:text-sm font-extrabold text-slate-900 tracking-tight group-hover:text-sky-700 transition-colors">
                    Vandana Diagnostic
                </span>
                <span className="text-[11px] font-bold text-sky-700 tracking-tight">
                    & Dr. Richa Skin Clinic
                </span>
            </div>
        </Link>
    );
}