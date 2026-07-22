export default function Card({
    children,
    className = "",
    onClick,
}) {
    return (
        <div
            onClick={onClick}
            className={`
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-6
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-lg
                ${className}
            `}
        >
            {children}
        </div>
    );
}