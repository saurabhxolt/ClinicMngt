import { Link } from "react-router-dom";
import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaUserMd, FaChevronRight } from "react-icons/fa";
import Container from "../common/Container";
import { NAVIGATION } from "../../utils/constants";
import { useSiteConfig } from "../../context/SiteConfigContext";

export default function Footer() {
    const { config } = useSiteConfig();
    const clinic = config.clinic;

    return (
        <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-slate-800">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800/80">
                    {/* Col 1: Brand Info */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-teal-500 to-sky-600 text-white font-bold">
                                <FaUserMd className="text-lg" />
                            </div>
                            <span className="text-xl font-bold tracking-tight text-white">
                                {clinic.name || "Skin & Imaging Clinic"}
                            </span>
                        </div>
                        <p className="text-xs leading-relaxed text-slate-400">
                            {clinic.taglineSub || clinic.tagline}
                        </p>
                        <div className="pt-2 text-xs text-slate-400 space-y-1.5">
                            <p className="font-semibold text-slate-200">OPD Timings:</p>
                            <p>Mon - Sat: 9:00 AM - 2:00 PM & 4:30 PM - 8:30 PM</p>
                            <p className="text-amber-400">Sunday: Closed</p>
                        </div>
                    </div>

                    {/* Col 2: Quick Links */}
                    <div>
                        <h4 className="text-sm font-bold tracking-wider text-white uppercase mb-4 border-l-2 border-sky-500 pl-2.5">
                            Quick Links
                        </h4>
                        <ul className="space-y-2 text-xs">
                            {NAVIGATION.map((item) => (
                                <li key={item.path}>
                                    <Link to={item.path} className="hover:text-sky-400 flex items-center gap-1.5 transition-colors">
                                        <FaChevronRight className="text-[10px] text-sky-500" /> {item.title}
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <Link to="/admin" className="hover:text-amber-400 flex items-center gap-1.5 text-slate-400 transition-colors">
                                    <FaChevronRight className="text-[10px] text-amber-500" /> Admin Content Workspace
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Col 3: Services Offered */}
                    <div>
                        <h4 className="text-sm font-bold tracking-wider text-white uppercase mb-4 border-l-2 border-teal-500 pl-2.5">
                            Key Treatments
                        </h4>
                        <ul className="space-y-2 text-xs text-slate-400">
                            <li><Link to="/dermatology" className="hover:text-teal-300">Acne Scar & Laser Resurfacing</Link></li>
                            <li><Link to="/dermatology" className="hover:text-teal-300">PRP Hair Growth Therapy</Link></li>
                            <li><Link to="/dermatology" className="hover:text-teal-300">Chemical Peels & Glowing Skin</Link></li>
                            <li><Link to="/radiology" className="hover:text-teal-300">Digital X-Ray (Ultra-Low Radiation)</Link></li>
                            <li><Link to="/radiology" className="hover:text-teal-300">High-Resolution Ultrasound Scan</Link></li>
                            <li><Link to="/radiology" className="hover:text-teal-300">Color Doppler Vascular Imaging</Link></li>
                        </ul>
                    </div>

                    {/* Col 4: Contact Information */}
                    <div>
                        <h4 className="text-sm font-bold tracking-wider text-white uppercase mb-4 border-l-2 border-sky-500 pl-2.5">
                            Reach Us
                        </h4>
                        <div className="space-y-3 text-xs text-slate-400">
                            <div className="flex items-start gap-2.5">
                                <FaMapMarkerAlt className="text-sky-400 text-sm shrink-0 mt-0.5" />
                                <span>{clinic.address}</span>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <FaPhoneAlt className="text-teal-400 shrink-0" />
                                <a href={`tel:${clinic.phone}`} className="hover:text-white">{clinic.phone}</a>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <FaWhatsapp className="text-emerald-400 text-sm shrink-0" />
                                <a href={`https://wa.me/${clinic.whatsapp.replace(/[^0-9]/g, '')}`} target="_blank" rel="noreferrer" className="hover:text-emerald-300">
                                    WhatsApp: {clinic.whatsapp}
                                </a>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <FaEnvelope className="text-sky-400 shrink-0" />
                                <a href={`mailto:${clinic.email}`} className="hover:text-white">{clinic.email}</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
                    <p>© {new Date().getFullYear()} {clinic.name}. All Rights Reserved.</p>
                    <div className="flex items-center gap-6">
                        <Link to="/faq" className="hover:text-slate-300">FAQs</Link>
                        <Link to="/contact" className="hover:text-slate-300">Emergency Contact</Link>
                        <Link to="/admin" className="hover:text-slate-300">Content Admin Portal</Link>
                    </div>
                </div>
            </Container>
        </footer>
    );
}