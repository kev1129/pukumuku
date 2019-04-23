<template>
  <v-app>
    <tool-bar></tool-bar>
    <v-content>
      <v-container>
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
              <base-notice :notice-url="item.url"></base-notice>
            </v-flex>
          </v-layout>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>
    
<script>
import ToolBar from '~/components/ToolBar.vue'
import BaseInfo from '~/components/BaseInfo.vue'
import BaseMap from '~/components/BaseMap.vue'
import BaseNotice from '~/components/BaseNotice.vue'
export default {
components: {
  ToolBar,
  BaseInfo,
  BaseMap,
  BaseNotice
},
asyncData({ env }) {
  return { notice: env.notice }
  }
}
</script>
