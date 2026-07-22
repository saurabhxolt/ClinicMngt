import doctors from './doctors';
import services from './services';
import blogs from './blogs';
import testimonials from './testimonials';
import faqs from './faq';
import galleryItems from './gallery';
import clinicInfo from './clinic';

export const initialSiteConfig = {
    clinic: { ...clinicInfo },
    doctors: [ ...doctors ],
    services: [ ...services ],
    blogs: [ ...blogs ],
    testimonials: [ ...testimonials ],
    faqs: [ ...faqs ],
    gallery: [ ...galleryItems ]
};

export default initialSiteConfig;
