import Container from "../../common/Container";
import SectionTitle from "../../common/SectionTitle";
import DoctorCard from "./DoctorCard";
import { useSiteConfig } from "../../../context/SiteConfigContext";

export default function DoctorsPreview() {
    const { config } = useSiteConfig();
    const doctors = config.doctors;

    return (
        <section className="bg-slate-50 py-24">
            <Container>
                <SectionTitle
                    title="Meet Our Specialists"
                    subtitle="Experienced doctors providing quality healthcare."
                />

                <div className="grid gap-10 md:grid-cols-2">
                    {doctors.map(doctor => (
                        <DoctorCard key={doctor.id} doctor={doctor} />
                    ))}
                </div>
            </Container>
        </section>
    );
}