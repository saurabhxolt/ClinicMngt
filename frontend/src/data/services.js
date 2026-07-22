import {
    FaUserMd,
    FaSpa,
    FaMagic,
    FaXRay,
    FaHeartbeat,
    FaStethoscope,
    FaShieldAlt,
    FaBandAid,
    FaMicroscope
} from "react-icons/fa";

export const dermatologyServices = [
    {
        id: "acne",
        title: "Acne & Acne Scar Treatment",
        shortDesc: "Advanced clinical therapies for persistent acne, breakouts, pimples, and deep facial scarring.",
        category: "Dermatology",
        icon: FaUserMd,
        overview: "Acne vulagris is a multifactorial skin condition affecting hair follicles and oil glands. We offer targeted medical treatments, comedone extraction, chemical peels, and laser scar revision.",
        causes: ["Excess Sebum Production", "Clogged Hair Follicles", "Cutibacterium Acnes Bacteria", "Hormonal Fluctuations"],
        symptoms: ["Blackheads & Whiteheads", "Inflammatory Papules & Pustules", "Painful Cystic Nodules", "Post-Inflammatory Hyperpigmentation & Scarring"],
        diagnosis: "Detailed clinical skin analysis, Woods Lamp examination, and hormone panel evaluation if indicated.",
        treatments: ["Topical & Oral Retinoids", "Salicylic & Glycolic Chemical Peels", "Microneedling RF for Scar Revision", "CO2 Fractional Laser Resurfacing"],
        faqs: [
            { question: "How many sessions are required for acne scars?", answer: "Usually 3 to 6 sessions spaced 4 weeks apart yield dramatic improvement." },
            { question: "Can acne return after treatment?", answer: "We provide maintenance regimens and skin care education to prevent recurring breakouts." }
        ]
    },
    {
        id: "eczema",
        title: "Eczema & Atopic Dermatitis",
        shortDesc: "Comprehensive relief and skin barrier restoration for chronic itchy, dry, and inflamed skin.",
        category: "Dermatology",
        icon: FaBandAid,
        overview: "Eczema causes intense itching, redness, scaling, and cracked skin. Our treatment restores the cutaneous lipid barrier and calms immune-mediated inflammation.",
        causes: ["Genetic Skin Barrier Impairment", "Environmental Allergens", "Stress & Weather Changes", "Harsh Detergents & Soaps"],
        symptoms: ["Dry, Flaky, Sensitive Skin", "Intense Pruritus (Itching)", "Red to Brownish-Gray Patches", "Cracked, Oozing Skin"],
        diagnosis: "Clinical evaluation, allergy patch test, and dermatoscopic examination.",
        treatments: ["Emollient Barrier Creams", "Topical Immunomodulators & Corticosteroids", "Narrowband UVB Phototherapy", "Allergen Avoidance Protocol"],
        faqs: [
            { question: "Is eczema contagious?", answer: "No, eczema is completely non-contagious." },
            { question: "How quickly can I get relief from itching?", answer: "Symptom control usually begins within 24-48 hours of starting targeted therapy." }
        ]
    },
    {
        id: "psoriasis",
        title: "Psoriasis Management",
        shortDesc: "Targeted systemic and topical solutions to control silver scale plaque buildup and inflammation.",
        category: "Dermatology",
        icon: FaShieldAlt,
        overview: "Psoriasis is an autoimmune condition accelerating skin cell turnover, resulting in silvery plaques on elbows, knees, scalp, and torso.",
        causes: ["Autoimmune T-Cell Hyperactivity", "Genetic Predisposition", "Skin Trauma (Koebner Phenomenon)", "Emotional Stress"],
        symptoms: ["Red Patches with Silvery Scales", "Dry Cracked Skin that May Bleed", "Thickened or Pitted Nails", "Itching & Burning Sensation"],
        diagnosis: "Dermatological clinical inspection and skin punch biopsy when required.",
        treatments: ["Topical Corticosteroids & Vitamin D Analogs", "Narrowband UVB Phototherapy", "Biologic Therapies", "Targeted Systemic Immunomodulators"],
        faqs: [
            { question: "Is psoriasis curable?", answer: "While chronic, modern targeted therapies achieve 90-100% clear skin remission for extended periods." }
        ]
    },
    {
        id: "vitiligo",
        title: "Vitiligo & Repigmentation Therapy",
        shortDesc: "Cutting-edge repigmentation protocols to restore natural skin color and melanocyte function.",
        category: "Dermatology",
        icon: FaMicroscope,
        overview: "Vitiligo occurs when melanocytes (pigment cells) are targeted by the immune system, leading to white patches.",
        causes: ["Autoimmune Melanocyte Destruction", "Oxidative Stress", "Genetic Factors"],
        symptoms: ["Milky-White Patches on Skin", "Premature Graying of Hair or Eyelashes", "Loss of Mucous Membrane Color"],
        diagnosis: "Wood's Lamp UV Light Examination and Dermoscopy.",
        treatments: ["Targeted Phototherapy (NB-UVB / Excimer)", "Topical Calcineurin Inhibitors", "Autologous Melanocyte Transfer (Surgery)"],
        faqs: [
            { question: "Does phototherapy hurt?", answer: "No, narrowband UVB phototherapy is gentle, comfortable, and painless." }
        ]
    },
    {
        id: "fungal",
        title: "Fungal Infections & Scabies",
        shortDesc: "Rapid diagnostic diagnosis and eradication of ringworm, tinea, candidiasis, and scabies infestations.",
        category: "Dermatology",
        icon: FaBandAid,
        overview: "Fungal skin infections (Tinea Corporis, Cruris, Versicolor) and scabies cause severe discomfort and spread easily without targeted antimicrobials.",
        causes: ["Dermatophyte Fungi", "Warm Humid Moisture", "Sarcoptes Scabiei Mites"],
        symptoms: ["Ring-Shaped Red Rash", "Severe Night Itching", "Interdigital Scaling & Blisters"],
        diagnosis: "KOH Wet Mount Microscopy and Woods Lamp Inspection.",
        treatments: ["Antifungal Medical Formulations", "Permethrin Anti-Scabetic Regimen", "Hygiene & Disinfection Counseling"],
        faqs: [
            { question: "How do I stop fungal infections from recurring?", answer: "Keep skin folds dry, wear breathable cotton, and complete the prescribed oral regimen." }
        ]
    },
    {
        id: "hair",
        title: "Hair Loss & PRP Restoration",
        shortDesc: "Platelet-Rich Plasma (PRP) therapy, trichoscopy, and clinical treatments for alopecia.",
        category: "Dermatology",
        icon: FaSpa,
        overview: "We offer advanced hair growth solutions for androgenetic alopecia, telogen effluvium, and patchy hair loss (alopecia areata).",
        causes: ["Hormonal DHT Sensitivity", "Nutritional Deficiencies", "Post-Illness Telogen Effluvium", "Genetic Pattern Baldness"],
        symptoms: ["Thinning Hair Partition", "Excessive Hair Shedding", "Receding Hairline", "Circular Bald Patches"],
        diagnosis: "Digital Trichoscopy scalp analysis and blood vitamin/hormone profiling.",
        treatments: ["Autologous PRP Hair Injections", "GFC (Growth Factor Concentrate) Therapy", "Minoxidil & Finasteride Formulations", "Scalp Microneedling"],
        faqs: [
            { question: "Is PRP hair treatment safe?", answer: "Yes! PRP uses your own blood platelets, making it 100% natural, safe, and biocompatible." }
        ]
    },
    {
        id: "cosmetic",
        title: "Cosmetic Dermatology & Chemical Peels",
        shortDesc: "Skin whitening, glow peels, anti-aging, hyperpigmentation removal, and medical facials.",
        category: "Dermatology",
        icon: FaMagic,
        overview: "Enhance your natural skin brilliance with medical-grade chemical peels, laser skin rejuvenation, hydra-dermabrasion, and pigment correction.",
        causes: ["Sun Damage (Photo-aging)", "Post-Inflammatory Hyperpigmentation", "Uneven Skin Tone & Dullness"],
        symptoms: ["Melasma Patches", "Fine Lines & Wrinkles", "Age Spots & Tan Lines"],
        diagnosis: "Visia-style digital skin glow analysis.",
        treatments: ["Yellow Peel & Q-Switched Nd:YAG Laser", "Hydra Glow Medical Facial", "Glutathione Radiance Therapy", "Laser Skin Tightening"],
        faqs: [
            { question: "Is there downtime after a chemical peel?", answer: "Mild peels have zero downtime! You can resume normal activities immediately." }
        ]
    }
];

