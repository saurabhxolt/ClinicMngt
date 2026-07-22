import Container from "../common/Container";

import StatCard from "./StatCard";

import stats from "../../data/stats";

export default function Stats() {

    return (

        <section className="py-24">

            <Container>

                <div
                    className="
                    grid
                    gap-8
                    md:grid-cols-2
                    lg:grid-cols-4
                    "
                >

                    {

                        stats.map(item => (

                            <StatCard

                                key={item.id}

                                value={item.value}

                                title={item.title}

                            />

                        ))

                    }

                </div>

            </Container>

        </section>

    );

}