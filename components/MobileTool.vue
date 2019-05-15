<template>
  <v-layout
    align-end
    justify-end
    class="tool_bar"
  >
    <v-flex hidden-lg-and-up>
      <mobile-nav></mobile-nav>
    </v-flex>
  </v-layout>
</template>
<script>

import MobileNav from '~/components/MobileNav.vue'

export default {
	components: {
		MobileNav
	}
}
</script>

<style lang="scss" scoped>
.tool_bar {
  display: block;
  width: 100%;
	background:#ec1810;
}
</style>
