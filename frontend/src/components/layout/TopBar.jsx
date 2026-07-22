import { FaPhoneAlt, FaWhatsapp, FaUserShield } from "react-icons/fa";
import { MdEmail, MdAccessTime } from "react-icons/md";
import { Link } from "react-router-dom";
import Container from "../common/Container";
import { useAuth } from "../../context/AuthContext";
import { useSiteConfig } from "../../context/SiteConfigContext";

export default function TopBar() {
    const { isAdminLoggedIn } = useAuth();
    const { config } = useSiteConfig();
    const clinic = config.clinic;

    return (
        <div className="bg-gradient-to-r from-slate-900 via-sky-950 to-slate-900 text-slate-200 text-xs py-2 border-b border-sky-900/40">
            <Container className="flex flex-col sm:flex-row items-center justify-between gap-2">
                <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
                    <span className="flex items-center gap-1.5 text-sky-300 font-medium">
                        <MdAccessTime className="text-sky-400 text-sm" /> Mon-Sat: 9 AM - 8:30 PM
                    </span>
                    <span className="hidden md:inline text-slate-500">|</span>
                    <a href={`tel:${clinic.phone}`} className="flex items-center gap-1.5 hover:text-white transition-colors">
                        <FaPhoneAlt className="text-teal-400 text-xs" /> {clinic.phone}
                    </a>
                    <span className="hidden md:inline text-slate-500">|</span>
                    <a href={`https://wa.me/${clinic.whatsapp.replace(/[^0-9]/g, '')}`} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors">
                        <FaWhatsapp className="text-sm" /> WhatsApp Chat
                    </a>
                </div>

                <div className="flex items-center gap-4">
                    <a href={`mailto:${clinic.email}`} className="hidden lg:flex items-center gap-1.5 hover:text-white transition-colors">
                        <MdEmail className="text-sky-400 text-sm" /> {clinic.email}
                    </a>
                    <Link
                        to="/admin"
                        className="flex items-center gap-1 px-2.5 py-0.5 rounded bg-sky-800/60 text-sky-200 hover:bg-sky-700 hover:text-white transition-all text-[11px] font-medium"
                    >
                        <FaUserShield /> {isAdminLoggedIn ? "Admin Workspace" : "Admin Login"}
                    </Link>
                </div>
            </Container>
        </div>
    );
}