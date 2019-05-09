import pkg from './package'
const fs = require('fs');
const CdJson = JSON.parse(fs.readFileSync('static/json/cds.json'));
const MenuTopJson = JSON.parse(fs.readFileSync('static/json/menu-top.json'));
const MenuMainJson = JSON.parse(fs.readFileSync('static/json/menu-main.json'));
const NoticeJson = JSON.parse(fs.readFileSync('static/json/notice.json'));
const flyerJson = JSON.parse(fs.readFileSync('static/json/flyer.json'));

export default {
  mode: [
    'universal',
    'nuxt-fontawesome'
  ],

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    script: [
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.8.1/css/all.css', integrity: 'sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf', crossorigin: 'anonymous' },
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {src:"~plugins/vue2-google-maps.js"}
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/vuetify',
    'nuxt-webfontloader'
  ],

  /*
  ** Build configuration
  */
 build: {
   /*
    ** You can extend webpack config here
    */
   extend(config, ctx) {
      config.externals = config.externals || [];
      if (!ctx.isClient) {
        // This instructs Webpack to include `vue2-google-maps`'s Vue files
        // for server-side rendering
        config.externals.splice(0, 0, function (context, request, callback) {
          if (/^vue2-google-maps($|\/)/.test(request)) {
            callback(null, false)
          } else {
            callback()
          }
        })
      }
    }
  },
  vendor:["vue2-google-maps"],
  env: {
    cds: CdJson,
    menuMain: MenuMainJson,
    menuTop: MenuTopJson,
    notice: NoticeJson,
    flyer: flyerJson
  },
  fontawesome: {
    imports: [
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['fas']
      }
    ]
  },
  webfontloader: {
    google: {
      families: [
        // title EN
        'Francois+One',
        // text JP
        'Sawarabi+Gothic'
      ]
    }
  },
}