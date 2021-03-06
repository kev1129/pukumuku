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
      { name: 'description', content: '中野区南台のパン屋さん「パン工房 プクムク」のホームページ。' },
      { name: 'og:url', content: 'https://shinadokebukawa.com/pankouboupukumuku' },
      { name: 'og:title', content: 'パン工房 プクムク - 中野区南台のパン屋さん' },
      { name: 'og:description', content: '中野区南台のパン屋さん「パン工房 プクムク」のホームページ。' },
      { name: 'og:image', content: 'img/icon.jpg' },
      { name: 'og:site_name', content: 'パン工房 プクムク - 中野区南台のパン屋さん' },
      { name: 'twitter:site', content: 'パン工房 プクムク - 中野区南台のパン屋さん' },
      { name: 'og:locale', content: 'ja_JP' },
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
    },
    extractCSS: true
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
        'M+PLUS+Rounded+1c',
        'Baloo+Bhai',
        'Londrina+Solid',
        'Nunito',
        'Asap',
        'Nunito+Sans:900',
        'Nunito:400,900',
        'Open+Sans',
        // title EN
        'Francois+One',
        // text JP
        'Sawarabi+Gothic'
      ]
    }
  },
}