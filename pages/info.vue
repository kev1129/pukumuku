<template>
  <v-app>
    <tool-bar class="tool-bar"></tool-bar>
    <div class="section">
      <base-insta></base-insta>
    </div>
    <v-content>
      <v-container grid-list-xl>
        <div class="section">
          <base-subtitle :sub-title="noticeTitle"></base-subtitle>
          <v-layout align-center justify-center wrap row>
            <v-flex
              v-for="(item, index) in notice"
              :key="index"
              xs11 sm10 md6 lg5
            >
              <base-image
                :image-url="item.url"
                class="img"
              ></base-image>
            </v-flex>
          </v-layout>
        </div>
        <base-subtitle :sub-title="infoTitle"></base-subtitle>
        <div class="section">
          <v-layout align-center justify-center>
            <v-flex xs11 sm10 md6 lg6>
              <base-info></base-info>
            </v-flex>
          </v-layout>
        </div>
      </v-container>
    </v-content>
    <div class="section">
      <base-subtitle :sub-title="mapTitle"></base-subtitle>
      <base-map></base-map>
    </div>
  </v-app>
</template>
    
<script>
import ToolBar from '~/components/ToolBar.vue'
import BaseInfo from '~/components/BaseInfo.vue'
import BaseMap from '~/components/BaseMap.vue'
import BaseImage from '~/components/BaseImage.vue'
import BaseInsta from '~/components/BaseInsta.vue'
import BaseTitle from '~/components/BaseTitle.vue'
import BaseSubtitle from '~/components/BaseSubtitle.vue'

export default {
  components: {
    ToolBar,
    BaseInfo,
    BaseMap,
    BaseImage,
    BaseInsta,
    BaseTitle,
    BaseSubtitle
  },
  data () {
    return {
      noticeTitle: 'お知らせ',
      infoTitle: '店舗情報',
      mapTitle: '地図'
    }
  },
  asyncData({ env }) {
    return { notice: env.notice }
    }
}
</script>

<style lang="scss" scoped>
.tool-bar {
  margin-top: 40px;
  margin-bottom: 56px;
}
.section {
  margin-bottom: 64px;
}
.map {
  margin-bottom: 100px;
}
</style>
