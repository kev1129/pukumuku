<template>
  <v-app>
    <tool-bar></tool-bar>
    <v-content>
      <v-container>
        <v-layout align-center justify-center wrap column>
          <v-layout justify-center wrap row>
            <v-flex xs11 sm10 md6 lg5>
              <base-info></base-info>
            </v-flex>
            <v-flex x11 sm10 md6 lg5>          
              <base-map></base-map>
            </v-flex>
          </v-layout>
          <v-layout align-center justify-center wrap row="">
            <v-flex
              xs11 sm10 md6 lg5
              v-for="(item, index) in notices"
              :key="index"
            >
              <base-notice :notice-image="item.image"></base-notice>
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
    data () {
      return {
        notices: [
          {image: 'assets/img/notice/1.jpg'},
          {image: 'assets/img/notice/2.jpg'}
        ]
      }
    }
}
</script>
