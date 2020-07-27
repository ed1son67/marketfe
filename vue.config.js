// vue.config.js
const path = require('path');

function resolve(dir) {
    return path.join(__dirname, dir);
}

module.exports = {
    chainWebpack: (config) => {
        config.resolve.alias
            .set('@', resolve('src'));
    },
    devServer: {
        proxy: {
            '/api': {
                pathRewrite: {
                    '^/api': ''
                },
                changeOrigin: true,
                target: 'http://localhost:8090'
            }
        }
    }
};
