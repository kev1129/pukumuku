<template>
  <div id="app">
    <v-app>
      <v-content>
        <tool-bar class="tool-bar"></tool-bar>
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue'
export default {
  name: 'App',
  components: {
    ToolBar
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 24px;
}
</style>
