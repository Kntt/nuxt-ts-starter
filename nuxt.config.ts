export default {
    env: {
        baseUrl: process.env.BASE_URL || `http://localhost:3000`
    },
    head: {
        title: 'nuxt-ts-template',
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content: 'Nuxt.js project'
            }
        ],
        link: [
            {
                rel: 'icon',
                type: 'image/x-icon',
                href: '/favicon.ico'
            }
        ]
    },
    /*
   ** Customize the progress-bar color
   */
    loading: { color: '#3B8070' },
    /*
   ** Build configuration
   */
    css: ['~/assets/css/main.css'],
    modules: ['@nuxtjs/axios'],
    plugins: [],
    axios: {},
    srcDir: './src',
    build: {
        extend (config: any, ctx: any) {
            if (ctx.isDev && ctx.isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(ts|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                })
            }
        }
    },
    server: {
        port: 8080,
        host: '0.0.0.0'
    }
}
