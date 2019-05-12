<template>
  <v-container fluid>
    <div class="sidebar">
      <v-layout align-center justify-center>
        <div class="sidebar__icon">
          <v-img src="img/icon-mono.jpg" class="sidebar__icon_img" aspect-ratio="0.75" contain></v-img>
          <p class="sidebar__icon_title site-title"><strong>{{siteTitle}}</strong><br>Since 1999</p>
        </div>
      </v-layout>
      <v-container grid-list-md>
        <v-layout column class="menu__list">
          <v-flex
            v-for="(item, index) in menu"
            v-bind:key="index"
            class="menu"
          >
            <nuxt-link :to="item.link" class="menu__item">{{item.title}}</nuxt-link>
          </v-flex>
        </v-layout>
        <v-layout align-center justify-center column>
          <v-flex>
          <a href="https://www.instagram.com/pankouboupukumuku/" class="instagram" target="_blank"><i class="fab fa-instagram"></i> Follow instagram</a>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
  </v-container>
</template>

<script>
export default {
	name: 'ToolBar',
	data () {
		return {
			siteTitle: 'PANKOUBOU PUKUMUKU',
			menu: [
				{title: 'HOME', link: '/'},
				{title: 'MENU', link: 'menu'},
				{title: 'MUSIC', link: 'music'},
				// {title: 'NEWS', link: 'news'},
				{title: 'INFOMATION', link: 'info'}
			]
		}
	}
}
</script>

<style lang="scss" scoped>
.sidebar__icon {
  background: #000;
  width: 100%;
  padding: 6% 3% 3% 0%;
  font-family: 'Francois One';

  .sidebar__icon_img {
    max-width: 260px;
    margin-bottom: 8px;
  }
  .sidebar__icon_title {
    text-align: center;
    color: #fff;
    margin-bottom: 4px;
  }
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
  margin-top: 12px;
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