<template>
        <v-layout column>
          <!-- info and map -->
          <v-layout justify-center wrap row>
            <v-flex xs11 sm10 md6 lg5>
              <base-info></base-info>
            </v-flex>
            <v-flex x11 sm10 md6 lg5>          
              <base-map></base-map>
            </v-flex>
          </v-layout>
          <!-- notice -->
          <v-layout align-center justify-center wrap row>
            <v-flex
              v-for="(item, index) in notice"
              :key="index"
            >
              <base-image :image-url="item.url"></base-image>
            </v-flex>
          </v-layout>
        </v-layout>
</template>
    
<script>
import ToolBar from '~/components/ToolBar.vue'
import BaseInfo from '~/components/BaseInfo.vue'
import BaseMap from '~/components/BaseMap.vue'
import BaseImage from '~/components/BaseImage.vue'
export default {
  layouts: 'default',
  components: {
    ToolBar,
    BaseInfo,
    BaseMap,
    BaseImage
  },
  asyncData({ env }) {
    return { notice: env.notice }
    }
}
</script>

<style lang="scss" scoped>
.tool-bar {
  margin-top: 40px;
}
</style>
