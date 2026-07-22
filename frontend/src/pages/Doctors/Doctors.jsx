import { useState } from "react";
import Container from "@/components/common/Container";
import DoctorCard from "@/components/home/Doctors/DoctorCard";
import { useSiteConfig } from "@/context/SiteConfigContext";

export default function Doctors() {
    const { config } = useSiteConfig();
    const doctorsList = config.doctors;
    const [selectedDept, setSelectedDept] = useState("All");

    const filteredDoctors = selectedDept === "All"
        ? doctorsList
        : doctorsList.filter(doc => doc.department.toLowerCase() === selectedDept.toLowerCase());

    return (
        <div className="py-12 bg-slate-50 min-h-screen">
            <Container>
                <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
                    <span className="bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full">
                        Expert Specialists
                    </span>
                    <h1 className="text-4xl font-extrabold text-slate-900">
                        Meet Our Medical Team
                    </h1>
                    <p className="text-slate-600 text-sm">
                        Consult with experienced board-certified dermatologists and radiologists committed to advanced care and patient wellbeing.
                    </p>
                </div>

                {/* Filter Tabs */}
                <div className="flex justify-center gap-3 mb-10">
                    {["All", "Dermatology", "Radiology"].map((dept) => (
                        <button
                            key={dept}
                            onClick={() => setSelectedDept(dept)}
                            className={`px-6 py-2.5 rounded-xl font-semibold text-sm transition-all ${
                                selectedDept === dept
                                    ? "bg-gradient-to-r from-sky-600 to-teal-600 text-white shadow-md shadow-sky-600/20"
                                    : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
                            }`}
                        >
                            {dept}
                        </button>
                    ))}
                </div>

                {/* Doctors Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredDoctors.map((doctor) => (
                        <DoctorCard key={doctor.id} doctor={doctor} />
                    ))}
                </div>
            </Container>
        </div>
    );
}