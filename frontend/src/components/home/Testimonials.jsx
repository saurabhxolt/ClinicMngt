import { FaStar, FaQuoteLeft, FaCheckCircle } from "react-icons/fa";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import { useSiteConfig } from "../../context/SiteConfigContext";

export default function Testimonials() {
    const { config } = useSiteConfig();
    const testimonials = config.testimonials;

    return (
        <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-0 right-0 h-96 w-96 bg-sky-600/10 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 left-0 h-96 w-96 bg-teal-600/10 rounded-full filter blur-3xl"></div>

            <Container className="relative z-10">
                <SectionTitle
                    title="What Our Patients Say"
                    subtitle="Real stories of skin transformation and trusted diagnostic care."
                    className="text-white"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                    {testimonials.map((item) => (
                        <div
                            key={item.id}
                            className="bg-slate-800/80 backdrop-blur-sm border border-slate-700/80 p-6 rounded-2xl flex flex-col justify-between hover:border-sky-500/50 transition-all shadow-lg"
                        >
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <div className="flex text-amber-400 gap-1 text-sm">
                                        {[...Array(item.rating)].map((_, i) => (
                                            <FaStar key={i} />
                                        ))}
                                    </div>
                                    <FaQuoteLeft className="text-slate-600 text-2xl" />
                                </div>

                                <p className="text-xs text-slate-300 leading-relaxed italic">
                                    "{item.review}"
                                </p>
                            </div>

                            <div className="mt-6 pt-4 border-t border-slate-700/60 flex items-center gap-3">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="h-10 w-10 rounded-full object-cover border-2 border-sky-500"
                                />
                                <div>
                                    <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                                        {item.name}
                                        {item.verified && (
                                            <FaCheckCircle className="text-emerald-400 text-xs" title="Verified Patient" />
                                        )}
                                    </h4>
                                    <p className="text-[11px] text-sky-400 font-medium">{item.treatment}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
