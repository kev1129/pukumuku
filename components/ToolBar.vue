<template>
  <v-toolbar
		class="tool-bar"
		flat
		style="margin-top: 24px;"
	>
    <v-toolbar-title class="nav-title black--text">
			<nuxt-link to="/" class="link">
				{{ siteTitle }}
			</nuxt-link>
		</v-toolbar-title>
    <v-spacer></v-spacer>
		<v-toolbar-items>
      <v-btn 
				flat
				v-for="(item, index) in navs" v-bind:key="index"
				class="nav-items__btn"
			>
				<nuxt-link :to="item.link" class="link nav-items__link">
					{{item.title}}
				</nuxt-link>
			</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
	name: 'ToolBar',
	data () {
		return {
			siteTitle: 'PANKOUBOU PUKUMUKU',
			navs: [
				{title: 'メニュー', link: './menu'},
				{title: 'グッツ', link: './item'},
				{title: '店舗情報', link: './info'}
			]
		}
	}
}
</script>

<style lang="scss" scoped>
// ホバーしたらフォントカラーがメインカラーになるようにする
.v-btn:hover {
	opacity: 0.6;
}
.v-btn:before {
	width:0%;
}
.v-btn:before:hover {
	opacity: 0;
}
.link {
	text-decoration: none;
	color: #000;
}

.tool-bar {
	border-radius: 50px;
	max-width: 90vw;
	margin: auto;
	background: #fff;

	.nav-title {
		color: #000;
		font-weight: bold;
		letter-spacing: 1px;
	}
	.nav-items__btn {
		border-radius: 50px;
		font-size: 1rem;
		.nav-items__link {
			font-weight: bold;
			padding: 8px;
		}
	}
}
</style>
