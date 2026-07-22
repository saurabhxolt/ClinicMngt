import Hero from "@/components/home/hero/Hero";
import Stats from "@/components/home/Stats";
import Services from "@/components/home/services/Services";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import DoctorsPreview from "@/components/home/Doctors/DoctorsPreview";
import Testimonials from "@/components/home/Testimonials";
import BlogsPreview from "@/components/home/BlogsPreview";
import ContactCTA from "@/components/home/ContactCTA";

export default function Home() {
    return (
        <>
            <Hero />
            <Stats />
            <Services />
            <WhyChooseUs />
            <DoctorsPreview />
            <Testimonials />
            <BlogsPreview />
            <ContactCTA />
        </>
    );
}