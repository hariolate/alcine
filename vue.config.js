module.exports = {
    publicPath: "./",
    configureWebpack: {
        resolve: {
            alias: {
                vue$:'vue/dist/vue.esm.js'
            }
        }
    },
    devServer: {
        proxy: {
            '/api': {
                target: 'http://158.247.202.150:80/api/',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
};