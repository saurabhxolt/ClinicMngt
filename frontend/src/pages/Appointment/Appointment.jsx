import { useState } from "react";
import { useLocation } from "react-router-dom";
import Container from "@/components/common/Container";
import { useAppointment } from "@/context/AppointmentContext";
import doctors from "@/data/doctors";
import services from "@/data/services";
import { FaCalendarCheck, FaSearch, FaCheckCircle, FaPrint, FaDownload, FaFilePdf } from "react-icons/fa";

export default function Appointment() {
    const location = useLocation();
    const { createAppointment, getAppointmentsByPhoneOrId } = useAppointment();

    const [activeTab, setActiveTab] = useState("book"); // "book" | "lookup"

    // Form Step State initialized directly from navigation state if present
    const [department, setDepartment] = useState(() => location.state?.department || "Dermatology");
    const [selectedDoctor, setSelectedDoctor] = useState(() => location.state?.selectedDoctor || "");
    const [selectedService, setSelectedService] = useState(() => location.state?.service || "");
    const [date, setDate] = useState("");
    const [timeSlot, setTimeSlot] = useState("10:00 AM");
    const [patientName, setPatientName] = useState("");
    const [patientPhone, setPatientPhone] = useState("");
    const [patientEmail, setPatientEmail] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("Male");
    const [notes, setNotes] = useState("");

    // Booking Result
    const [confirmedBooking, setConfirmedBooking] = useState(null);

    // Lookup Query State
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [hasSearched, setHasSearched] = useState(false);

    // Available doctors filtered by department
    const availableDoctors = doctors.filter(doc => doc.department.toLowerCase() === department.toLowerCase());

    // Available services filtered by department
    const availableServices = services.filter(srv => srv.category.toLowerCase() === department.toLowerCase());

    const handleBookingSubmit = (e) => {
        e.preventDefault();
        const booking = createAppointment({
            patientName,
            patientPhone,
            patientEmail,
            age,
            gender,
            department,
            doctor: selectedDoctor || availableDoctors[0]?.name || "Consultant Doctor",
            service: selectedService || availableServices[0]?.title || "General OPD Consultation",
            date: date || new Date().toISOString().split('T')[0],
            timeSlot,
            notes
        });
        setConfirmedBooking(booking);
    };

    const handleLookup = (e) => {
        e.preventDefault();
        if (!searchQuery.trim()) return;
        const results = getAppointmentsByPhoneOrId(searchQuery);
        setSearchResults(results);
        setHasSearched(true);
    };

    const resetForm = () => {
        setConfirmedBooking(null);
        setPatientName("");
        setPatientPhone("");
        setPatientEmail("");
        setNotes("");
    };

    return (
        <div className="py-12 bg-slate-50 min-h-screen">
            <Container>
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
                    <span className="bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full">
                        Patient Appointment & Portal
                    </span>
                    <h1 className="text-4xl font-extrabold text-slate-900">
                        Book Appointment & Download Reports
                    </h1>
                    <p className="text-slate-600 text-sm">
                        Schedule your doctor consultation, radiology scan, or check your past appointment status.
                    </p>
                </div>

                {/* Main View Tabs */}
                <div className="flex justify-center gap-3 mb-10">
                    <button
                        onClick={() => setActiveTab("book")}
                        className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all ${
                            activeTab === "book"
                                ? "bg-gradient-to-r from-sky-600 to-teal-600 text-white shadow-lg shadow-sky-600/20"
                                : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
                        }`}
                    >
                        <FaCalendarCheck /> Book New Appointment
                    </button>
                    <button
                        onClick={() => setActiveTab("lookup")}
                        className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all ${
                            activeTab === "lookup"
                                ? "bg-gradient-to-r from-sky-600 to-teal-600 text-white shadow-lg shadow-sky-600/20"
                                : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
                        }`}
                    >
                        <FaSearch /> Patient Portal / Lookup Status
                    </button>
                </div>

                {/* TAB 1: BOOKING FORM */}
                {activeTab === "book" && (
                    <div className="max-w-4xl mx-auto">
                        {!confirmedBooking ? (
                            <form onSubmit={handleBookingSubmit} className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-xl space-y-8">
                                {/* Step 1: Department & Doctor */}
                                <div className="space-y-4">
                                    <h3 className="text-lg font-bold text-slate-900 border-l-4 border-sky-600 pl-3">
                                        1. Select Department & Doctor
                                    </h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Department</label>
                                            <select
                                                value={department}
                                                onChange={(e) => {
                                                    setDepartment(e.target.value);
                                                    setSelectedDoctor("");
                                                    setSelectedService("");
                                                }}
                                                className="w-full p-3 rounded-xl border border-slate-200 text-sm font-semibold text-slate-800 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-sky-600 focus:outline-none"
                                            >
                                                <option value="Dermatology">Dermatology (Skin, Hair, Laser)</option>
                                                <option value="Radiology">Radiology (X-Ray, Ultrasound, Doppler)</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Select Doctor</label>
                                            <select
                                                value={selectedDoctor}
                                                onChange={(e) => setSelectedDoctor(e.target.value)}
                                                className="w-full p-3 rounded-xl border border-slate-200 text-sm font-semibold text-slate-800 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-sky-600 focus:outline-none"
                                            >
                                                <option value="">-- Choose Specialist Doctor --</option>
                                                {availableDoctors.map(doc => (
                                                    <option key={doc.id} value={doc.name}>
                                                        {doc.name} ({doc.qualification})
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Specific Service / Reason</label>
                                        <select
                                            value={selectedService}
                                            onChange={(e) => setSelectedService(e.target.value)}
                                            className="w-full p-3 rounded-xl border border-slate-200 text-sm font-semibold text-slate-800 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-sky-600 focus:outline-none"
                                        >
                                            <option value="">-- Select Specific Treatment / Scan --</option>
                                            {availableServices.map(srv => (
                                                <option key={srv.id} value={srv.title}>{srv.title}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                {/* Step 2: Date & Time Slot */}
                                <div className="space-y-4 pt-6 border-t border-slate-100">
                                    <h3 className="text-lg font-bold text-slate-900 border-l-4 border-teal-600 pl-3">
                                        2. Choose Date & Preferred Slot
                                    </h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Appointment Date</label>
                                            <input
                                                type="date"
                                                required
                                                min={new Date().toISOString().split('T')[0]}
                                                value={date}
                                                onChange={(e) => setDate(e.target.value)}
                                                className="w-full p-3 rounded-xl border border-slate-200 text-sm font-semibold text-slate-800 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-sky-600 focus:outline-none"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Preferred Time Slot</label>
                                            <select
                                                value={timeSlot}
                                                onChange={(e) => setTimeSlot(e.target.value)}
                                                className="w-full p-3 rounded-xl border border-slate-200 text-sm font-semibold text-slate-800 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-sky-600 focus:outline-none"
                                            >
                                                <option value="09:30 AM">09:30 AM - Morning OPD</option>
                                                <option value="10:30 AM">10:30 AM - Morning OPD</option>
                                                <option value="11:30 AM">11:30 AM - Morning OPD</option>
                                                <option value="05:00 PM">05:00 PM - Evening OPD</option>
                                                <option value="06:30 PM">06:30 PM - Evening OPD</option>
                                                <option value="07:30 PM">07:30 PM - Evening OPD</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                {/* Step 3: Patient Details */}
                                <div className="space-y-4 pt-6 border-t border-slate-100">
                                    <h3 className="text-lg font-bold text-slate-900 border-l-4 border-indigo-600 pl-3">
                                        3. Patient Personal Details
                                    </h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Full Name *</label>
                                            <input
                                                type="text"
                                                required
                                                placeholder="e.g. Ramesh Verma"
                                                value={patientName}
                                                onChange={(e) => setPatientName(e.target.value)}
                                                className="w-full p-3 rounded-xl border border-slate-200 text-sm bg-slate-50 focus:bg-white focus:ring-2 focus:ring-sky-600 focus:outline-none"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Mobile Phone Number *</label>
                                            <input
                                                type="tel"
                                                required
                                                placeholder="10-digit mobile number"
                                                value={patientPhone}
                                                onChange={(e) => setPatientPhone(e.target.value)}
                                                className="w-full p-3 rounded-xl border border-slate-200 text-sm bg-slate-50 focus:bg-white focus:ring-2 focus:ring-sky-600 focus:outline-none"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Email Address</label>
                                            <input
                                                type="email"
                                                placeholder="name@example.com"
                                                value={patientEmail}
                                                onChange={(e) => setPatientEmail(e.target.value)}
                                                className="w-full p-3 rounded-xl border border-slate-200 text-sm bg-slate-50 focus:bg-white focus:ring-2 focus:ring-sky-600 focus:outline-none"
                                            />
                                        </div>

                                        <div className="grid grid-cols-2 gap-3">
                                            <div>
                                                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Age</label>
                                                <input
                                                    type="number"
                                                    placeholder="e.g. 35"
                                                    value={age}
                                                    onChange={(e) => setAge(e.target.value)}
                                                    className="w-full p-3 rounded-xl border border-slate-200 text-sm bg-slate-50 focus:bg-white focus:ring-2 focus:ring-sky-600 focus:outline-none"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Gender</label>
                                                <select
                                                    value={gender}
                                                    onChange={(e) => setGender(e.target.value)}
                                                    className="w-full p-3 rounded-xl border border-slate-200 text-sm bg-slate-50 focus:bg-white focus:ring-2 focus:ring-sky-600 focus:outline-none"
                                                >
                                                    <option value="Male">Male</option>
                                                    <option value="Female">Female</option>
                                                    <option value="Other">Other</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Symptoms / Additional Medical Notes</label>
                                        <textarea
                                            rows="2"
                                            placeholder="Briefly describe your symptoms or reason for scan/consultation..."
                                            value={notes}
                                            onChange={(e) => setNotes(e.target.value)}
                                            className="w-full p-3 rounded-xl border border-slate-200 text-sm bg-slate-50 focus:bg-white focus:ring-2 focus:ring-sky-600 focus:outline-none"
                                        ></textarea>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-sky-600 via-teal-600 to-indigo-600 text-white font-extrabold py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all text-base"
                                >
                                    <FaCalendarCheck /> Confirm & Generate Booking Ticket
                                </button>
                            </form>
                        ) : (
                            /* CONFIRMATION TICKET CARD */
                            <div className="bg-white rounded-3xl p-8 sm:p-12 border-2 border-emerald-500 shadow-2xl space-y-6">
                                <div className="text-center space-y-2">
                                    <div className="h-16 w-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-3xl">
                                        <FaCheckCircle />
                                    </div>
                                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                                        Appointment Booking Confirmed!
                                    </h2>
                                    <p className="text-xs text-slate-500">
                                        Your token pass has been issued. Please arrive 10 minutes before your slot time.
                                    </p>
                                </div>

                                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4">
                                    <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                                        <span className="text-xs font-bold uppercase text-slate-500">Reference ID:</span>
                                        <span className="text-lg font-extrabold text-sky-700 bg-sky-100 px-3 py-0.5 rounded-lg">{confirmedBooking.id}</span>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                                        <div><strong className="text-slate-700">Patient Name:</strong> <p className="text-slate-900 font-semibold">{confirmedBooking.patientName}</p></div>
                                        <div><strong className="text-slate-700">Phone Number:</strong> <p className="text-slate-900 font-semibold">{confirmedBooking.patientPhone}</p></div>
                                        <div><strong className="text-slate-700">Department:</strong> <p className="text-slate-900 font-semibold">{confirmedBooking.department}</p></div>
                                        <div><strong className="text-slate-700">Doctor:</strong> <p className="text-slate-900 font-semibold">{confirmedBooking.doctor}</p></div>
                                        <div><strong className="text-slate-700">Service:</strong> <p className="text-slate-900 font-semibold">{confirmedBooking.service}</p></div>
                                        <div><strong className="text-slate-700">Date & Slot:</strong> <p className="text-emerald-700 font-bold">{confirmedBooking.date} at {confirmedBooking.timeSlot}</p></div>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-4 justify-center pt-2">
                                    <button
                                        onClick={() => window.print()}
                                        className="flex items-center gap-2 bg-slate-900 text-white font-bold px-6 py-3 rounded-xl text-xs hover:bg-slate-800 transition-all"
                                    >
                                        <FaPrint /> Print Pass
                                    </button>
                                    <button
                                        onClick={resetForm}
                                        className="flex items-center gap-2 bg-sky-100 text-sky-800 font-bold px-6 py-3 rounded-xl text-xs hover:bg-sky-200 transition-all"
                                    >
                                        Book Another Appointment
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                )}

                {/* TAB 2: PATIENT PORTAL / LOOKUP */}
                {activeTab === "lookup" && (
                    <div className="max-w-4xl mx-auto space-y-8">
                        <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-md">
                            <form onSubmit={handleLookup} className="space-y-4">
                                <h3 className="text-xl font-bold text-slate-900">
                                    Search Appointments & Reports
                                </h3>
                                <p className="text-xs text-slate-600">
                                    Enter your 10-digit registered mobile number or Appointment ID (e.g. APT-8821):
                                </p>

                                <div className="flex flex-col sm:flex-row gap-3">
                                    <input
                                        type="text"
                                        required
                                        placeholder="Enter Phone Number or APT-XXXX..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="flex-1 p-3.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-600"
                                    />
                                    <button
                                        type="submit"
                                        className="flex items-center justify-center gap-2 bg-sky-700 hover:bg-sky-800 text-white font-bold px-6 py-3.5 rounded-xl text-sm transition-all"
                                    >
                                        <FaSearch /> Search Records
                                    </button>
                                </div>
                            </form>
                        </div>

                        {/* Search Results */}
                        {hasSearched && (
                            <div className="space-y-4">
                                <h3 className="text-lg font-bold text-slate-900">
                                    Search Results ({searchResults.length})
                                </h3>
                                {searchResults.length === 0 ? (
                                    <div className="bg-white p-8 rounded-2xl text-center border border-slate-200 text-slate-500 text-xs">
                                        No appointment records found matching "{searchQuery}". Please check the phone number or Reference ID.
                                    </div>
                                ) : (
                                    searchResults.map((apt) => (
                                        <div key={apt.id} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
                                            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                                                <div>
                                                    <span className="text-xs font-bold text-slate-500">Booking ID:</span>
                                                    <span className="text-sm font-extrabold text-sky-700 ml-2">{apt.id}</span>
                                                </div>
                                                <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                                                    apt.status === "Confirmed" ? "bg-emerald-100 text-emerald-800" :
                                                    apt.status === "Completed" ? "bg-sky-100 text-sky-800" : "bg-amber-100 text-amber-800"
                                                }`}>
                                                    Status: {apt.status}
                                                </span>
                                            </div>

                                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                                                <div><strong className="text-slate-500">Patient:</strong> <p className="font-semibold text-slate-800">{apt.patientName}</p></div>
                                                <div><strong className="text-slate-500">Doctor:</strong> <p className="font-semibold text-slate-800">{apt.doctor}</p></div>
                                                <div><strong className="text-slate-500">Date & Slot:</strong> <p className="font-semibold text-slate-800">{apt.date} ({apt.timeSlot})</p></div>
                                            </div>

                                            {/* Report Download Mock */}
                                            {apt.status === "Completed" && (
                                                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                                                    <span className="text-xs text-emerald-700 font-semibold flex items-center gap-1.5">
                                                        <FaFilePdf /> Diagnostic Report Ready
                                                    </span>
                                                    <button
                                                        onClick={() => alert(`Downloading Diagnostic PDF Report for ${apt.id}...`)}
                                                        className="flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-4 py-2 rounded-lg transition-all"
                                                    >
                                                        <FaDownload /> Download Report PDF
                                                    </button>
                                                </div>
                                            )}
                                        </div>
                                    ))
                                )}
                            </div>
                        )}
                    </div>
                )}
            </Container>
        </div>
    );
}