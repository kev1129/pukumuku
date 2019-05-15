<template>
  <v-app>
    <v-navigation-drawer
      app
    >
      <side-bar></side-bar>
    </v-navigation-drawer>
    <v-content>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import SideBar from '~/components/SideBar.vue'

export default {
  components: {
    SideBar,
  }
}
</script>

<style lang="scss">
/* color */
// #ec1810

/* common */
.v-content__wrap {
  width: none;
  max-width: none;
}
@media only screen and (max-width: 1264px) {
  .container {
    padding: 0;
  }
  .mobile_center {
    text-align: center;  
  }
}

html {
  font-family: 'ヒラギノ丸ゴ ProN', 'Futura','Francois One', 'Sawarabi Gothic', "M PLUS 1p", 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background: #fff;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.v-navigation-drawer__border {
  display: none;
}
.theme--light.application {
  background: #fff;
}
/* セクション毎に .section をつけ、margin-bottom を調整  */
.section {
  margin-bottom: 32px;
}
/* セクションごとのタイトルに .section_title をつけて、marginを調整 */
.section_title {
  margin-bottom: 16px;
}    
</style>
