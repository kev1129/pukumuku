<template>
  <v-container>
    <base-title class="section_title" :title="musicTitle"></base-title>
    <v-layout align-center justify-center row wrap>
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
      musicTitle: 'MUSIC'
    }
  },
  asyncData({ env }) {
    return { cds: env.cds }
  },
}
</script>
