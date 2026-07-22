export default function HeroStatsCard({
    number,
    title
}) {
    return (
        <div className="rounded-xl bg-white p-4 shadow-lg">
            <h3 className="text-2xl font-bold text-sky-600">
                {number}
            </h3>

            <p className="text-sm text-slate-600">
                {title}
            </p>
        </div>
    );
}