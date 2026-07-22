// Form validation helpers
export const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
export const isRequired = (v) => v !== null && v !== undefined && v.toString().trim() !== '';
