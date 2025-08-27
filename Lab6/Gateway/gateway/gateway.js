const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const fs = require('fs');
const path = require('path');
const cron = require('node-cron');

const port = 3000;
const app = express();
const time = new Date();

// Log directory and file setup
const directory = path.join(__dirname, 'log');
fs.mkdirSync(directory, { recursive: true }); // ensures folder exists

const fileName = `log_${time.getUTCDate()}_${time.getMilliseconds()}.txt`;
const logPath = path.join(directory, fileName);
const writestream = fs.createWriteStream(logPath, "utf-8");

// Middleware for logging headers
app.use(express.json());
app.use((req, res, next) => {
    writestream.write(JSON.stringify(req.headers) + '\n');
    next();
});

// Proxy routes
app.get('/Student', createProxyMiddleware({
    target: 'http://localhost:4001',
    changeOrigin: true,
    pathRewrite: { '^/Student': '/getStudent' }
}));

app.get('/Teacher', createProxyMiddleware({
    target: 'http://localhost:4002',
    changeOrigin: true,
    pathRewrite: { '^/Teacher': '/getTeacher' }
}));

// Cron job to clear logs hourly
cron.schedule('0 * * * *', () => {
    fs.readdir(directory, (err, files) => {
        if (err) return;
        files.forEach(file => {
            const filePath = path.join(directory, file);
            fs.unlink(filePath, () => {});
        });
    });
});

// Start server
app.listen(port, () => {
    console.log(`Gateway is running on ${port}`);
});