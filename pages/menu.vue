<template>
  <v-app>
    <tool-bar></tool-bar>
    <v-content>
      <v-container>
        <base-bread></base-bread>
      </v-container>
    </v-content>
  </v-app>
</template>


<script>
import ToolBar from '~/components/ToolBar.vue'
import BaseBread from '~/components/BaseBread.vue'
export default {
  components: {
    ToolBar,
    BaseBread
  }
}
</script>
