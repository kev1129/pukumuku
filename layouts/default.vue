<template>
  <v-app>
    <v-navigation-drawer app><side-bar></side-bar></v-navigation-drawer>
    <v-content>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer></v-footer>
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


<style>
/* google fonts */

.fonts_text { font-family: "M PLUS 1p"; }
.fonts_title { font-family: 'Anton', sans-serif; }

/* common */

html {
  font-family: "M PLUS 1p", 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
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
</style>
