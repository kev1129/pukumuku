<template>
  <v-app>
    <tool-bar></tool-bar>
    <v-content>
      <v-container>
        <v-layout align-center justify-center row>
          <base-cd></base-cd>
          <base-music></base-music>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import ToolBar from '~/components/ToolBar.vue'
import BaseCd from '~/components/BaseCd.vue'
import BaseMusic from '~/components/BaseMusic.vue'
export default {
  components: {
    ToolBar,
    BaseCd,
    BaseMusic
  }
}
</script>
