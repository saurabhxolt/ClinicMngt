import { Routes, Route } from "react-router-dom";

import MainLayout from "@/layouts/MainLayout";

import Home from "@/pages/Home/Home";
import About from "@/pages/About/About";
import Doctors from "@/pages/Doctors/Doctors";
import Dermatology from "@/pages/Dermatology/Dermatology";
import Radiology from "@/pages/Radiology/Radiology";
import Services from "@/pages/Services/Services";
import Appointment from "@/pages/Appointment/Appointment";
import Blogs from "@/pages/Blogs/Blogs";
import Gallery from "@/pages/Gallery/Gallery";
import FAQPage from "@/pages/FAQ/FAQPage";
import Contact from "@/pages/Contact/Contact";
import AdminDashboard from "@/pages/Admin/AdminDashboard";

export default function Router() {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/doctors" element={<Doctors />} />
                <Route path="/dermatology" element={<Dermatology />} />
                <Route path="/radiology" element={<Radiology />} />
                <Route path="/services" element={<Services />} />
                <Route path="/appointment" element={<Appointment />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/faq" element={<FAQPage />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/admin" element={<AdminDashboard />} />
            </Route>
        </Routes>
    );
}