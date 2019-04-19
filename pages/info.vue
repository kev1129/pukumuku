<template>
  <v-app>
    <tool-bar></tool-bar>
    <v-content>
      <v-container>
        <v-layout align-center justify-center wrap column>
          <v-flex xs11 sm10 md6 lg5>
            <base-info></base-info>
          </v-flex>
          <v-flex x11 sm10 md6 lg5>          
            <base-map></base-map>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

    
<script>
import ToolBar from '~/components/ToolBar.vue'
import BaseInfo from '~/components/BaseInfo.vue'
import BaseMap from '~/components/BaseMap.vue'
export default {
    components: {
        ToolBar,
        BaseInfo,
        BaseMap
    }
}
</script>
