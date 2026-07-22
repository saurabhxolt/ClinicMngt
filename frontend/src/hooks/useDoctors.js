import { useEffect, useState } from "react";
import { getDoctors } from "@/services/doctorService";

export default function useDoctors() {
    const [doctors, setDoctors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        loadDoctors();
    }, []);

    async function loadDoctors() {
        try {
            setLoading(true);

            const response = await getDoctors();

            setDoctors(response);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    }

    return {
        doctors,
        loading,
        error,
        refresh: loadDoctors,
    };
}