import { useState } from "react";
import Container from "@/components/common/Container";
import { useSiteConfig } from "@/context/SiteConfigContext";
import { FaSearch, FaCalendarCheck, FaArrowRight, FaHospital } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Services() {
    const { config } = useSiteConfig();
    const services = config.services;

    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredServices = services.filter((srv) => {
        const matchesCat = selectedCategory === "All" || srv.category === selectedCategory;
        const matchesSearch = srv.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            srv.shortDesc.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCat && matchesSearch;
    });

    return (
        <div className="py-12 bg-slate-50 min-h-screen">
            <Container>
                <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
                    <span className="bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full">
                        Comprehensive Care
                    </span>
                    <h1 className="text-4xl font-extrabold text-slate-900">
                        Our Clinical & Diagnostic Services
                    </h1>
                    <p className="text-slate-600 text-sm">
                        Explore our complete range of specialized dermatological treatments and non-invasive radiology scans.
                    </p>
                </div>

                {/* Search & Category Filter Bar */}
                <div className="bg-white p-4 sm:p-6 rounded-3xl border border-slate-200/80 shadow-md mb-10 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="relative w-full md:w-96">
                        <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Search treatments or scans..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-11 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-600"
                        />
                    </div>

                    <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
                        {["All", "Dermatology", "Radiology"].map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-5 py-2 rounded-xl text-xs font-bold transition-all shrink-0 ${
                                    selectedCategory === cat
                                        ? "bg-sky-700 text-white shadow-md"
                                        : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredServices.map((srv) => {
                        const IconComp = srv.icon || FaHospital;
                        const targetPath = srv.category === "Dermatology" ? "/dermatology" : "/radiology";
                        return (
                            <div
                                key={srv.id}
                                className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group"
                            >
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <div className="h-12 w-12 rounded-2xl bg-sky-50 text-sky-700 flex items-center justify-center font-bold text-xl group-hover:bg-sky-600 group-hover:text-white transition-colors">
                                            <IconComp />
                                        </div>
                                        <span className={`text-[11px] font-bold px-3 py-0.5 rounded-full ${
                                            srv.category === "Dermatology" ? "bg-teal-50 text-teal-700" : "bg-indigo-50 text-indigo-700"
                                        }`}>
                                            {srv.category}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-sky-700 transition-colors">
                                        {srv.title}
                                    </h3>
                                    <p className="text-xs text-slate-600 leading-relaxed">
                                        {srv.shortDesc}
                                    </p>
                                </div>

                                <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                                    <Link
                                        to={targetPath}
                                        className="text-xs font-bold text-sky-700 hover:text-sky-900 flex items-center gap-1"
                                    >
                                        Learn More <FaArrowRight className="text-[10px]" />
                                    </Link>
                                    <Link to="/appointment" state={{ service: srv.title, department: srv.category }}>
                                        <button className="flex items-center gap-1.5 bg-slate-900 hover:bg-sky-700 text-white text-xs font-semibold px-4 py-2 rounded-xl transition-colors">
                                            <FaCalendarCheck /> Book
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </Container>
        </div>
    );
}
