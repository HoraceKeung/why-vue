import whitelister from 'purgecss-whitelister'

export default {
	mode: 'spa',
	head: {
		script: process.env.DEPLOY_ENV === 'GH_PAGES' ? [{src: '/why-vue/gh-spa.js'}] : []
	},
	loading: false,
	pwa: {
		meta: {
			description: 'A collection of resources that more or less support the idea of using Vue.js.',
			twitterCard: 'summary_large_image',
			ogHost: 'https://horacekeung.github.io/why-vue/'
		},
		manifest: {
			name: 'Why Vue',
			short_name: 'Why Vue',
			theme_color: '#41B883'
		}
	},
	modules: ['nuxt-purgecss', '@nuxtjs/pwa'],
	purgeCSS: {
		mode: 'postcss',
		whitelist: () => whitelister(['./assets/css/*.css', './node_modules/vue-backtotop/src/styles.css'])
	},
	build: {
		postcss: {
			plugins: {
				tailwindcss: './tailwind.config.js'
			}
		},
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
