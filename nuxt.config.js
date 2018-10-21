import path from 'path'
import PurgecssPlugin from 'purgecss-webpack-plugin'
import glob from 'glob-all'
import whitelister from 'purgecss-whitelister'

class TailwindExtractor {
	static extract (content) {
		return content.match(/[A-Za-z0-9-_:\/]+/g) || []
	}
}

module.exports = {
	mode: 'spa',
	head: {
		meta: [
			{ name: 'twitter:card', content: 'summary_large_image' },
			{ name: 'twitter:domain', content: 'https://horacekeung.github.io/why-vue/' },
			{ property: 'og:image', name: 'twitter:image', itemprop: 'image primaryImageOfPage', content: 'https://horacekeung.github.io/why-vue/icon.png' },
			{ property: 'og:image:width', content: '300' },
			{ property: 'og:image:height', content: '300' },
		],
		script: process.env.DEPLOY_ENV === 'GH_PAGES' ? [{src: '/why-vue/gh-spa.js'}] : []
	},
	loading: false,
	manifest: {
		name: 'Why Vue',
		short_name: 'Why Vue',
		theme_color: '#41B883'
	},
	workbox: {
		runtimeCaching: [{urlPattern: '/why-vue/_nuxt/.*'}]
	},
	modules: ['@nuxtjs/pwa'],
	build: {
		extractCSS: true,
		// Run ESLint on save
		extend(config, { isDev, isClient }) {
			if (isDev && isClient) {
				config.module.rules.push({
					enforce: 'pre',
					test: /\.(js|vue)$/,
					loader: 'eslint-loader',
					exclude: /(node_modules)/
				})
			}
			// Cleanup CSS with PurgeCSS
			if (!isDev) {
				config.plugins.push(
					new PurgecssPlugin({
						paths: glob.sync([
							path.join(__dirname, './pages/**/*.vue'),
							path.join(__dirname, './layouts/**/*.vue'),
							path.join(__dirname, './components/**/*.vue')
						]),
						extractors: [{
							extractor: TailwindExtractor,
							extensions: ['vue']
						}],
						whitelist: whitelister(['./assets/css/*.css', './node_modules/vue-backtotop/src/styles.css'])
					})
				)
			}
		}
	},
	css: ['@/assets/css/global.css'],
	plugins: ['~/plugins/main.js'],
	router: {
		base: process.env.DEPLOY_ENV === 'GH_PAGES' ? '/why-vue/' : ''
	},
	env: {
		static: process.env.DEPLOY_ENV === 'GH_PAGES' ? 'https://horacekeung.github.io/why-vue/' : '/'
	}
}
