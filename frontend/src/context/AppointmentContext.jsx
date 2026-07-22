/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect } from 'react';

const AppointmentContext = createContext();

const initialAppointments = [
    {
        id: "APT-8821",
        patientName: "Rahul Sharma",
        patientPhone: "9876543210",
        patientEmail: "rahul.sharma@example.com",
        age: 32,
        gender: "Male",
        department: "Dermatology",
        doctor: "Dr. Richa Rokade",
        service: "Acne & Acne Scar Treatment",
        date: "2026-07-25",
        timeSlot: "10:30 AM",
        notes: "Consultation regarding acne marks on cheeks.",
        status: "Confirmed",
        createdAt: "2026-07-20T10:00:00Z"
    },
    {
        id: "APT-8822",
        patientName: "Priyanka Deshmukh",
        patientPhone: "9898989898",
        patientEmail: "priyanka@example.com",
        age: 27,
        gender: "Female",
        department: "Dermatology",
        doctor: "Dr. Ananya Deshmukh",
        service: "PRP Hair Loss Therapy",
        date: "2026-07-26",
        timeSlot: "11:30 AM",
        notes: "First session of PRP scalp therapy.",
        status: "Pending",
        createdAt: "2026-07-21T14:20:00Z"
    },
    {
        id: "APT-8823",
        patientName: "Sanjay Patel",
        patientPhone: "9123456789",
        patientEmail: "sanjay.p@example.com",
        age: 48,
        gender: "Male",
        department: "Radiology",
        doctor: "Dr. Sagar Bijwe",
        service: "Abdominal & Pelvic Ultrasound",
        date: "2026-07-24",
        timeSlot: "09:30 AM",
        notes: "Routine abdominal scan.",
        status: "Completed",
        createdAt: "2026-07-19T09:15:00Z"
    }
];

export function AppointmentProvider({ children }) {
    const [appointments, setAppointments] = useState(() => {
        const saved = localStorage.getItem('clinic_appointments');
        if (saved) {
            try {
                return JSON.parse(saved);
            } catch (e) {
                console.error("Failed to parse saved appointments", e);
            }
        }
        return initialAppointments;
    });

    useEffect(() => {
        localStorage.setItem('clinic_appointments', JSON.stringify(appointments));
    }, [appointments]);

    const createAppointment = (bookingData) => {
        const randomNum = Math.floor(1000 + Math.random() * 9000);
        const newBooking = {
            id: `APT-${randomNum}`,
            ...bookingData,
            status: "Pending",
            createdAt: new Date().toISOString()
        };
        setAppointments(prev => [newBooking, ...prev]);
        return newBooking;
    };

    const updateAppointmentStatus = (id, newStatus) => {
        setAppointments(prev =>
            prev.map(apt => apt.id === id ? { ...apt, status: newStatus } : apt)
        );
    };

    const getAppointmentsByPhoneOrId = (query) => {
        if (!query) return [];
        const cleanQuery = query.trim().toLowerCase();
        return appointments.filter(apt =>
            apt.id.toLowerCase().includes(cleanQuery) ||
            apt.patientPhone.includes(cleanQuery)
        );
    };

    return (
        <AppointmentContext.Provider value={{
            appointments,
            createAppointment,
            updateAppointmentStatus,
            getAppointmentsByPhoneOrId
        }}>
            {children}
        </AppointmentContext.Provider>
    );
}

export function useAppointment() {
    const context = useContext(AppointmentContext);
    if (!context) {
        throw new Error("useAppointment must be used within an AppointmentProvider");
    }
    return context;
}
