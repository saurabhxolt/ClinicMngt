import Card from "../common/Card";

export default function ServiceCard({ service }) {

    const Icon = service.icon;

    return (
        <Card>

            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-sky-100">

                <Icon className="text-3xl text-sky-700" />

            </div>

            <h3 className="mb-3 text-2xl font-semibold">

                {service.title}

            </h3>

            <p className="mb-6 text-slate-600">

                {service.description}

            </p>

            <button className="font-semibold text-sky-700">

                Learn More →

            </button>

        </Card>
    );
}