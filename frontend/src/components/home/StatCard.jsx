export default function StatCard({

    value,

    title

}) {

    return (

        <div
            className="
            rounded-2xl
            bg-white
            p-8
            text-center
            shadow
            hover:-translate-y-2
            transition
            duration-300
            "
        >

            <h2
                className="
                text-5xl
                font-bold
                text-sky-600
                "
            >
                {value}
            </h2>

            <p
                className="mt-2 text-slate-500"
            >
                {title}
            </p>

        </div>

    );

}
