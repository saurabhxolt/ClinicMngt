import { Link } from "react-router-dom";
import { FaClock, FaUser, FaArrowRight } from "react-icons/fa";
import Container from "../common/Container";
import { useSiteConfig } from "../../context/SiteConfigContext";

export default function BlogsPreview() {
    const { config } = useSiteConfig();
    const blogs = config.blogs;

    return (
        <section className="py-20 bg-slate-50">
            <Container>
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
                    <div>
                        <span className="text-xs font-bold text-sky-700 uppercase tracking-widest bg-sky-100 px-3 py-1 rounded-md">
                            Medical Insights
                        </span>
                        <h2 className="text-3xl font-extrabold text-slate-900 mt-2">
                            Latest Health & Beauty Articles
                        </h2>
                    </div>
                    <Link to="/blogs" className="inline-flex items-center gap-2 text-sm font-bold text-sky-700 hover:text-sky-800 transition-colors">
                        View All Articles <FaArrowRight />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {blogs.slice(0, 3).map((blog) => (
                        <div
                            key={blog.id}
                            className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-xl transition-all flex flex-col justify-between group"
                        >
                            <div>
                                <div className="relative h-48 overflow-hidden">
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
                                        <span className="flex items-center gap-1">
                                            <FaUser className="text-sky-600" /> {blog.author}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <FaClock className="text-sky-600" /> {blog.readTime}
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-sky-700 transition-colors leading-snug line-clamp-2">
                                        {blog.title}
                                    </h3>
                                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                                        {blog.summary}
                                    </p>
                                </div>
                            </div>
                            <div className="p-6 pt-0">
                                <Link
                                    to="/blogs"
                                    state={{ selectedBlogId: blog.id }}
                                    className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-700 hover:text-sky-900"
                                >
                                    Read Full Article <FaArrowRight className="text-[10px]" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
