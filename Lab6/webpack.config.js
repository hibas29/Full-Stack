const path = require('path');

module.exports = {
    mode: 'development',
    target: 'node',
    entry: './Gateway/gateway/gateway.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    }
};