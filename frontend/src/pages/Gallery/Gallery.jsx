import { useState } from "react";
import Container from "@/components/common/Container";
import galleryItems from "@/data/gallery";
import { FaTimes, FaExpand } from "react-icons/fa";

export default function Gallery() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [lightboxItem, setLightboxItem] = useState(null);

    const categories = ["All", "Clinic", "Equipment", "Doctors"];

    const filteredItems = selectedCategory === "All"
        ? galleryItems
        : galleryItems.filter(item => item.category === selectedCategory);

    return (
        <div className="py-12 bg-slate-50 min-h-screen">
            <Container>
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
                    <span className="bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full">
                        Clinic Showcase
                    </span>
                    <h1 className="text-4xl font-extrabold text-slate-900">
                        Facility & Infrastructure Gallery
                    </h1>
                    <p className="text-slate-600 text-sm">
                        Take a virtual tour of our sterile procedure suites, state-of-the-art diagnostic radiology equipment, and executive patient lounge.
                    </p>
                </div>

                {/* Category Filter */}
                <div className="flex justify-center gap-3 mb-10 flex-wrap">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`px-6 py-2.5 rounded-xl font-bold text-xs transition-all ${
                                selectedCategory === cat
                                    ? "bg-sky-700 text-white shadow-md shadow-sky-700/20"
                                    : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredItems.map((item) => (
                        <div
                            key={item.id}
                            onClick={() => setLightboxItem(item)}
                            className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-xl transition-all cursor-pointer group relative"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <div className="h-12 w-12 rounded-full bg-white/90 text-slate-900 flex items-center justify-center text-xl shadow-lg">
                                        <FaExpand />
                                    </div>
                                </div>
                                <span className="absolute top-3 left-3 bg-sky-900/90 text-white text-[11px] font-bold px-3 py-1 rounded-full backdrop-blur-sm">
                                    {item.category}
                                </span>
                            </div>

                            <div className="p-5 space-y-1">
                                <h3 className="text-base font-bold text-slate-900 group-hover:text-sky-700 transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-xs text-slate-500">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Lightbox Modal */}
                {lightboxItem && (
                    <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4">
                        <div className="relative max-w-4xl w-full bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-800">
                            <button
                                onClick={() => setLightboxItem(null)}
                                className="absolute top-4 right-4 z-10 h-10 w-10 bg-black/60 hover:bg-black text-white rounded-full flex items-center justify-center text-lg transition-colors"
                            >
                                <FaTimes />
                            </button>

                            <img
                                src={lightboxItem.image}
                                alt={lightboxItem.title}
                                className="w-full h-[60vh] object-cover"
                            />

                            <div className="p-6 text-white space-y-2">
                                <span className="text-xs font-bold text-sky-400 uppercase tracking-wider">
                                    {lightboxItem.category}
                                </span>
                                <h3 className="text-xl font-bold">{lightboxItem.title}</h3>
                                <p className="text-xs text-slate-300">{lightboxItem.description}</p>
                            </div>
                        </div>
                    </div>
                )}
            </Container>
        </div>
    );
}
