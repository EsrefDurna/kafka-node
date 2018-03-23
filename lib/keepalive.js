// Ignore NAPI warnings
const oldWarnings = process.emitWarning;
process.emitWarning = () => {};
const keepAlive = require('net-keepalive');
process.emitWarning = oldWarnings;
module.exports = keepAlive;
