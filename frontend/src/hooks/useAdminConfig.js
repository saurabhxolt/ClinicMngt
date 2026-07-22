import { useSiteConfig } from '../context/SiteConfigContext';

/**
 * Hook for admin components to read and edit the full website content live.
 * Modeled after ArivTech website config architecture.
 */
export function useAdminConfig() {
    const {
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
    } = useSiteConfig();

    return {
        config,
        clinic: config.clinic,
        doctors: config.doctors,
        services: config.services,
        blogs: config.blogs,
        testimonials: config.testimonials,
        faqs: config.faqs,
        gallery: config.gallery,

        // Actions
        updateClinicInfo,
        saveSection: updateSection,
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
    };
}

export default useAdminConfig;
