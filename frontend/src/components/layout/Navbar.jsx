import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaCalendarCheck } from "react-icons/fa";

import Container from "../common/Container";
import Button from "../common/Button";
import Logo from "./Logo";
import TopBar from "./TopBar";

import { NAVIGATION } from "../../utils/constants";

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <>
            <TopBar />

            <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-md shadow-sm">
                <Container>
                    <div className="flex h-20 items-center justify-between gap-4">
                        <Logo />

                        {/* Desktop Navigation */}
                        <nav className="hidden items-center gap-3 lg:gap-4 xl:gap-5 lg:flex">
                            {NAVIGATION.map((item) => (
                                <NavLink
                                    key={item.path}
                                    to={item.path}
                                    className={({ isActive }) =>
                                        `text-[13px] font-semibold transition-colors py-1.5 border-b-2 whitespace-nowrap ${
                                            isActive
                                                ? "border-sky-600 text-sky-700"
                                                : "border-transparent text-slate-700 hover:text-sky-600 hover:border-slate-300"
                                        }`
                                    }
                                >
                                    {item.title}
                                </NavLink>
                            ))}
                        </nav>

                        {/* Right CTAs */}
                        <div className="hidden lg:flex items-center gap-3 shrink-0">
                            <Link to="/appointment">
                                <Button className="flex items-center gap-2 bg-gradient-to-r from-sky-600 to-teal-600 text-white font-semibold text-xs px-4 py-2.5 rounded-xl shadow-md shadow-sky-600/20 hover:shadow-lg hover:shadow-sky-600/30 transition-all">
                                    <FaCalendarCheck className="text-xs" /> Book Appointment
                                </Button>
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="lg:hidden p-2.5 text-slate-700 hover:text-sky-700 hover:bg-slate-100 rounded-lg transition-colors"
                            aria-label="Toggle menu"
                        >
                            {mobileMenuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
                        </button>
                    </div>
                </Container>

                {/* Mobile Drawer Menu */}
                {mobileMenuOpen && (
                    <div className="lg:hidden border-t border-slate-100 bg-white px-4 pt-3 pb-6 shadow-xl space-y-3">
                        <div className="flex flex-col space-y-1">
                            {NAVIGATION.map((item) => (
                                <NavLink
                                    key={item.path}
                                    to={item.path}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={({ isActive }) =>
                                        `px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                                            isActive
                                                ? "bg-sky-50 text-sky-700"
                                                : "text-slate-700 hover:bg-slate-50 hover:text-sky-600"
                                        }`
                                    }
                                >
                                    {item.title}
                                </NavLink>
                            ))}
                        </div>
                        <div className="pt-2 border-t border-slate-100">
                            <Link to="/appointment" onClick={() => setMobileMenuOpen(false)}>
                                <Button className="w-full justify-center flex items-center gap-2 bg-gradient-to-r from-sky-600 to-teal-600 text-white font-semibold py-3 rounded-xl shadow-md">
                                    <FaCalendarCheck /> Book Appointment
                                </Button>
                            </Link>
                        </div>
                    </div>
                )}
            </header>
        </>
    );
}