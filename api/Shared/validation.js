// Shared validation utilities
exports.isEmail    = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
exports.isRequired = (v) => v !== null && v !== undefined && v.toString().trim() !== '';
