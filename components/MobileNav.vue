<template>
  <v-layout>
    <v-container>
      <v-layout align-end justify-end>
        <v-btn
          flat
          class="btn"
          @click.stop="drawer = !drawer"
        >
          <span class="bar__text">MENU</span><i class="fas fa-bars bar"></i>
        </v-btn>
      </v-layout>
    </v-container>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <side-bar></side-bar>
    </v-navigation-drawer>
  </v-layout>
</template>
<script>
import SideBar from '~/components/SideBar.vue'

  export default {
    components: {
      SideBar
    },
    data () {
      return {
        drawer: null,
        items: [
          { title: 'Home', icon: 'dashboard' },
          { title: 'About', icon: 'question_answer' }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .btn {
    color: #000;
    font-size: 2rem;
    .bar {
      margin-left: 12px;
    }
    .bar__text {
      font-size: 1.4rem;
    }
  }
</style>
