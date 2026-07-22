import { useState } from "react";
import Container from "@/components/common/Container";
import { useSiteConfig } from "@/context/SiteConfigContext";
import { FaChevronDown, FaSearch, FaQuestionCircle } from "react-icons/fa";

export default function FAQPage() {
    const { config } = useSiteConfig();
    const faqs = config.faqs;

    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [openFaqId, setOpenFaqId] = useState(1);

    const categories = ["All", "Clinic Timings & Booking", "Report Collection", "Radiology Preparation", "Dermatology Care", "Payment & Insurance"];

    const filteredFaqs = faqs.filter(faq => {
        const matchesCategory = selectedCategory === "All" || faq.category === selectedCategory;
        const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
            faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="py-12 bg-slate-50 min-h-screen">
            <Container>
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
                    <span className="bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full">
                        Patient Help Center
                    </span>
                    <h1 className="text-4xl font-extrabold text-slate-900">
                        Frequently Asked Questions
                    </h1>
                    <p className="text-slate-600 text-sm">
                        Find clear answers regarding appointment process, diagnostic scan fasting instructions, and dermatological consultation fees.
                    </p>
                </div>

                {/* Search & Category filter */}
                <div className="bg-white p-4 sm:p-6 rounded-3xl border border-slate-200/80 shadow-md mb-10 space-y-4">
                    <div className="relative max-w-xl mx-auto">
                        <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Type any question or keyword..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-600"
                        />
                    </div>

                    <div className="flex gap-2 justify-center flex-wrap">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
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

                {/* FAQ Accordion List */}
                <div className="max-w-3xl mx-auto space-y-4">
                    {filteredFaqs.map((faq) => {
                        const isOpen = openFaqId === faq.id;
                        return (
                            <div
                                key={faq.id}
                                className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden transition-all"
                            >
                                <button
                                    onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                                    className="w-full flex items-center justify-between p-5 text-left font-bold text-slate-900 text-sm sm:text-base hover:text-sky-700 transition-colors"
                                >
                                    <div className="flex items-center gap-3 pr-4">
                                        <FaQuestionCircle className="text-sky-600 shrink-0" />
                                        <span>{faq.question}</span>
                                    </div>
                                    <FaChevronDown className={`text-slate-400 text-xs transition-transform duration-300 ${isOpen ? "rotate-180 text-sky-600" : ""}`} />
                                </button>

                                {isOpen && (
                                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 border-t border-slate-100 leading-relaxed bg-slate-50/50">
                                        <span className="text-sky-800 font-bold block mb-1">Category: {faq.category}</span>
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </Container>
        </div>
    );
}
