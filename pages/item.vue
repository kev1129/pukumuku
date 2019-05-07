<template>
  <v-app>
    <tool-bar></tool-bar>
    <v-content>
      <v-container grid-list-xl>
        <base-subtitle :sub-title="cdTitle"></base-subtitle>
        <v-layout align-center justify-center row>
          <v-flex
            v-for="(item, index) in cds"
            :key="index"
            xs11 sm10 md6 lg5
          >
            <base-cd 
              :cd-url="item.url"
            ></base-cd>
            <base-music
              :cd-mp3="item.mp3"
            ></base-music>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import ToolBar from '~/components/ToolBar.vue'
import BaseCd from '~/components/BaseCd.vue'
import BaseMusic from '~/components/BaseMusic.vue'
import BaseSubtitle from '~/components/BaseSubtitle.vue'
export default {
  components: {
    ToolBar,
    BaseCd,
    BaseMusic,
    BaseSubtitle
  },
  data () {
    return {
      cdTitle: 'プクムクズのCD'
    }
  },
  asyncData({ env }) {
    return { cds: env.cds }
  },
}
</script>
