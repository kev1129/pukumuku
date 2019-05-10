<template>
<v-container>
    <v-layout align-center justify-center>
      <v-flex>
        <base-totop></base-totop>
      </v-flex>
    </v-layout>
</v-container>
</template>

<script>
import BaseTotop from '~/components/BaseTotop.vue'

export default {
  components: {
    BaseTotop
  },
  data: () => ({
		menu: [
			{title: 'HOME', link: '/'},
			{title: 'MENU', link: 'menu'},
			{title: 'MUSIC', link: 'music'},
			// {title: 'NEWS', link: 'news'},
			{title: 'INFOMATION', link: 'info'}
		]
  })
}
</script>

<style lang="scss" scoped>
.footer {
  background: #ffffff;
}
.menu {
  text-align: center;
  font-family: 'Francois One';
  font-size: 1.2rem;
  .menu__item {
    color: #000;
    text-decoration: none;
  }
  .menu__item:hover {
    opacity: .4;
  }
}
.instagram {
  display: block;
  color: #000;
  margin-top: 24px;
  font-family: 'Francois One';
  text-decoration: none;
  text-align: center;
  .fab {
    font-size: 1.2rem;
  }
}
.instagram:hover {
  opacity: .4;
}
</style>