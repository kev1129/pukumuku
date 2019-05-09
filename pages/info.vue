<template>
  <v-container class="container">
    <div class="section infomation">
      <base-title class="section_title" :title="infoTitle"></base-title>
      <div class="map">
        <v-layout  v-resize="onResize" align-center justify-center>
          <v-flex xs12 sm12 md12 lg12>
            <base-map :map-width="windowSize.x" :map-height="windowSize.y"></base-map>
          </v-flex>
        </v-layout>
      </div>
      <div class="infomation">
        <v-layout align-start>
          <v-flex xs12 sm12 md12 lg8>
            <base-subtitle :sub-title="store"></base-subtitle>
            <base-info></base-info>
          </v-flex>
        </v-layout>
      </div>
    </div>
  </v-container>
</template>
    
<script>
import BaseTitle from '~/components/BaseTitle.vue'
import BaseSubtitle from '~/components/BaseSubtitle.vue'
import BaseInfo from '~/components/BaseInfo.vue'
import BaseMap from '~/components/BaseMap.vue'
import BaseInstagram from '~/components/BaseInstagram.vue'

export default {
  layouts: 'default',
  components: {
    BaseTitle,
    BaseSubtitle,
    BaseInfo,
    BaseMap,
    BaseInstagram
  },
  data () {
    return {
      infoTitle: 'INFOMATION',
      store: '店舗情報',
      windowSize: {
        x: 0,
        y: 0,
      },
    }
  },
  mounted() {
    this.onResize()
  },
  methods: {
    onResize () {
      this.windowSize = { x: window.innerWidth * 0.7, y: window.innerHeight * 0.7}
    }
  },
  asyncData({ env }) {
    return { notice: env.notice }
    }
}
</script>

<style lang="scss" scoped>
.container {
  padding-top: 0;
}
.map {
  margin-bottom: 64px;
}
</style>