export const radiologyServices = [
    {
        id: "xray",
        title: "Digital Radiography (X-Ray)",
        shortDesc: "High-precision ultra-low radiation digital X-ray with instant high-resolution digital reports.",
        category: "Radiology",
        icon: FaXRay,
        overview: "State-of-the-art Digital X-Ray technology delivering clear skeletal, chest, and joint imaging with minimal exposure radiation.",
        purpose: "Evaluates bone fractures, joint dislocations, chest infections (Pneumonia/TB), spinal alignment, and abdominal air levels.",
        preparation: "Remove metal objects, jewelry, and belts. Fasting is generally not required unless specified for abdominal series.",
        procedure: "Positioned comfortably against the digital detector plate. Exposure takes less than a fraction of a second.",
        faqs: [
            { question: "When will I get my Digital X-Ray report?", answer: "Digital films and printed reports are provided within 20 to 30 minutes!" },
            { question: "Is digital X-ray safer than traditional film?", answer: "Yes, digital radiography reduces radiation exposure by up to 75%." }
        ]
    },
    {
        id: "ultrasound",
        title: "High-Resolution Ultrasound (USG)",
        shortDesc: "Comprehensive abdominal, pelvic, obstetric, thyroid, and soft tissue ultrasound imaging.",
        category: "Radiology",
        icon: FaHeartbeat,
        overview: "Painless, non-invasive acoustic imaging providing real-time high-definition visual examination of internal organs, fetal development, and soft tissues.",
        purpose: "Diagnostic assessment of liver, gallbladder stones, kidney stones, appendix, uterus, ovaries, thyroid nodule, and pregnancy progress.",
        preparation: "Abdomen scan requires 4-6 hours fasting. Pelvic scan requires a full urinary bladder (drink 1 liter of water 1 hour prior).",
        procedure: "Hypoallergenic gel is applied to the skin, and a high-frequency probe is moved smoothly over the region.",
        faqs: [
            { question: "Does ultrasound use radiation?", answer: "No, Ultrasound uses harmless high-frequency sound waves, making it 100% safe for pregnant women." }
        ]
    },
    {
        id: "doppler",
        title: "Color Doppler Vascular Scans",
        shortDesc: "Advanced Doppler ultrasound to assess arterial and venous blood flow in limbs, neck, and fetus.",
        category: "Radiology",
        icon: FaStethoscope,
        overview: "Color Doppler measures the speed and direction of blood flow through blood vessels, identifying blockages, deep vein thrombosis (DVT), or fetal placental perfusion.",
        purpose: "Detecting Deep Vein Thrombosis (DVT), Varicose Veins, Peripheral Arterial Disease, Carotid Stenosis, and Fetal Growth Restricted Doppler.",
        preparation: "Comfortable loose clothing. Specific renal Doppler scans require overnight fasting.",
        procedure: "Specialized color sound wave transducer evaluates vessel luminal velocity and wave patterns.",
        faqs: [
            { question: "How long does a Doppler scan take?", answer: "A thorough Doppler scan typically takes 20 to 30 minutes." }
        ]
    }
];

const services = [
    ...dermatologyServices,
    ...radiologyServices
];

export default services;