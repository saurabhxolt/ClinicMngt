import Container from "../../common/Container";

import HeroContent from "./HeroContent";

import HeroImage from "./HeroImage";

export default function Hero() {

    return (

        <section className="overflow-hidden bg-gradient-to-br from-sky-50 via-white to-cyan-50 py-24">

            <Container>

                <div className="grid items-center gap-20 lg:grid-cols-2">

                    <HeroContent />

                    <HeroImage />

                </div>

            </Container>

        </section>

    );

}