import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";

import FeatureCard from "./FeatureCard";

import features from "../../data/features";

export default function WhyChooseUs() {

    return (

        <section className="py-24">

            <Container>

                <SectionTitle

                    title="Why Choose Us"

                    subtitle="Providing high-quality dermatology and diagnostic imaging services."

                />

                <div
                    className="
                    grid
                    gap-8
                    md:grid-cols-2
                    lg:grid-cols-3
                    "
                >

                    {

                        features.map(feature => (

                            <FeatureCard

                                key={feature.id}

                                feature={feature}

                            />

                        ))

                    }

                </div>

            </Container>

        </section>

    );

}