// Simple console logger
exports.log  = (...a) => console.log('[INFO]',  ...a);
exports.warn = (...a) => console.warn('[WARN]',  ...a);
exports.err  = (...a) => console.error('[ERROR]', ...a);
