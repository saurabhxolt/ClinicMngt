export default function SectionTitle({

    title,

    subtitle

}) {

    return (

        <div className="mb-12 text-center">

            <h2 className="text-4xl font-bold">

                {title}

            </h2>

            <p className="mt-4 text-slate-500">

                {subtitle}

            </p>

        </div>

    );

}