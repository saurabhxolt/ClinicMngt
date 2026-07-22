import { useState } from "react";
import Container from "@/components/common/Container";
import { clinicInfo } from "@/data/clinic";
import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaClock, FaPaperPlane, FaCheckCircle } from "react-icons/fa";

export default function Contact() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("General Inquiry");
    const [message, setMessage] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="py-12 bg-slate-50 min-h-screen">
            <Container>
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
                    <span className="bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full">
                        Get In Touch
                    </span>
                    <h1 className="text-4xl font-extrabold text-slate-900">
                        Contact Skin & Imaging Clinic
                    </h1>
                    <p className="text-slate-600 text-sm">
                        Have questions or need directions to our clinic? We're here to assist you.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
                    {/* Left Column: Contact Cards & Operating Hours */}
                    <div className="lg:col-span-5 space-y-6">
                        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-md space-y-6">
                            <h3 className="text-xl font-bold text-slate-900 border-l-4 border-sky-600 pl-3">
                                Clinic Contact Details
                            </h3>

                            <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                                <div className="flex items-start gap-3">
                                    <div className="h-10 w-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center font-bold shrink-0 mt-0.5">
                                        <FaMapMarkerAlt />
                                    </div>
                                    <div>
                                        <h5 className="font-bold text-slate-900">Clinic Address</h5>
                                        <p className="text-slate-600 text-xs mt-0.5">{clinicInfo.address}</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <div className="h-10 w-10 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center font-bold shrink-0 mt-0.5">
                                        <FaPhoneAlt />
                                    </div>
                                    <div>
                                        <h5 className="font-bold text-slate-900">Phone Appointments</h5>
                                        <p className="text-slate-600 text-xs mt-0.5">
                                            <a href={`tel:${clinicInfo.phone}`} className="hover:text-sky-700">{clinicInfo.phone}</a> / {clinicInfo.altPhone}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <div className="h-10 w-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold shrink-0 mt-0.5">
                                        <FaWhatsapp />
                                    </div>
                                    <div>
                                        <h5 className="font-bold text-slate-900">WhatsApp Helpdesk</h5>
                                        <p className="text-slate-600 text-xs mt-0.5">
                                            <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="text-emerald-700 font-bold hover:underline">
                                                {clinicInfo.whatsapp} (Click to Chat)
                                            </a>
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <div className="h-10 w-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold shrink-0 mt-0.5">
                                        <FaEnvelope />
                                    </div>
                                    <div>
                                        <h5 className="font-bold text-slate-900">Email Address</h5>
                                        <p className="text-slate-600 text-xs mt-0.5">{clinicInfo.email}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Working Hours Card */}
                        <div className="bg-gradient-to-r from-slate-900 to-sky-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-4">
                            <h3 className="text-lg font-bold flex items-center gap-2">
                                <FaClock className="text-sky-400" /> OPD & Scan Hours
                            </h3>
                            <div className="space-y-3 text-xs">
                                {clinicInfo.workingHours.map((wh, idx) => (
                                    <div key={idx} className="flex items-center justify-between pb-2 border-b border-slate-800">
                                        <span className="font-semibold text-slate-300">{wh.day}</span>
                                        <span className="text-sky-300 font-bold">{wh.timings}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Contact Form */}
                    <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-xl space-y-6">
                        {!submitted ? (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <h3 className="text-2xl font-extrabold text-slate-900">
                                    Send Us a Message
                                </h3>
                                <p className="text-xs text-slate-500">
                                    Fill out the form below and our clinic reception team will respond within 2 hours during OPD working hours.
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                                    <div>
                                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Your Name *</label>
                                        <input
                                            type="text"
                                            required
                                            placeholder="Full Name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            className="w-full p-3 rounded-xl border border-slate-200 text-sm bg-slate-50 focus:bg-white focus:ring-2 focus:ring-sky-600 focus:outline-none"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Phone Number *</label>
                                        <input
                                            type="tel"
                                            required
                                            placeholder="10-digit mobile number"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            className="w-full p-3 rounded-xl border border-slate-200 text-sm bg-slate-50 focus:bg-white focus:ring-2 focus:ring-sky-600 focus:outline-none"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Email Address</label>
                                        <input
                                            type="email"
                                            placeholder="name@example.com"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="w-full p-3 rounded-xl border border-slate-200 text-sm bg-slate-50 focus:bg-white focus:ring-2 focus:ring-sky-600 focus:outline-none"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Subject</label>
                                        <select
                                            value={subject}
                                            onChange={(e) => setSubject(e.target.value)}
                                            className="w-full p-3 rounded-xl border border-slate-200 text-sm bg-slate-50 focus:bg-white focus:ring-2 focus:ring-sky-600 focus:outline-none"
                                        >
                                            <option value="General Inquiry">General Inquiry</option>
                                            <option value="Dermatology Consultation">Dermatology Consultation</option>
                                            <option value="Radiology Scan Query">Radiology Scan Query</option>
                                            <option value="Report Collection">Report Collection Query</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Message / Question *</label>
                                    <textarea
                                        rows="4"
                                        required
                                        placeholder="Write your message here..."
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        className="w-full p-3 rounded-xl border border-slate-200 text-sm bg-slate-50 focus:bg-white focus:ring-2 focus:ring-sky-600 focus:outline-none"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-sky-600 to-teal-600 hover:from-sky-700 hover:to-teal-700 text-white font-bold py-3.5 rounded-xl shadow-lg transition-all text-sm"
                                >
                                    <FaPaperPlane /> Submit Message
                                </button>
                            </form>
                        ) : (
                            <div className="text-center py-12 space-y-4">
                                <div className="h-16 w-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-3xl">
                                    <FaCheckCircle />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900">Message Received!</h3>
                                <p className="text-xs text-slate-600 max-w-md mx-auto">
                                    Thank you, {name}! Your message has been sent to Skin & Imaging Clinic reception. We will get back to you shortly.
                                </p>
                                <button
                                    onClick={() => setSubmitted(false)}
                                    className="bg-sky-100 text-sky-800 font-bold px-6 py-2.5 rounded-xl text-xs"
                                >
                                    Send Another Message
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                {/* Google Maps Container Mockup */}
                <div className="bg-white rounded-3xl p-4 border border-slate-200 shadow-md">
                    <h4 className="text-sm font-bold text-slate-800 mb-3 px-2 flex items-center gap-2">
                        <FaMapMarkerAlt className="text-sky-600" /> Find Us on Google Maps: Central Avenue, Nagpur
                    </h4>
                    <div className="w-full h-80 rounded-2xl overflow-hidden bg-slate-200 relative flex items-center justify-center text-slate-500">
                        <iframe
                            title="Clinic Google Map"
                            src={clinicInfo.googleMapsEmbed}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </Container>
        </div>
    );
}