import pkg from './package'
const fs = require('fs');
const CdJson = JSON.parse(fs.readFileSync('static/json/cds.json'));
const MenuJson = JSON.parse(fs.readFileSync('static/json/menu.json'));
const MenuNothingJson = JSON.parse(fs.readFileSync('static/json/menu-nothing-milk-egg.json'));
const MenuRankingJson = JSON.parse(fs.readFileSync('static/json/menu-ranking.json'));
const MenuBananaJson = JSON.parse(fs.readFileSync('static/json/menu-use-banana.json'));
const MenuEggJson = JSON.parse(fs.readFileSync('static/json/menu-use-egg.json'));
const MenuMilkJson = JSON.parse(fs.readFileSync('static/json/menu-use-milk.json'));
const MenuPeanutsJson = JSON.parse(fs.readFileSync('static/json/menu-use-peanuts.json'));
// const MenuSasumeJson = JSON.parse(fs.readFileSync('assets/json/menu-use-sasume.json'));
const MenuWalnatJson = JSON.parse(fs.readFileSync('static/json/menu-use-walnat.json'));
const NoticeJson = JSON.parse(fs.readFileSync('static/json/notice.json'));

export default {
  mode: 'universal',

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
    {src:"~plugins/vue2-google-maps.js"},
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/vuetify'
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
    menu: MenuJson,
    menuRanking: MenuRankingJson,
    menuNothing: MenuNothingJson,
    menuBanana: MenuBananaJson,
    menuEgg: MenuEggJson,
    menuMilk: MenuMilkJson,
    menuPeanuts: MenuPeanutsJson,
    // MenuSasume: MenuSasumeJson,
    menuWalnat: MenuWalnatJson,
    notice: NoticeJson
  }
}
