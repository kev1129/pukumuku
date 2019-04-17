<template>
  <v-toolbar
		class="tool-bar"
		flat
	>
    <v-toolbar-title class="nav-title black--text">
			<router-link to="/" class="link">
				{{ siteTitle }}
			</router-link>
		</v-toolbar-title>
    <v-spacer></v-spacer>
		<v-toolbar-items v-for="(item, index) in nav" v-bind:key="index">
      <v-btn flat class="nav-items__btn">
				<router-link v-bind:to="item.link" class="link nav-items__link">
					{{item.title}}
				</router-link>
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
			nav: [
				{title: 'メニュー', link: '/menu'},
				{title: 'プクムクズのCD', link: '/cd'},
				{title: 'お店の情報', link: '/info'}
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
