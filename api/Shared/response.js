// Standardised HTTP response helpers
exports.ok        = (context, data) => { context.res = { status: 200, body: data }; };
exports.created   = (context, data) => { context.res = { status: 201, body: data }; };
exports.badReq    = (context, msg)  => { context.res = { status: 400, body: { error: msg } }; };
exports.notFound  = (context, msg)  => { context.res = { status: 404, body: { error: msg } }; };
exports.serverErr = (context, err)  => { context.res = { status: 500, body: { error: err.message } }; };
