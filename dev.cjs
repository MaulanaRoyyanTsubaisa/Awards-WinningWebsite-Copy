// dev.js (ESM-compatible)
const { exec } = require("child_process");
const os = require("os");
const qrcode = require("qrcode-terminal");

const interfaces = os.networkInterfaces();
let lanIP = "127.0.0.1";
for (let name in interfaces) {
  for (let iface of interfaces[name]) {
    if (iface.family === "IPv4" && !iface.internal) {
      lanIP = iface.address;
    }
  }
}

const PORT = 5173;
const url = `http://${lanIP}:${PORT}`;

console.log(`\n🔗 Local Network URL: ${url}`);
qrcode.generate(url, { small: true });

// exec wrapper untuk ESM
const viteProcess = exec(`npx vite --host 0.0.0.0 --port ${PORT}`);
viteProcess.stdout.pipe(process.stdout);
viteProcess.stderr.pipe(process.stderr);
