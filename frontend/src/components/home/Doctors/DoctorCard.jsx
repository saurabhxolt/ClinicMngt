import { Link } from "react-router-dom";
import { FaStar, FaClock, FaCheckCircle, FaCalendarCheck } from "react-icons/fa";

export default function DoctorCard({ doctor }) {
    return (
        <div className="bg-white rounded-3xl p-6 shadow-md hover:shadow-xl border border-slate-100 transition-all flex flex-col justify-between group">
            <div>
                <div className="relative mb-6 text-center">
                    <img
                        src={doctor.image}
                        alt={doctor.name}
                        className="mx-auto h-40 w-40 rounded-full object-cover object-top border-4 border-sky-100 shadow-md group-hover:scale-105 transition-transform"
                    />
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 bg-sky-900 text-white text-[11px] font-bold px-3 py-0.5 rounded-full shadow-sm">
                        {doctor.department}
                    </span>
                </div>

                <div className="text-center space-y-2">
                    <div className="flex items-center justify-center gap-1 text-amber-500 text-xs font-bold">
                        <FaStar /> {doctor.rating} ({doctor.reviewsCount} reviews)
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                        {doctor.name}
                    </h3>
                    <p className="text-xs font-semibold text-sky-700 bg-sky-50 py-1 px-3 rounded-lg inline-block">
                        {doctor.qualification}
                    </p>
                    <p className="text-xs text-slate-600 font-medium line-clamp-2">
                        {doctor.title}
                    </p>
                </div>

                <div className="mt-5 space-y-2 pt-4 border-t border-slate-100 text-xs text-slate-600">
                    <div className="flex items-center gap-2">
                        <FaCheckCircle className="text-teal-500 shrink-0" />
                        <span><strong>Experience:</strong> {doctor.experience}</span>
                    </div>
                    <div className="flex items-start gap-2">
                        <FaClock className="text-sky-500 shrink-0 mt-0.5" />
                        <span><strong>OPD Timings:</strong> {doctor.timings}</span>
                    </div>
                </div>

                {/* Specialization Tags */}
                {doctor.specializations && doctor.specializations.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-1.5 justify-center">
                        {doctor.specializations.slice(0, 3).map((spec, idx) => (
                            <span key={idx} className="bg-slate-100 text-slate-700 text-[10px] font-medium px-2.5 py-0.5 rounded-full">
                                {spec}
                            </span>
                        ))}
                    </div>
                )}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100">
                <Link to="/appointment" state={{ selectedDoctor: doctor.name, department: doctor.department }}>
                    <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-sky-600 to-teal-600 hover:from-sky-700 hover:to-teal-700 text-white font-bold py-3 rounded-xl shadow-md transition-all text-sm">
                        <FaCalendarCheck /> Book Consultation ({doctor.consultationFee})
                    </button>
                </Link>
            </div>
        </div>
    );
}