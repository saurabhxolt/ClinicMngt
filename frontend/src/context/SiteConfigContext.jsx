/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect } from 'react';
import initialSiteConfig from '../data/siteConfig';

const SiteConfigContext = createContext(null);
const CONFIG_VERSION = "v3_warud_official";

export function SiteConfigProvider({ children }) {
    const [config, setConfig] = useState(() => {
        const savedVersion = localStorage.getItem('clinic_config_version');
        const saved = localStorage.getItem('clinic_site_config');

        // If version mismatch or missing, force sync to latest master config
        if (savedVersion !== CONFIG_VERSION || !saved) {
            localStorage.setItem('clinic_config_version', CONFIG_VERSION);
            localStorage.setItem('clinic_site_config', JSON.stringify(initialSiteConfig));
            return initialSiteConfig;
        }

        try {
            return JSON.parse(saved);
        } catch (e) {
            console.error("Failed to parse site config from localStorage", e);
            return initialSiteConfig;
        }
    });

    useEffect(() => {
        localStorage.setItem('clinic_site_config', JSON.stringify(config));
        localStorage.setItem('clinic_config_version', CONFIG_VERSION);
    }, [config]);

    // Helper to update any specific section
    const updateSection = (sectionKey, value) => {
        setConfig(prev => ({
            ...prev,
            [sectionKey]: value
        }));
    };

    // Clinic Info updates
    const updateClinicInfo = (newClinicInfo) => {
        updateSection('clinic', newClinicInfo);
    };

    // Doctor CRUD
    const saveDoctor = (doctor) => {
        setConfig(prev => {
            const exists = prev.doctors.some(d => d.id === doctor.id);
            let updatedDoctors;
            if (exists) {
                updatedDoctors = prev.doctors.map(d => d.id === doctor.id ? doctor : d);
            } else {
                const newId = doctor.id || Date.now();
                updatedDoctors = [...prev.doctors, { ...doctor, id: newId }];
            }
            return { ...prev, doctors: updatedDoctors };
        });
    };

    const deleteDoctor = (id) => {
        setConfig(prev => ({
            ...prev,
            doctors: prev.doctors.filter(d => d.id !== id)
        }));
    };

    // Service CRUD
    const saveService = (service) => {
        setConfig(prev => {
            const exists = prev.services.some(s => s.id === service.id);
            let updatedServices;
            if (exists) {
                updatedServices = prev.services.map(s => s.id === service.id ? service : s);
            } else {
                const newId = service.id || `srv-${Date.now()}`;
                updatedServices = [...prev.services, { ...service, id: newId }];
            }
            return { ...prev, services: updatedServices };
        });
    };

    const deleteService = (id) => {
        setConfig(prev => ({
            ...prev,
            services: prev.services.filter(s => s.id !== id)
        }));
    };

    // Blog CRUD
    const saveBlog = (blog) => {
        setConfig(prev => {
            const exists = prev.blogs.some(b => b.id === blog.id);
            let updatedBlogs;
            if (exists) {
                updatedBlogs = prev.blogs.map(b => b.id === blog.id ? blog : b);
            } else {
                const newId = blog.id || Date.now();
                updatedBlogs = [...prev.blogs, { ...blog, id: newId }];
            }
            return { ...prev, blogs: updatedBlogs };
        });
    };

    const deleteBlog = (id) => {
        setConfig(prev => ({
            ...prev,
            blogs: prev.blogs.filter(b => b.id !== id)
        }));
    };

    // Testimonial CRUD
    const saveTestimonial = (testimonial) => {
        setConfig(prev => {
            const exists = prev.testimonials.some(t => t.id === testimonial.id);
            let updatedTestimonials;
            if (exists) {
                updatedTestimonials = prev.testimonials.map(t => t.id === testimonial.id ? testimonial : t);
            } else {
                const newId = testimonial.id || Date.now();
                updatedTestimonials = [...prev.testimonials, { ...testimonial, id: newId }];
            }
            return { ...prev, testimonials: updatedTestimonials };
        });
    };

    const deleteTestimonial = (id) => {
        setConfig(prev => ({
            ...prev,
            testimonials: prev.testimonials.filter(t => t.id !== id)
        }));
    };

    // FAQ CRUD
    const saveFaq = (faq) => {
        setConfig(prev => {
            const exists = prev.faqs.some(f => f.id === faq.id);
            let updatedFaqs;
            if (exists) {
                updatedFaqs = prev.faqs.map(f => f.id === faq.id ? faq : f);
            } else {
                const newId = faq.id || Date.now();
                updatedFaqs = [...prev.faqs, { ...faq, id: newId }];
            }
            return { ...prev, faqs: updatedFaqs };
        });
    };

    const deleteFaq = (id) => {
        setConfig(prev => ({
            ...prev,
            faqs: prev.faqs.filter(f => f.id !== id)
        }));
    };

    // Factory Reset
    const resetToFactoryDefault = () => {
        setConfig(initialSiteConfig);
        localStorage.removeItem('clinic_site_config');
        localStorage.setItem('clinic_config_version', CONFIG_VERSION);
    };

    return (
        <SiteConfigContext.Provider value={{
            config,
            updateClinicInfo,
            updateSection,
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
        }}>
            {children}
        </SiteConfigContext.Provider>
    );
}

export function useSiteConfig() {
    const context = useContext(SiteConfigContext);
    if (!context) {
        return {
            config: initialSiteConfig,
            updateClinicInfo: () => {},
            updateSection: () => {},
            saveDoctor: () => {},
            deleteDoctor: () => {},
            saveService: () => {},
            deleteService: () => {},
            saveBlog: () => {},
            deleteBlog: () => {},
            saveTestimonial: () => {},
            deleteTestimonial: () => {},
            saveFaq: () => {},
            deleteFaq: () => {},
            resetToFactoryDefault: () => {}
        };
    }
    return context;
}
