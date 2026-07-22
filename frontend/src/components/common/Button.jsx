export default function Button({
    children,
    variant = "primary",
    className = "",
    ...props
}) {

    const styles = {
        primary:
            "bg-sky-600 hover:bg-sky-700 text-white",

        secondary:
            "bg-white border border-sky-600 text-sky-700 hover:bg-sky-50"
    };

    return (

        <button

            {...props}

            className={`
                rounded-xl
                px-6
                py-3
                font-semibold
                transition-all
                duration-300
                ${styles[variant]}
                ${className}
            `}
        >

            {children}

        </button>

    );

}