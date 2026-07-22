import { Link } from "react-router-dom";
import { FaUserMd } from "react-icons/fa";

export default function Logo() {
    return (
        <Link to="/" className="flex items-center gap-3 group">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-tr from-teal-600 via-sky-600 to-indigo-600 text-white shadow-md shadow-sky-500/20 group-hover:scale-105 transition-transform shrink-0">
                <FaUserMd className="text-xl" />
            </div>
            <div className="flex flex-col">
                <span className="text-base sm:text-lg font-extrabold tracking-tight text-slate-900 group-hover:text-sky-700 transition-colors leading-tight">
                    Vandana Diagnostic <span className="text-sky-600">&</span>
                </span>
                <span className="text-xs font-bold text-sky-700 tracking-wide">
                    Dr. Richa Skin Clinic
                </span>
            </div>
        </Link>
    );
}