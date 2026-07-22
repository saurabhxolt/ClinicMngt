import api from "./api";
import doctors from "@/data/doctors";

const USE_MOCK_DATA = true;

/**
 * Get all doctors
 */
export async function getDoctors() {
    if (USE_MOCK_DATA) {
        return doctors;
    }

    const response = await api.get("/doctors");
    return response.data;
}

/**
 * Get doctor by id
 */
export async function getDoctorById(id) {
    if (USE_MOCK_DATA) {
        return doctors.find((doctor) => doctor.id === Number(id));
    }

    const response = await api.get(`/doctors/${id}`);
    return response.data;
}
