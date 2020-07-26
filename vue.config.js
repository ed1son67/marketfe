// vue.config.js
module.exports = {
    devServer: {
        proxy: {
            '/api': {
                changeOrigin: true,
                target: 'http://localhost:4000'
            }
        }
    }
}
