import Card from "../common/Card";

export default function FeatureCard({ feature }) {

    const Icon = feature.icon;

    return (

        <Card>

            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-sky-100">

                <Icon className="text-2xl text-sky-700" />

            </div>

            <h3 className="mb-3 text-xl font-semibold">

                {feature.title}

            </h3>

            <p className="text-slate-600">

                {feature.description}

            </p>

        </Card>

    );

}