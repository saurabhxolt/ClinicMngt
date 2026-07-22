import Container from "../../common/Container";
import SectionTitle from "../../common/SectionTitle";

import ServiceCard from "../../services/ServiceCard";

import services from "../../../data/services";

export default function Services() {

    return (

        <section className="bg-slate-50 py-24">

            <Container>

                <SectionTitle

                    title="Our Services"

                    subtitle="Comprehensive skin care and diagnostic imaging under one roof."

                />

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

                    {services.map(service => (

                        <ServiceCard

                            key={service.id}

                            service={service}

                        />

                    ))}

                </div>

            </Container>

        </section>

    );

}