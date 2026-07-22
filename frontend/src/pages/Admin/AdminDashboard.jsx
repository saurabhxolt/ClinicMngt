import { useState } from "react";
import Container from "@/components/common/Container";
import { useAuth } from "@/context/AuthContext";
import { useAppointment } from "@/context/AppointmentContext";
import { useAdminConfig } from "@/hooks/useAdminConfig";
import { FaUserShield, FaCalendarCheck, FaUserMd, FaHospital, FaBookOpen, FaSignOutAlt, FaLock, FaEdit, FaPlus, FaTrash, FaSave, FaUndo, FaStar, FaBuilding } from "react-icons/fa";

export default function AdminDashboard() {
    const { isAdminLoggedIn, loginAdmin, logoutAdmin } = useAuth();
    const { appointments, updateAppointmentStatus } = useAppointment();
    const {
        config,
        updateClinicInfo,
        saveDoctor,
        deleteDoctor,
        saveService,
        deleteService,
        saveBlog,
        deleteBlog,
        saveTestimonial,
        deleteTestimonial,
        saveFaq,
        deleteFaq,
        resetToFactoryDefault
    } = useAdminConfig();

    // Login Form State
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loginError, setLoginError] = useState("");

    // Active Admin Navigation Tab
    const [adminTab, setAdminTab] = useState("appointments"); // "appointments" | "clinic" | "doctors" | "services" | "blogs" | "testimonials" | "faqs"

    // Filter appointments
    const [statusFilter, setStatusFilter] = useState("All");

    // Modal / Editing Form States
    const [editingDoctor, setEditingDoctor] = useState(null);
    const [editingService, setEditingService] = useState(null);
    const [editingBlog, setEditingBlog] = useState(null);
    const [editingTestimonial, setEditingTestimonial] = useState(null);
    const [editingFaq, setEditingFaq] = useState(null);

    // Clinic Info Local Form State
    const [clinicForm, setClinicForm] = useState(() => ({ ...config.clinic }));
    const [clinicSaveSuccess, setClinicSaveSuccess] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        const res = loginAdmin(username, password);
        if (!res.success) {
            setLoginError(res.message);
        } else {
            setLoginError("");
        }
    };

    const handleClinicSave = (e) => {
        e.preventDefault();
        updateClinicInfo(clinicForm);
        setClinicSaveSuccess(true);
        setTimeout(() => setClinicSaveSuccess(false), 3000);
    };

    const filteredAppointments = statusFilter === "All"
        ? appointments
        : appointments.filter(apt => apt.status.toLowerCase() === statusFilter.toLowerCase());

    if (!isAdminLoggedIn) {
        return (
            <div className="py-20 bg-slate-100 min-h-screen flex items-center justify-center p-4">
                <div className="bg-white rounded-3xl p-8 sm:p-10 max-w-md w-full border border-slate-200 shadow-2xl space-y-6">
                    <div className="text-center space-y-2">
                        <div className="h-14 w-14 bg-sky-100 text-sky-700 rounded-2xl flex items-center justify-center mx-auto text-2xl font-bold">
                            <FaUserShield />
                        </div>
                        <h2 className="text-2xl font-extrabold text-slate-900">Clinic Content Admin Login</h2>
                        <p className="text-xs text-slate-500">Sign in to edit website content, doctors, services, and manage patient bookings.</p>
                    </div>

                    {loginError && (
                        <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs font-semibold rounded-xl text-center">
                            {loginError}
                        </div>
                    )}

                    <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Username</label>
                            <input
                                type="text"
                                required
                                placeholder="admin"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="w-full p-3 rounded-xl border border-slate-200 text-sm bg-slate-50 focus:bg-white focus:ring-2 focus:ring-sky-600 focus:outline-none"
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Password</label>
                            <input
                                type="password"
                                required
                                placeholder="admin123"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full p-3 rounded-xl border border-slate-200 text-sm bg-slate-50 focus:bg-white focus:ring-2 focus:ring-sky-600 focus:outline-none"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-sky-700 to-teal-700 hover:from-sky-800 hover:to-teal-800 text-white font-bold py-3.5 rounded-xl shadow-lg text-sm transition-all"
                        >
                            <FaLock /> Login to Admin Workspace
                        </button>
                    </form>

                    <div className="p-3 bg-sky-50 rounded-xl text-center text-[11px] text-sky-800 font-medium">
                        Demo Admin Credentials: Username: <strong>admin</strong> | Password: <strong>admin123</strong>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="py-10 bg-slate-50 min-h-screen">
            <Container>
                {/* Admin Header */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-900 text-white p-6 sm:p-8 rounded-3xl shadow-xl mb-10">
                    <div className="flex items-center gap-3">
                        <div className="h-12 w-12 rounded-2xl bg-sky-600 text-white flex items-center justify-center text-2xl font-bold">
                            <FaUserShield />
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold">Website Content & Management Portal</h1>
                            <p className="text-xs text-slate-400">Full Edit Rights Enabled • Skin & Imaging Clinic</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => {
                                if (confirm("Reset all website content back to initial factory default?")) {
                                    resetToFactoryDefault();
                                    alert("Website content reset to factory defaults!");
                                }
                            }}
                            className="flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold px-3 py-2 rounded-xl border border-slate-700 transition-all"
                        >
                            <FaUndo /> Reset Factory Config
                        </button>
                        <button
                            onClick={logoutAdmin}
                            className="flex items-center gap-2 bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold px-4 py-2 rounded-xl transition-all"
                        >
                            <FaSignOutAlt /> Admin Logout
                        </button>
                    </div>
                </div>

                {/* Dashboard Metrics Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                    <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-md flex items-center justify-between">
                        <div>
                            <span className="text-xs font-bold text-slate-500 uppercase">Total Bookings</span>
                            <div className="text-3xl font-extrabold text-slate-900 mt-1">{appointments.length}</div>
                        </div>
                        <div className="h-12 w-12 rounded-2xl bg-sky-100 text-sky-700 flex items-center justify-center text-xl">
                            <FaCalendarCheck />
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-md flex items-center justify-between">
                        <div>
                            <span className="text-xs font-bold text-slate-500 uppercase">Active Doctors</span>
                            <div className="text-3xl font-extrabold text-slate-900 mt-1">{config.doctors.length}</div>
                        </div>
                        <div className="h-12 w-12 rounded-2xl bg-teal-100 text-teal-700 flex items-center justify-center text-xl">
                            <FaUserMd />
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-md flex items-center justify-between">
                        <div>
                            <span className="text-xs font-bold text-slate-500 uppercase">Services & Scans</span>
                            <div className="text-3xl font-extrabold text-slate-900 mt-1">{config.services.length}</div>
                        </div>
                        <div className="h-12 w-12 rounded-2xl bg-indigo-100 text-indigo-700 flex items-center justify-center text-xl">
                            <FaHospital />
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-md flex items-center justify-between">
                        <div>
                            <span className="text-xs font-bold text-slate-500 uppercase">Published Blogs</span>
                            <div className="text-3xl font-extrabold text-slate-900 mt-1">{config.blogs.length}</div>
                        </div>
                        <div className="h-12 w-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center text-xl">
                            <FaBookOpen />
                        </div>
                    </div>
                </div>

                {/* Dashboard Navigation Tabs */}
                <div className="flex gap-2.5 mb-8 overflow-x-auto pb-1">
                    {[
                        { id: "appointments", label: "Appointments" },
                        { id: "clinic", label: "Clinic Branding & Info" },
                        { id: "doctors", label: "Manage Doctors" },
                        { id: "services", label: "Manage Services" },
                        { id: "blogs", label: "Manage Blogs" },
                        { id: "testimonials", label: "Manage Reviews" },
                        { id: "faqs", label: "Manage FAQs" }
                    ].map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setAdminTab(tab.id)}
                            className={`px-4 py-2.5 rounded-2xl font-bold text-xs transition-all shrink-0 ${
                                adminTab === tab.id
                                    ? "bg-sky-700 text-white shadow-lg shadow-sky-700/20"
                                    : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
                            }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* TAB 1: APPOINTMENTS */}
                {adminTab === "appointments" && (
                    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-md space-y-6">
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                            <h3 className="text-xl font-bold text-slate-900">
                                Patient Appointments List
                            </h3>
                            <div className="flex items-center gap-2">
                                <span className="text-xs text-slate-500 font-bold">Filter Status:</span>
                                {["All", "Pending", "Confirmed", "Completed", "Cancelled"].map(st => (
                                    <button
                                        key={st}
                                        onClick={() => setStatusFilter(st)}
                                        className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                                            statusFilter === st ? "bg-sky-700 text-white" : "bg-slate-100 text-slate-700"
                                        }`}
                                    >
                                        {st}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-xs border-collapse">
                                <thead>
                                    <tr className="bg-slate-100 text-slate-700 font-bold uppercase border-b border-slate-200">
                                        <th className="p-3">Ref ID</th>
                                        <th className="p-3">Patient Name</th>
                                        <th className="p-3">Phone</th>
                                        <th className="p-3">Department / Doctor</th>
                                        <th className="p-3">Date & Slot</th>
                                        <th className="p-3">Status</th>
                                        <th className="p-3">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {filteredAppointments.map(apt => (
                                        <tr key={apt.id} className="hover:bg-slate-50 transition-colors">
                                            <td className="p-3 font-extrabold text-sky-700">{apt.id}</td>
                                            <td className="p-3 font-bold text-slate-900">{apt.patientName}</td>
                                            <td className="p-3 text-slate-600">{apt.patientPhone}</td>
                                            <td className="p-3">
                                                <div className="font-semibold text-slate-800">{apt.doctor}</div>
                                                <div className="text-[11px] text-slate-500">{apt.service}</div>
                                            </td>
                                            <td className="p-3 text-slate-700 font-medium">
                                                {apt.date} ({apt.timeSlot})
                                            </td>
                                            <td className="p-3">
                                                <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                                                    apt.status === "Confirmed" ? "bg-emerald-100 text-emerald-800" :
                                                    apt.status === "Completed" ? "bg-sky-100 text-sky-800" :
                                                    apt.status === "Cancelled" ? "bg-rose-100 text-rose-800" : "bg-amber-100 text-amber-800"
                                                }`}>
                                                    {apt.status}
                                                </span>
                                            </td>
                                            <td className="p-3">
                                                <div className="flex gap-1.5">
                                                    <button
                                                        onClick={() => updateAppointmentStatus(apt.id, "Confirmed")}
                                                        className="p-1.5 bg-emerald-100 text-emerald-700 hover:bg-emerald-200 rounded-lg text-xs font-bold"
                                                    >
                                                        Confirm
                                                    </button>
                                                    <button
                                                        onClick={() => updateAppointmentStatus(apt.id, "Completed")}
                                                        className="p-1.5 bg-sky-100 text-sky-700 hover:bg-sky-200 rounded-lg text-xs font-bold"
                                                    >
                                                        Complete
                                                    </button>
                                                    <button
                                                        onClick={() => updateAppointmentStatus(apt.id, "Cancelled")}
                                                        className="p-1.5 bg-rose-100 text-rose-700 hover:bg-rose-200 rounded-lg text-xs font-bold"
                                                    >
                                                        Cancel
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

                {/* TAB 2: CLINIC BRANDING & CONTACT INFO EDIT */}
                {adminTab === "clinic" && (
                    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-md space-y-6">
                        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                            <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                                <FaBuilding className="text-sky-600" /> Edit Website Clinic Info & Contact Details
                            </h3>
                            {clinicSaveSuccess && (
                                <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-lg animate-pulse">
                                    ✓ Clinic Info Saved Live!
                                </span>
                            )}
                        </div>

                        <form onSubmit={handleClinicSave} className="space-y-4 text-xs">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block font-bold text-slate-700 uppercase mb-1">Clinic Name</label>
                                    <input
                                        type="text"
                                        value={clinicForm.name}
                                        onChange={(e) => setClinicForm({ ...clinicForm, name: e.target.value })}
                                        className="w-full p-3 rounded-xl border border-slate-200 text-sm bg-slate-50 focus:bg-white focus:ring-2 focus:ring-sky-600"
                                    />
                                </div>
                                <div>
                                    <label className="block font-bold text-slate-700 uppercase mb-1">Primary Tagline</label>
                                    <input
                                        type="text"
                                        value={clinicForm.tagline}
                                        onChange={(e) => setClinicForm({ ...clinicForm, tagline: e.target.value })}
                                        className="w-full p-3 rounded-xl border border-slate-200 text-sm bg-slate-50 focus:bg-white focus:ring-2 focus:ring-sky-600"
                                    />
                                </div>
                                <div>
                                    <label className="block font-bold text-slate-700 uppercase mb-1">Phone Number</label>
                                    <input
                                        type="text"
                                        value={clinicForm.phone}
                                        onChange={(e) => setClinicForm({ ...clinicForm, phone: e.target.value })}
                                        className="w-full p-3 rounded-xl border border-slate-200 text-sm bg-slate-50 focus:bg-white focus:ring-2 focus:ring-sky-600"
                                    />
                                </div>
                                <div>
                                    <label className="block font-bold text-slate-700 uppercase mb-1">WhatsApp Number</label>
                                    <input
                                        type="text"
                                        value={clinicForm.whatsapp}
                                        onChange={(e) => setClinicForm({ ...clinicForm, whatsapp: e.target.value })}
                                        className="w-full p-3 rounded-xl border border-slate-200 text-sm bg-slate-50 focus:bg-white focus:ring-2 focus:ring-sky-600"
                                    />
                                </div>
                                <div>
                                    <label className="block font-bold text-slate-700 uppercase mb-1">Email Address</label>
                                    <input
                                        type="email"
                                        value={clinicForm.email}
                                        onChange={(e) => setClinicForm({ ...clinicForm, email: e.target.value })}
                                        className="w-full p-3 rounded-xl border border-slate-200 text-sm bg-slate-50 focus:bg-white focus:ring-2 focus:ring-sky-600"
                                    />
                                </div>
                                <div>
                                    <label className="block font-bold text-slate-700 uppercase mb-1">Full Physical Address</label>
                                    <input
                                        type="text"
                                        value={clinicForm.address}
                                        onChange={(e) => setClinicForm({ ...clinicForm, address: e.target.value })}
                                        className="w-full p-3 rounded-xl border border-slate-200 text-sm bg-slate-50 focus:bg-white focus:ring-2 focus:ring-sky-600"
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="flex items-center gap-2 bg-gradient-to-r from-sky-600 to-teal-600 text-white font-bold px-6 py-3 rounded-xl shadow-md text-sm hover:shadow-lg transition-all"
                            >
                                <FaSave /> Save Clinic Information
                            </button>
                        </form>
                    </div>
                )}

                {/* TAB 3: MANAGE DOCTORS */}
                {adminTab === "doctors" && (
                    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-md space-y-6">
                        <div className="flex items-center justify-between">
                            <h3 className="text-xl font-bold text-slate-900">
                                Doctor Profiles Management
                            </h3>
                            <button
                                onClick={() => setEditingDoctor({ id: Date.now(), name: "", title: "", qualification: "", experience: "", speciality: "", department: "Dermatology", image: "", timings: "", consultationFee: "₹600", rating: 4.9, reviewsCount: 100 })}
                                className="flex items-center gap-2 bg-sky-700 text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow-md"
                            >
                                <FaPlus /> Add New Doctor Profile
                            </button>
                        </div>

                        {editingDoctor && (
                            <form onSubmit={(e) => {
                                e.preventDefault();
                                saveDoctor(editingDoctor);
                                setEditingDoctor(null);
                            }} className="p-6 rounded-2xl bg-sky-50 border border-sky-200 space-y-4 text-xs">
                                <h4 className="font-bold text-slate-900 text-sm">{editingDoctor.id ? "Edit Doctor Profile" : "Add Doctor Profile"}</h4>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                    <div>
                                        <label className="font-bold text-slate-700 uppercase block mb-1">Doctor Name</label>
                                        <input type="text" required value={editingDoctor.name} onChange={(e) => setEditingDoctor({ ...editingDoctor, name: e.target.value })} className="w-full p-2.5 rounded-lg border border-slate-200 bg-white text-xs" />
                                    </div>
                                    <div>
                                        <label className="font-bold text-slate-700 uppercase block mb-1">Qualification</label>
                                        <input type="text" required value={editingDoctor.qualification} onChange={(e) => setEditingDoctor({ ...editingDoctor, qualification: e.target.value })} className="w-full p-2.5 rounded-lg border border-slate-200 bg-white text-xs" />
                                    </div>
                                    <div>
                                        <label className="font-bold text-slate-700 uppercase block mb-1">Department</label>
                                        <select value={editingDoctor.department} onChange={(e) => setEditingDoctor({ ...editingDoctor, department: e.target.value })} className="w-full p-2.5 rounded-lg border border-slate-200 bg-white text-xs">
                                            <option value="Dermatology">Dermatology</option>
                                            <option value="Radiology">Radiology</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="font-bold text-slate-700 uppercase block mb-1">Speciality</label>
                                        <input type="text" value={editingDoctor.speciality} onChange={(e) => setEditingDoctor({ ...editingDoctor, speciality: e.target.value })} className="w-full p-2.5 rounded-lg border border-slate-200 bg-white text-xs" />
                                    </div>
                                    <div>
                                        <label className="font-bold text-slate-700 uppercase block mb-1">OPD Timings</label>
                                        <input type="text" value={editingDoctor.timings} onChange={(e) => setEditingDoctor({ ...editingDoctor, timings: e.target.value })} className="w-full p-2.5 rounded-lg border border-slate-200 bg-white text-xs" />
                                    </div>
                                    <div>
                                        <label className="font-bold text-slate-700 uppercase block mb-1">Consultation Fee</label>
                                        <input type="text" value={editingDoctor.consultationFee} onChange={(e) => setEditingDoctor({ ...editingDoctor, consultationFee: e.target.value })} className="w-full p-2.5 rounded-lg border border-slate-200 bg-white text-xs" />
                                    </div>
                                    <div className="sm:col-span-3">
                                        <label className="font-bold text-slate-700 uppercase block mb-1">Image URL</label>
                                        <input type="text" value={editingDoctor.image} onChange={(e) => setEditingDoctor({ ...editingDoctor, image: e.target.value })} className="w-full p-2.5 rounded-lg border border-slate-200 bg-white text-xs" />
                                    </div>
                                </div>
                                <div className="flex gap-2 justify-end">
                                    <button type="button" onClick={() => setEditingDoctor(null)} className="px-4 py-2 bg-slate-200 font-bold rounded-lg">Cancel</button>
                                    <button type="submit" className="px-4 py-2 bg-sky-700 text-white font-bold rounded-lg">Save Doctor</button>
                                </div>
                            </form>
                        )}

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {config.doctors.map(doc => (
                                <div key={doc.id} className="p-5 rounded-2xl border border-slate-200 flex gap-4 items-center justify-between">
                                    <div className="flex gap-4 items-center">
                                        <img src={doc.image} alt={doc.name} className="h-20 w-20 rounded-xl object-cover" />
                                        <div className="space-y-1">
                                            <span className="text-[10px] font-bold uppercase text-sky-700 bg-sky-50 px-2 py-0.5 rounded">
                                                {doc.department}
                                            </span>
                                            <h4 className="font-bold text-slate-900 text-base">{doc.name}</h4>
                                            <p className="text-xs text-slate-600">{doc.qualification}</p>
                                            <p className="text-xs text-emerald-700 font-semibold">{doc.consultationFee}</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <button onClick={() => setEditingDoctor(doc)} className="p-2 bg-sky-50 text-sky-700 hover:bg-sky-100 rounded-lg text-xs font-bold flex items-center gap-1">
                                            <FaEdit /> Edit
                                        </button>
                                        <button onClick={() => { if (confirm(`Delete doctor ${doc.name}?`)) deleteDoctor(doc.id); }} className="p-2 bg-rose-50 text-rose-700 hover:bg-rose-100 rounded-lg text-xs font-bold flex items-center gap-1">
                                            <FaTrash /> Delete
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* TAB 4: MANAGE SERVICES */}
                {adminTab === "services" && (
                    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-md space-y-6">
                        <div className="flex items-center justify-between">
                            <h3 className="text-xl font-bold text-slate-900">
                                Services & Radiology Scans Management
                            </h3>
                            <button
                                onClick={() => setEditingService({ id: `srv-${Date.now()}`, title: "", category: "Dermatology", shortDesc: "", overview: "" })}
                                className="flex items-center gap-2 bg-teal-700 text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow-md"
                            >
                                <FaPlus /> Add New Service
                            </button>
                        </div>

                        {editingService && (
                            <form onSubmit={(e) => {
                                e.preventDefault();
                                saveService(editingService);
                                setEditingService(null);
                            }} className="p-6 rounded-2xl bg-teal-50 border border-teal-200 space-y-4 text-xs">
                                <h4 className="font-bold text-slate-900 text-sm">Service Details</h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    <div>
                                        <label className="font-bold text-slate-700 uppercase block mb-1">Service Title</label>
                                        <input type="text" required value={editingService.title} onChange={(e) => setEditingService({ ...editingService, title: e.target.value })} className="w-full p-2.5 rounded-lg border border-slate-200 bg-white text-xs" />
                                    </div>
                                    <div>
                                        <label className="font-bold text-slate-700 uppercase block mb-1">Category</label>
                                        <select value={editingService.category} onChange={(e) => setEditingService({ ...editingService, category: e.target.value })} className="w-full p-2.5 rounded-lg border border-slate-200 bg-white text-xs">
                                            <option value="Dermatology">Dermatology</option>
                                            <option value="Radiology">Radiology</option>
                                        </select>
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label className="font-bold text-slate-700 uppercase block mb-1">Short Description</label>
                                        <input type="text" required value={editingService.shortDesc} onChange={(e) => setEditingService({ ...editingService, shortDesc: e.target.value })} className="w-full p-2.5 rounded-lg border border-slate-200 bg-white text-xs" />
                                    </div>
                                </div>
                                <div className="flex gap-2 justify-end">
                                    <button type="button" onClick={() => setEditingService(null)} className="px-4 py-2 bg-slate-200 font-bold rounded-lg">Cancel</button>
                                    <button type="submit" className="px-4 py-2 bg-teal-700 text-white font-bold rounded-lg">Save Service</button>
                                </div>
                            </form>
                        )}

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {config.services.map(srv => (
                                <div key={srv.id} className="p-4 rounded-2xl border border-slate-200 flex items-center justify-between gap-4">
                                    <div>
                                        <span className="text-[10px] font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded">
                                            {srv.category}
                                        </span>
                                        <h5 className="font-bold text-slate-900 text-sm mt-1">{srv.title}</h5>
                                        <p className="text-xs text-slate-500 line-clamp-1">{srv.shortDesc}</p>
                                    </div>
                                    <div className="flex gap-1.5 shrink-0">
                                        <button onClick={() => setEditingService(srv)} className="p-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs font-bold"><FaEdit /></button>
                                        <button onClick={() => { if (confirm(`Delete service ${srv.title}?`)) deleteService(srv.id); }} className="p-2 bg-rose-50 hover:bg-rose-100 text-rose-700 rounded-lg text-xs font-bold"><FaTrash /></button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* TAB 5: MANAGE BLOGS */}
                {adminTab === "blogs" && (
                    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-md space-y-6">
                        <div className="flex items-center justify-between">
                            <h3 className="text-xl font-bold text-slate-900">
                                Health Articles & Blog Manager
                            </h3>
                            <button
                                onClick={() => setEditingBlog({ id: Date.now(), title: "", category: "Skin Diseases", author: "Dr. Richa Rokade", date: "July 2026", readTime: "5 min read", summary: "", content: "", image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=600" })}
                                className="flex items-center gap-2 bg-indigo-700 text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow-md"
                            >
                                <FaPlus /> Add New Blog Post
                            </button>
                        </div>

                        {editingBlog && (
                            <form onSubmit={(e) => {
                                e.preventDefault();
                                saveBlog(editingBlog);
                                setEditingBlog(null);
                            }} className="p-6 rounded-2xl bg-indigo-50 border border-indigo-200 space-y-4 text-xs">
                                <h4 className="font-bold text-slate-900 text-sm">Blog Details</h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    <div>
                                        <label className="font-bold text-slate-700 uppercase block mb-1">Article Title</label>
                                        <input type="text" required value={editingBlog.title} onChange={(e) => setEditingBlog({ ...editingBlog, title: e.target.value })} className="w-full p-2.5 rounded-lg border border-slate-200 bg-white text-xs" />
                                    </div>
                                    <div>
                                        <label className="font-bold text-slate-700 uppercase block mb-1">Category</label>
                                        <select value={editingBlog.category} onChange={(e) => setEditingBlog({ ...editingBlog, category: e.target.value })} className="w-full p-2.5 rounded-lg border border-slate-200 bg-white text-xs">
                                            <option value="Skin Diseases">Skin Diseases</option>
                                            <option value="Hair Care">Hair Care</option>
                                            <option value="Radiology">Radiology</option>
                                            <option value="Cosmetic Procedures">Cosmetic Procedures</option>
                                        </select>
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label className="font-bold text-slate-700 uppercase block mb-1">Summary</label>
                                        <input type="text" required value={editingBlog.summary} onChange={(e) => setEditingBlog({ ...editingBlog, summary: e.target.value })} className="w-full p-2.5 rounded-lg border border-slate-200 bg-white text-xs" />
                                    </div>
                                </div>
                                <div className="flex gap-2 justify-end">
                                    <button type="button" onClick={() => setEditingBlog(null)} className="px-4 py-2 bg-slate-200 font-bold rounded-lg">Cancel</button>
                                    <button type="submit" className="px-4 py-2 bg-indigo-700 text-white font-bold rounded-lg">Save Article</button>
                                </div>
                            </form>
                        )}

                        <div className="space-y-3">
                            {config.blogs.map(blog => (
                                <div key={blog.id} className="p-4 rounded-2xl border border-slate-200 flex items-center justify-between gap-4">
                                    <div>
                                        <span className="text-[10px] font-bold text-sky-700 bg-sky-50 px-2 py-0.5 rounded">
                                            {blog.category}
                                        </span>
                                        <h5 className="font-bold text-slate-900 text-sm mt-1">{blog.title}</h5>
                                        <p className="text-xs text-slate-500">By {blog.author} • {blog.date}</p>
                                    </div>
                                    <div className="flex gap-1.5 shrink-0">
                                        <button onClick={() => setEditingBlog(blog)} className="p-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs font-bold"><FaEdit /></button>
                                        <button onClick={() => { if (confirm(`Delete blog ${blog.title}?`)) deleteBlog(blog.id); }} className="p-2 bg-rose-50 hover:bg-rose-100 text-rose-700 rounded-lg text-xs font-bold"><FaTrash /></button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* TAB 6: MANAGE TESTIMONIALS */}
                {adminTab === "testimonials" && (
                    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-md space-y-6">
                        <div className="flex items-center justify-between">
                            <h3 className="text-xl font-bold text-slate-900">
                                Patient Testimonials & Reviews
                            </h3>
                            <button
                                onClick={() => setEditingTestimonial({ id: Date.now(), name: "", treatment: "Acne Scar Revision", doctor: "Dr. Richa Rokade", rating: 5, review: "", verified: true, image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200" })}
                                className="flex items-center gap-2 bg-amber-600 text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow-md"
                            >
                                <FaPlus /> Add New Patient Review
                            </button>
                        </div>

                        {editingTestimonial && (
                            <form onSubmit={(e) => {
                                e.preventDefault();
                                saveTestimonial(editingTestimonial);
                                setEditingTestimonial(null);
                            }} className="p-6 rounded-2xl bg-amber-50 border border-amber-200 space-y-4 text-xs">
                                <h4 className="font-bold text-slate-900 text-sm">Review Details</h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    <div>
                                        <label className="font-bold text-slate-700 uppercase block mb-1">Patient Name</label>
                                        <input type="text" required value={editingTestimonial.name} onChange={(e) => setEditingTestimonial({ ...editingTestimonial, name: e.target.value })} className="w-full p-2.5 rounded-lg border border-slate-200 bg-white text-xs" />
                                    </div>
                                    <div>
                                        <label className="font-bold text-slate-700 uppercase block mb-1">Treatment / Scan Received</label>
                                        <input type="text" required value={editingTestimonial.treatment} onChange={(e) => setEditingTestimonial({ ...editingTestimonial, treatment: e.target.value })} className="w-full p-2.5 rounded-lg border border-slate-200 bg-white text-xs" />
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label className="font-bold text-slate-700 uppercase block mb-1">Review Text</label>
                                        <textarea rows="3" required value={editingTestimonial.review} onChange={(e) => setEditingTestimonial({ ...editingTestimonial, review: e.target.value })} className="w-full p-2.5 rounded-lg border border-slate-200 bg-white text-xs"></textarea>
                                    </div>
                                </div>
                                <div className="flex gap-2 justify-end">
                                    <button type="button" onClick={() => setEditingTestimonial(null)} className="px-4 py-2 bg-slate-200 font-bold rounded-lg">Cancel</button>
                                    <button type="submit" className="px-4 py-2 bg-amber-600 text-white font-bold rounded-lg">Save Review</button>
                                </div>
                            </form>
                        )}

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {config.testimonials.map(item => (
                                <div key={item.id} className="p-4 rounded-2xl border border-slate-200 flex items-center justify-between gap-4">
                                    <div className="space-y-1">
                                        <div className="flex text-amber-500 text-xs">
                                            {[...Array(item.rating)].map((_, i) => <FaStar key={i} />)}
                                        </div>
                                        <h5 className="font-bold text-slate-900 text-sm">{item.name}</h5>
                                        <p className="text-xs text-sky-700 font-semibold">{item.treatment}</p>
                                        <p className="text-xs text-slate-500 italic line-clamp-2">"{item.review}"</p>
                                    </div>
                                    <div className="flex gap-1.5 shrink-0">
                                        <button onClick={() => setEditingTestimonial(item)} className="p-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs font-bold"><FaEdit /></button>
                                        <button onClick={() => { if (confirm(`Delete review from ${item.name}?`)) deleteTestimonial(item.id); }} className="p-2 bg-rose-50 hover:bg-rose-100 text-rose-700 rounded-lg text-xs font-bold"><FaTrash /></button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* TAB 7: MANAGE FAQS */}
                {adminTab === "faqs" && (
                    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-md space-y-6">
                        <div className="flex items-center justify-between">
                            <h3 className="text-xl font-bold text-slate-900">
                                FAQ Help Center Management
                            </h3>
                            <button
                                onClick={() => setEditingFaq({ id: Date.now(), category: "Clinic Timings & Booking", question: "", answer: "" })}
                                className="flex items-center gap-2 bg-sky-700 text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow-md"
                            >
                                <FaPlus /> Add New FAQ
                            </button>
                        </div>

                        {editingFaq && (
                            <form onSubmit={(e) => {
                                e.preventDefault();
                                saveFaq(editingFaq);
                                setEditingFaq(null);
                            }} className="p-6 rounded-2xl bg-sky-50 border border-sky-200 space-y-4 text-xs">
                                <h4 className="font-bold text-slate-900 text-sm">FAQ Details</h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    <div>
                                        <label className="font-bold text-slate-700 uppercase block mb-1">Category</label>
                                        <input type="text" required value={editingFaq.category} onChange={(e) => setEditingFaq({ ...editingFaq, category: e.target.value })} className="w-full p-2.5 rounded-lg border border-slate-200 bg-white text-xs" />
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label className="font-bold text-slate-700 uppercase block mb-1">Question</label>
                                        <input type="text" required value={editingFaq.question} onChange={(e) => setEditingFaq({ ...editingFaq, question: e.target.value })} className="w-full p-2.5 rounded-lg border border-slate-200 bg-white text-xs" />
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label className="font-bold text-slate-700 uppercase block mb-1">Answer</label>
                                        <textarea rows="3" required value={editingFaq.answer} onChange={(e) => setEditingFaq({ ...editingFaq, answer: e.target.value })} className="w-full p-2.5 rounded-lg border border-slate-200 bg-white text-xs"></textarea>
                                    </div>
                                </div>
                                <div className="flex gap-2 justify-end">
                                    <button type="button" onClick={() => setEditingFaq(null)} className="px-4 py-2 bg-slate-200 font-bold rounded-lg">Cancel</button>
                                    <button type="submit" className="px-4 py-2 bg-sky-700 text-white font-bold rounded-lg">Save FAQ</button>
                                </div>
                            </form>
                        )}

                        <div className="space-y-3">
                            {config.faqs.map(faq => (
                                <div key={faq.id} className="p-4 rounded-2xl border border-slate-200 flex items-center justify-between gap-4">
                                    <div>
                                        <span className="text-[10px] font-bold text-sky-700 bg-sky-50 px-2 py-0.5 rounded">
                                            {faq.category}
                                        </span>
                                        <h5 className="font-bold text-slate-900 text-sm mt-1">Q: {faq.question}</h5>
                                        <p className="text-xs text-slate-500 line-clamp-1">A: {faq.answer}</p>
                                    </div>
                                    <div className="flex gap-1.5 shrink-0">
                                        <button onClick={() => setEditingFaq(faq)} className="p-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs font-bold"><FaEdit /></button>
                                        <button onClick={() => { if (confirm(`Delete FAQ?`)) deleteFaq(faq.id); }} className="p-2 bg-rose-50 hover:bg-rose-100 text-rose-700 rounded-lg text-xs font-bold"><FaTrash /></button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </Container>
        </div>
    );
}
