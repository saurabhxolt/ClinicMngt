import { useState } from "react";
import { useLocation } from "react-router-dom";
import Container from "@/components/common/Container";
import { useSiteConfig } from "@/context/SiteConfigContext";
import { FaSearch, FaUser, FaClock, FaTimes, FaShareAlt } from "react-icons/fa";

export default function Blogs() {
    const location = useLocation();
    const { config } = useSiteConfig();
    const blogs = config.blogs;

    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");

    const [activeBlog, setActiveBlog] = useState(() => {
        if (location.state?.selectedBlogId) {
            return blogs.find(b => b.id === location.state.selectedBlogId) || null;
        }
        return null;
    });

    const categories = ["All", "Skin Diseases", "Hair Care", "Radiology", "Cosmetic Procedures"];

    const filteredBlogs = blogs.filter((blog) => {
        const matchesCategory = selectedCategory === "All" || blog.category === selectedCategory;
        const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            blog.summary.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="py-12 bg-slate-50 min-h-screen">
            <Container>
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
                    <span className="bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full">
                        Dermatology & Radiology Knowledge Hub
                    </span>
                    <h1 className="text-4xl font-extrabold text-slate-900">
                        Medical Blogs & Health Articles
                    </h1>
                    <p className="text-slate-600 text-sm">
                        Verified dermatological insights, skin care routines, and diagnostic scan preparations written by our doctors.
                    </p>
                </div>

                {/* Filter & Search Bar */}
                <div className="bg-white p-4 sm:p-6 rounded-3xl border border-slate-200/80 shadow-md mb-10 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="relative w-full md:w-96">
                        <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Search medical articles..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-11 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-600"
                        />
                    </div>

                    <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 ${
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

                {/* Articles Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredBlogs.map((blog) => (
                        <div
                            key={blog.id}
                            onClick={() => setActiveBlog(blog)}
                            className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between group"
                        >
                            <div>
                                <div className="relative h-52 overflow-hidden">
                                    <img
                                        src={blog.image}
                                        alt={blog.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <span className="absolute top-3 left-3 bg-sky-900/90 text-white text-[11px] font-bold px-3 py-1 rounded-full backdrop-blur-sm">
                                        {blog.category}
                                    </span>
                                </div>

                                <div className="p-6 space-y-3">
                                    <div className="flex items-center gap-4 text-xs text-slate-500">
                                        <span className="flex items-center gap-1"><FaUser className="text-sky-600" /> {blog.author}</span>
                                        <span className="flex items-center gap-1"><FaClock className="text-sky-600" /> {blog.readTime}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-sky-700 transition-colors leading-snug">
                                        {blog.title}
                                    </h3>
                                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                                        {blog.summary}
                                    </p>
                                </div>
                            </div>

                            <div className="p-6 pt-0 flex items-center justify-between text-xs text-sky-700 font-bold border-t border-slate-100 mt-4">
                                <span>Read Article →</span>
                                <span className="text-slate-400 font-normal">{blog.date}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Article Reader Modal */}
                {activeBlog && (
                    <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
                        <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative border border-slate-200 p-6 sm:p-10 space-y-6">
                            <button
                                onClick={() => setActiveBlog(null)}
                                className="absolute top-6 right-6 h-10 w-10 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-full flex items-center justify-center text-lg transition-colors"
                            >
                                <FaTimes />
                            </button>

                            <div className="space-y-3">
                                <span className="bg-sky-100 text-sky-800 text-xs font-bold px-3 py-1 rounded-full">
                                    {activeBlog.category}
                                </span>
                                <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
                                    {activeBlog.title}
                                </h2>
                                <div className="flex items-center gap-4 text-xs text-slate-500 pt-2 border-b border-slate-100 pb-4">
                                    <span>By <strong>{activeBlog.author}</strong></span>
                                    <span>•</span>
                                    <span>{activeBlog.date}</span>
                                    <span>•</span>
                                    <span>{activeBlog.readTime}</span>
                                </div>
                            </div>

                            <img
                                src={activeBlog.image}
                                alt={activeBlog.title}
                                className="w-full h-64 sm:h-80 object-cover rounded-2xl shadow-md"
                            />

                            <div className="prose prose-slate max-w-none text-slate-700 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                                {activeBlog.content}
                            </div>

                            <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                                <button
                                    onClick={() => {
                                        navigator.clipboard.writeText(window.location.href);
                                        alert("Article link copied to clipboard!");
                                    }}
                                    className="flex items-center gap-2 text-xs font-bold text-sky-700 bg-sky-50 px-4 py-2 rounded-xl"
                                >
                                    <FaShareAlt /> Share Article
                                </button>
                                <button
                                    onClick={() => setActiveBlog(null)}
                                    className="bg-slate-900 text-white font-bold px-6 py-2 rounded-xl text-xs"
                                >
                                    Close Reader
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </Container>
        </div>
    );
}