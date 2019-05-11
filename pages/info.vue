<template>
    <div class="section infomation">
      <base-title class="section_title" :title="infoTitle"></base-title>
      <v-container class="container">
        <div class="section infomation">
          <div class="map">
            <base-subtitle :sub-title="map"></base-subtitle>
            <base-text :text="mapText"></base-text>
            <v-layout  v-resize="onResize" align-center justify-center>
              <v-flex xs12 sm12 md12 lg12>
                <base-map :map-width="windowSize.x" :map-height="windowSize.y"></base-map>
              </v-flex>
            </v-layout>
          </div>
          <div class="infomation">
            <v-container grid-list-md>
              <v-layout align-start row wrap>
                <v-flex xs12 sm12 md12 lg7>
                  <base-subtitle :sub-title="store" class="infomation__sub_title"></base-subtitle>
                  <base-info></base-info>
                </v-flex>
                <v-flex xs12 sm12 md12 lg5>
                  <base-subtitle :sub-title="instagram" class="infomation__sub_title"></base-subtitle>
                  <base-instagram></base-instagram>
                </v-flex>
              </v-layout>
            </v-container>
          </div>
        </div>
        <!-- <div class="news">
          bag
          torowa
          haichi
        </div> -->
      </v-container>
    </div>
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
      map: 'MAP',
      mapText: '最寄り駅は「笹塚駅」「中野富士見町」「中野駅」。中野からバスで「新山小学校前」。笹塚から徒歩で15分程。',
      store: '店舗情報',
      infoText: 'メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。メニューの紹介。'
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
