<template>
	<div class="flex flex-col pt-16 overflow-x-hidden">
		<div class="bg-white h-16 fixed pin border-b border-police-blue shadow-md z-50">
			<div class="container h-full flex">
				<div class="my-auto mr-2 sm:mr-4"><img class="h-8 sm:h-12 min-w-8 cursor-pointer" :src="`${staticPath}icon.png`" alt="vue" @click="searchWord=null"></div>
				<h1 v-show="!showMobileSearch" class="mt-5 sm:mt-3 text-xl sm:text-3xl whitespace-no-wrap">Why Vue</h1>
				<div class="ml-auto my-auto hidden sm:block">
					<input v-model="searchWord" class="form-control border-police-blue w-48" placeholder="Search">
				</div>
				<div class="relative hidden sm:block"><div class="absolute pin-r h-full flex pr-2">
					<img class="h-4 min-w-4 my-auto" src="~assets/img/search.png" alt="search">
				</div></div>
				<div class="ml-auto my-auto sm:hidden flex">
					<input v-model="searchWord" :disabled="!showMobileSearch" :class="'form-control transition '+(showMobileSearch?'w-48 border-police-blue':'w-0 border-white')" placeholder="Search">
					<div class="relative"><div class="absolute pin-r h-full flex pr-2 cursor-pointer" @click="showMobileSearch=!showMobileSearch">
						<img class="h-4 min-w-4 my-auto" src="~assets/img/search.png" alt="search">
					</div></div>
				</div>
			</div>
		</div>
		<div class="container pt-8">
			<div class="flex flex-wrap -mx-2">
				<div v-show="r.show" v-for="r in computedResources" :key="r.title" class="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 px-2">
					<link-prevue class="deep-h-full overflow-hidden" :url="r.link">
						<template slot-scope="props">
							<div class="shadow-md bg-white w-full h-full rounded border border-police-blue flex flex-col grad">
								<div class="h-48 bg-contain bg-center bg-no-repeat" :style="`background-image: url(${props.img})`"></div>
								<div class="p-4 flex flex-col flex-1 bg-white rounded-b">
									<p class="text-sm mb-2">{{r.date}}</p>
									<a :href="r.link" target="_blank" class="font-bold text-xl mb-2">{{r.title}}</a>
									<div class="flex flex-wrap -mx-1">
										<div v-for="t in r.tags" :key="r.title+t" class="px-1 mb-4">
											<button type="button" class="btn rounded p-1 capitalize" @click="searchWord=t">{{t}}</button>
										</div>
									</div>
									<p v-line-clamp="2" class="leading-tight mb-6">{{props.description}}</p>
									<a :href="r.link" target="_blank" class="btn rounded-xl py-2 px-4 text-center w-32 mx-auto mt-auto">Vue More</a>
								</div>
							</div>
						</template>
						<template slot="loading">
							<div class="shadow-md bg-white w-full h-full rounded border border-police-blue flex flex-col grad">
								<div class="h-48 bg-contain bg-center bg-no-repeat"></div>
								<div class="p-4 flex flex-col flex-1 bg-white rounded-b">
									<p class="text-sm mb-2">{{r.date}}</p>
									<a :href="r.link" target="_blank" class="font-bold text-xl mb-2">{{r.title}}</a>
									<div class="flex flex-wrap -mx-1">
										<div v-for="t in r.tags" :key="r.title+t" class="px-1 mb-4">
											<button type="button" class="btn rounded p-1 capitalize" @click="searchWord=t">{{t}}</button>
										</div>
									</div>
									<a :href="r.link" target="_blank" class="btn rounded-xl py-2 px-4 text-center w-32 mx-auto mt-auto">Vue More</a>
								</div>
							</div>
						</template>
					</link-prevue>
				</div>
			</div>
		</div>
		<back-to-top>
			<div class="btn w-12 h-12 rounded flex">
				<div class="m-auto"><img class="w-4" src="~assets/img/back-to-top.png"></div>
			</div>
		</back-to-top>
	</div>
</template>

<script>
import LinkPrevue from 'link-prevue'
import BackToTop from 'vue-backtotop'
export default {
	components: {LinkPrevue, BackToTop},
	computed: {
		staticPath () { return process.env.static },
		computedResources () {
			return this.resources.slice(0).map(r => {
				r.show = this.searchWord ? r.title.toLowerCase().includes(this.searchWord.toLowerCase()) || r.tags.includes(this.searchWord.toLowerCase()) : true
				return r
			})
		}
	},
	data: () => ({
		showMobileSearch: false,
		searchWord: null,
		resources: [
			{
				"title": "Reasons Why Vue.Js is Getting More Traction",
				"link": "https://www.bloglovin.com/@9seriessolutions/reasons-why-vuejs-is-getting-more-traction",
				"date": "5 Jul 2019",
				"tags": [
					"text"
				]
			},
			{
				"title": "Evan You: Seeking the Balance in Framework Design with Vue | JSConf.Asia 2019",
				"link": "https://www.youtube.com/watch?v=ANtSWq-zI0s",
				"date": "3 Jul 2019",
				"tags": [
					"video"
				]
			},
			{
				"title": "Reasons why Vue.js is Best for your UI Web Development.",
				"link": "https://www.klipstack.com/2019/06/reasons-why-vuejs-is-best-for-your-ui.html",
				"date": "14 Jun 2019",
				"tags": [
					"text"
				]
			},
			{
				"title": "Why use Vue.js for UI web development?",
				"link": "https://jaxenter.com/vue-js-for-ui-web-development-159281.html",
				"date": "12 Jun 2019",
				"tags": [
					"text"
				]
			},
			{
				"title": "Vue.js for agencies – reasons why & benefits in comparison with React",
				"link": "https://divante.co/blog/vue-js-agencies-reasons-benefits-comparison-react/",
				"date": "4 Jun 2019",
				"tags": [
					"text",
					"react"
				]
			},
			{
				"title": "Why we chose Vue",
				"link": "https://dev.to/optoro_engineering/why-we-chose-vue-53d0",
				"date": "17 May 2019",
				"tags": [
					"text"
				]
			},
			{
				"title": "Vue JS and its Wonders",
				"link": "https://augnitive.com/blog/vue-js-and-its-wonders",
				"date": "3 May 2019",
				"tags": [
					"text"
				]
			},
			{
				"title": "What makes Vue.js easy to start using?",
				"link": "https://www.youtube.com/watch?v=gmov250WifE",
				"date": "2 May 2019",
				"tags": [
					"video",
					"nuxt"
				]
			},
			{
				"title": "How and Why We Moved to Vue.js",
				"link": "https://dzone.com/articles/how-and-why-mkdev-moved-to-vuejs",
				"date": "30 Apr 2019",
				"tags": [
					"text"
				]
			},
			{
				"title": "Vue Js is Great, Why?",
				"link": "https://www.ateamindia.com/vue-js-is-great-why/",
				"date": "18 Apr 2019",
				"tags": [
					"text"
				]
			},
			{
				"title": "Is Vue.js Enterprise-Ready?—Large Scale Apps Use Cases",
				"link": "https://www.monterail.com/blog/is-vuejs-enterprise-ready",
				"date": "8 Apr 2019",
				"tags": [
					"text"
				]
			},
			{
				"title": "The VueJS Show (Scott teaches Wes)",
				"link": "https://syntax.fm/show/130/the-vuejs-show-scott-teaches-wes",
				"date": "27 Mar 2019",
				"tags": [
					"audio"
				]
			},
			{
				"title": "How is Vue.js making the Javascript world a better place",
				"link": "https://medium.com/@fadamakis/how-is-vue-js-making-the-javascript-world-a-better-place-b3dc39ba4fe7",
				"date": "13 Mar 2019",
				"tags": [
					"text"
				]
			},
			{
				"title": "Why your company should start using Vue.js",
				"link": "https://medium.com/@robewawebdesign/why-your-company-should-start-using-vue-js-6ac01969573",
				"date": "7 Mar 2019",
				"tags": [
					"text"
				]
			},
			{
				"title": "Point of Vue — Part 3 — Facing React",
				"link": "https://medium.com/@vyaron/point-of-vue-part-3-facing-react-3328d8b505b2",
				"date": "2 Mar 2019",
				"tags": [
					"text",
					"react"
				]
			},
			{
				"title": "All The Numbers From The State of Vue.js Report 2019",
				"link": "https://www.monterail.com/blog/state-of-vuejs-2019",
				"date": "1 Mar 2019",
				"tags": [
					"text"
				]
			},
			{
				"title": "Why You Should Start Front-End by Learning Vue.js",
				"link": "https://vuejsfeed.com/blog/why-you-should-start-front-end-by-learning-vue-js",
				"date": "28 Feb 2019",
				"tags": [
					"text"
				]
			},
			{
				"title": "Vue.js Framework with Evan You & Pratik Patel",
				"link": "https://www.youtube.com/watch?v=8iJsAAPA-YE",
				"date": "26 Feb 2019",
				"tags": [
					"video"
				]
			},
			{
				"title": "Migrating from Angular to Vue",
				"link": "https://medium.com/fundbox-engineering/migrating-a-front-end-framework-and-still-committing-to-a-product-roadmap-angular-to-vue-1d5c00dd5709",
				"date": "20 Feb 2019",
				"tags": [
					"text",
					"angular"
				]
			},
			{
				"title": "Exploring the Future of Front-end at the Vue.js Amsterdam Conference",
				"link": "https://www.screenmedia.co.uk/news/2019/february/exploring-the-future-of-front-end-at-the-vuejs-amsterdam-conference/",
				"date": "20 Feb 2019",
				"tags": [
					"text"
				]
			},
			{
				"title": "Vue vs Angular vs React in 2019 - Answered",
				"link": "https://www.linkedin.com/pulse/vue-vs-angular-react-2019-answered-vamshi-krishna/",
				"date": "19 Feb 2019",
				"tags": [
					"text",
					"react",
					"angular"
				]
			},
			{
				"title": "The Evolution and Rapid Rise of VueJS",
				"link": "https://www.synerzip.com/blog/vuejs-evolution-rapid-rise/",
				"date": "18 Feb 2019",
				"tags": [
					"text"
				]
			},
			{
				"title": "Why I learn Vuejs as a backend developer",
				"link": "https://codelikemad.com.ng/why-i-learn-vuejs-as-a-backend-developer/",
				"date": "16 Feb 2019",
				"tags": [
					"text",
					"laravel"
				]
			},
			{
				"title": "NativeScript 5.2 Comes with Official Support for Vue.js",
				"link": "https://www.nativescript.org/blog/nativescript-5.2-comes-with-official-support-for-vue",
				"date": "14 Feb 2019",
				"tags": [
					"text",
					"NativeScript"
				]
			},
			{
				"title": "Why Companies Should Choose Vue.js For Application Development?",
				"link": "https://www.cmarix.com/why-companies-should-choose-vue-js-for-application-development/",
				"date": "29 Jan 2019",
				"tags": [
					"text"
				]
			},
			{
				"title": "Why You Should Use Vue & Vuetify in 2019",
				"link": "https://www.youtube.com/watch?v=cmHVnAC6V3A",
				"date": "26 Jan 2019",
				"tags": [
					"video"
				]
			},
			{
				"title": "Introduction to Vue.js",
				"link": "https://levelup.gitconnected.com/introduction-to-vue-js-956a7f96c9ba",
				"date": "25 Jan 2019",
				"tags": [
					"text"
				]
			},
			{
				"title": "How to Tell If Vue.js Is the Right Framework for Your Next Project",
				"link": "https://www.sitepoint.com/vue-right-framework/",
				"date": "25 Jan 2019",
				"tags": [
					"text"
				]
			},
			{
				"title": "VoV 045: Comparing the React and Vue Ecosystems with a Real-World SPA with John Datserakis",
				"link": "https://devchat.tv/views-on-vue/vov-045-comparing-the-react-and-vue-ecosystems-with-a-real-world-spa-with-john-datserakis/",
				"date": "22 Jan 2019",
				"tags": [
					"audio",
					"react"
				]
			},
			{
				"title": "A Thorough Introduction to Vue.js",
				"link": "https://unyscape.com/a-thorough-introduction-to-vue-js/",
				"date": "9 Jan 2019",
				"tags": [
					"text"
				]
			},
			{
				"title": "Vue.js is omakase",
				"link": "https://dev.to/rossta/vuejs-is-omakase-aej",
				"date": "9 Jan 2019",
				"tags": [
					"text"
				]
			},
			{
				"title": "Vue in 2019 - where it is and where it’s heading",
				"link": "https://naturaily.com/blog/vue-2019",
				"date": "8 Jan 2019",
				"tags": [
					"text"
				]
			},
			{
				"title": "Ember.js vs Vue.js: Which Javascript Framework Breaks the Jinx?",
				"link": "https://www.konstantinfo.com/blog/ember-js-vs-vue-js/",
				"date": "7 Jan 2019",
				"tags": [
					"text",
					"ember"
				]
			},
			{
				"title": "Advantages of building applications with Vue.js",
				"link": "https://medium.com/@dineshk8/advantages-of-building-applications-with-vue-js-b2a23e4199c8",
				"date": "3 Jan 2019",
				"tags": [
					"text"
				]
			},
			{
				"title": "Seven reasons to learn Vue.js in 2019",
				"link": "https://dev.to/rossta/seven-reasons-learn-vuejs-in-2019-2n9o",
				"date": "1 Jan 2019",
				"tags": [
					"text"
				]
			},
			{
				"title": "10 reasons I chose VueJS over ReactJS",
				"link": "https://medium.com/@hoanglamhuynh/10-differences-between-vuejs-and-reactjs-733d4b8b07b7",
				"date": "26 Dec 2018",
				"tags": [
					"text",
					"react"
				]
			},
			{
				"title": "Reasons Why Vue.js Is Getting More Traction Every Month",
				"link": "https://www.monterail.com/blog/reasons-why-vuejs-is-popular",
				"date": "19 Dec 2018",
				"tags": [
					"text"
				]
			},
			{
				"title": "Taking on Google and Facebook as a Solo Open-Source Founder with Evan You of Vue.js",
				"link": "https://www.indiehackers.com/podcast/078-evan-you-of-vue",
				"date": "14 Dec 2018",
				"tags": [
					"audio"
				]
			},
			{
				"title": "A Vue from Ionic with Josh Thomas",
				"link": "https://www.youtube.com/watch?v=Cpqjglf_tYI",
				"date": "12 Dec 2018",
				"tags": [
					"video",
					"ionic"
				]
			},
			{
				"title": "Battle of the Frameworks: Enter Vue.js",
				"link": "https://www.ae.be/blog-en/battle-of-the-frameworks-enter-vue.js",
				"date": "5 Dec 2018",
				"tags": [
					"text"
				]
			},
			{
				"title": "Vue.js and PWA - The Perfect Duo? We Decided To Check It Out.",
				"link": "https://www.netguru.co/blog/vue.js-and-pwa-the-perfect-duo-we-decided-to-check-it-out",
				"date": "4 Dec 2018",
				"tags": [
					"text",
					"PWA"
				]
			},
			{
				"title": "Why Vue.js is Taking Over the Front-end World - Gwendolyn Faraday",
				"link": "https://www.youtube.com/watch?v=KIR0ftm-HNc",
				"date": "23 Nov 2018",
				"tags": [
					"video"
				]
			},
			{
				"title": "Evan You - Vue 3.0 Updates : Vue Fes Japan 2018",
				"link": "https://www.youtube.com/watch?v=zBOlIvrYWHY",
				"date": "22 Nov 2018",
				"tags": [
					"video"
				]
			},
			{
				"title": "Why I chose Vue.js over React or Angular to replace jQuery",
				"link": "https://blog.comet.co/why-i-chose-vue-js-over-react-or-angular-to-replace-jquery/",
				"date": "20 Nov 2018",
				"tags": [
					"text",
					"react",
					"angular",
					"jquery"
				]
			},
			{
				"title": "Ionic Framework Officially Announces Vue.js Support, Contributed By Modus Create",
				"link": "https://moduscreate.com/blog/ionic-vue-modus-labs/",
				"date": "20 Nov 2018",
				"tags": [
					"text",
					"ionic"
				]
			},
			{
				"title": "How to use VueJs instead of jQuery",
				"link": "https://medium.com/kaliop/how-to-use-vuejs-instead-of-jquery-ee6003ba323d",
				"date": "19 Nov 2018",
				"tags": [
					"text",
					"jquery"
				]
			},
			{
				"title": "Evan You Previews Vue.js 3.0",
				"link": "https://medium.com/vue-mastery/evan-you-previews-vue-js-3-0-ab063dec3547",
				"date": "15 Nov 2018",
				"tags": [
					"text"
				]
			},
			{
				"title": "Developing with Vue.js, Node.js, and MongoDB | Episode 18 - HTML All The Things Podcast",
				"link": "https://www.youtube.com/watch?v=mJrKQN4pn9Q",
				"date": "15 Nov 2018",
				"tags": [
					"audio",
					"node"
				]
			},
			{
				"title": "Vue: What Businesses Need to Know",
				"link": "https://specific-group.com/blog/vue-javascript-what-businesses-need-know/",
				"date": "9 Nov 2018",
				"tags": [
					"text"
				]
			},
			{
				"title": "Should you Learn Angular in 2018?",
				"link": "https://www.youtube.com/watch?v=sU934oGMaOM",
				"date": "7 Nov 2018",
				"tags": [
					"video",
					"angular"
				]
			},
			{
				"title": "Getting Your Company To Switch To Vue",
				"link": "https://vuejsdevelopers.com/2018/10/29/get-your-company-to-choose-vue/",
				"date": "29 Oct 2018",
				"tags": [
					"text"
				]
			},
			{
				"title": "Bad Arguments Against Vue.js",
				"link": "https://www.linkedin.com/feed/update/urn:li:activity:6461794133576085505/",
				"date": "27 Oct 2018",
				"tags": [
					"text"
				]
			},
			{
				"title": "Vue.js: Power and Flexiblity",
				"link": "https://www.youtube.com/watch?v=3aEm4Id5mTo",
				"date": "25 Oct 2018",
				"tags": [
					"video"
				]
			},
			{
				"title": "Nuxt is the 4th fastest growing project on GitHub",
				"link": "https://blog.tidelift.com/nuxt-is-the-4th-fastest-growing-project-on-github",
				"date": "25 Oct 2018",
				"tags": [
					"text",
					"nuxt"
				]
			},
			{
				"title": "How To Sell Vue.js To Your Non-Technical Boss",
				"link": "https://www.linkedin.com/feed/update/urn:li:activity:6459380461155155968/",
				"date": "20 Oct 2018",
				"tags": [
					"text"
				]
			},
			{
				"title": "New to Front End Dev? Get Rocking With Vue.js",
				"link": "https://www.vuemastery.com/conferences/connect-tech-2018/Get-Rocking-With-Vue.js/",
				"date": "17 Oct 2018",
				"tags": [
					"Video"
				]
			},
			{
				"title": "Why Companies Should Choose Vue.js For Application Development",
				"link": "https://www.rishabhsoft.com/blog/vuejs-development",
				"date": "17 Oct 2018",
				"tags": [
					"text"
				]
			},
			{
				"title": "Vue's Ecosystem Growth is Taking Off... Just Like React's Did",
				"link": "https://zendev.com/2018/10/16/vue-growth-taking-off-like-react.html",
				"date": "16 Oct 2018",
				"tags": [
					"text",
					"react"
				]
			},
			{
				"title": "The Cynical Developer Episode 99 - VueJs",
				"link": "https://www.youtube.com/watch?v=57Z4BMK8B6U",
				"date": "15 Oct 2018",
				"tags": [
					"audio"
				]
			},
			{
				"title": "12 companies that have utilized Vue.js in their applications",
				"link": "https://naturaily.com/blog/companies-vue-js-applications",
				"date": "8 Oct 2018",
				"tags": [
					"text"
				]
			},
			{
				"title": "Why I chose Vue.js over React",
				"link": "https://medium.com/@luistinygod/why-i-chose-vue-js-over-react-509ad12d7b53",
				"date": "1 Oct 2018",
				"tags": [
					"text",
					"react"
				]
			},
			{
				"title": "Plans for the Next Iteration of Vue.js",
				"link": "https://medium.com/the-vue-point/plans-for-the-next-iteration-of-vue-js-777ffea6fabf",
				"date": "30 Sep 2018",
				"tags": [
					"text"
				]
			},
			{
				"title": "Who uses Vue.js on production? Why Facebook, Netflix and Behance love Vue",
				"link": "https://www.ironin.it/blog/who-uses-vue.js-on-production-why-facebook-netflix-and-behance-love-vue.html",
				"date": "27 Sep 2018",
				"tags": [
					"text"
				]
			},
			{
				"title": "The 10 talks and many highlights of Vue London",
				"link": "https://www.netlify.com/blog/2018/09/27/the-10-talks-and-many-highlights-of-vue-london/",
				"date": "27 Sep 2018",
				"tags": [
					"text"
				]
			},
			{
				"title": "Trending Tech Tuesday: Vue.js",
				"link": "https://www.economicmodeling.com/2018/09/18/trending-tech-tuesday-vuejs/",
				"date": "18 Sep 2018",
				"tags": [
					"text"
				]
			},
			{
				"title": "What is the easiest JavaScript framework to learn in 2018?",
				"link": "https://www.linkedin.com/feed/update/activity:6446251519095369728/",
				"date": "14 Sep 2018",
				"tags": [
					"text"
				]
			},
			{
				"title": "Why Do Developers Prefer Vue.Js Over Other Frameworks?",
				"link": "https://medium.com/@rachaelray018/why-do-developers-prefer-vue-js-over-other-frameworks-e1b7144323fe",
				"date": "4 Sep 2018",
				"tags": [
					"text"
				]
			},
			{
				"title": "Comparing the React and Vue Ecosystems with a Real-World SPA",
				"link": "https://vuejsdevelopers.com/2018/09/04/comparing-vue-and-react/",
				"date": "4 Sep 2018",
				"tags": [
					"text",
					"react"
				]
			},
			{
				"title": "From Zero to Hero with Vue - But first, why Vue?",
				"link": "https://medium.freecodecamp.org/from-zero-to-hero-with-vue-why-vue-8c7e981b494",
				"date": "29 Aug 2018",
				"tags": [
					"text"
				]
			},
			{
				"title": "VueNYC - Vue.js from the eyes of a React Fanboy - David Ashe",
				"link": "https://www.youtube.com/watch?v=Rii_hXFJ5aU",
				"date": "23 Aug 2018",
				"tags": [
					"video",
					"react"
				]
			},
			{
				"title": "THE SOLO JAVASCRIPT DEVELOPER CHALLENGING GOOGLE AND FACEBOOK",
				"link": "https://www.wired.com/story/the-solo-javascript-developer-challenging-google-facebook/",
				"date": "23 Aug 2018",
				"tags": [
					"text",
					"react",
					"angular"
				]
			},
			{
				"title": "State of Vue.js in 2018",
				"link": "https://naturaily.com/blog/vue-js-2018",
				"date": "20 Aug 2018",
				"tags": [
					"text"
				]
			},
			{
				"title": "Reason Why Most Developers are Preferring Vue.js for Developing Web Applications",
				"link": "https://www.mindinventory.com/blog/why-choose-vuejs-for-developing-web-applications/",
				"date": "14 Aug 2018",
				"tags": [
					"text"
				]
			},
			{
				"title": "3 reasons to use Vue.js in your next web project",
				"link": "https://prismic.io/blog/3-reasons-to-use-vuejs-in-your-next-web-project",
				"date": "10 Aug 2018",
				"tags": [
					"text"
				]
			},
			{
				"title": "How Tiny & Powerful Vue.js Helps to Keep the Front-End Code Clean (Actual Web App Demonstrations)",
				"link": "https://medium.com/flow-studio/how-tiny-powerful-vue-js-helps-to-keep-the-front-end-code-clean-actual-web-app-demonstrations-47c734e61791",
				"date": "6 Aug 2018",
				"tags": [
					"text"
				]
			},
			{
				"title": "Spelunking into the VueJS Frontend JavaScript Framework",
				"link": "https://devmode.fm/episodes/spelunking-into-the-vuejs-frontend-javascript-framework",
				"date": "6 Aug 2018",
				"tags": [
					"audio"
				]
			},
			{
				"title": "The New Vue UI is Amazing for Creating & Managing your Projects! Let's check it out",
				"link": "https://www.youtube.com/watch?v=-y5xYznyQ1A",
				"date": "2 Aug 2018",
				"tags": [
					"video"
				]
			},
			{
				"title": "Betting on Vue JS with Gregg Pollack",
				"link": "https://www.ctothink.com/episodes/29-gregg-pollack-of-vue-mastery",
				"date": "1 Aug 2018",
				"tags": [
					"audio"
				]
			},
			{
				"title": "I created the exact same app in React and Vue. Here are the differences.",
				"link": "https://medium.com/javascript-in-plain-english/i-created-the-exact-same-app-in-react-and-vue-here-are-the-differences-e9a1ae8077fd",
				"date": "24 Jul 2018",
				"tags": [
					"text",
					"react"
				]
			},
			{
				"title": "Angular, React, or Vue? What Javascript Framework Should You Learn in 2018 and Beyond?",
				"link": "https://www.youtube.com/watch?v=r_ECtCgo4Q0",
				"date": "19 Jul 2018",
				"tags": [
					"video",
					"react",
					"angular"
				]
			},
			{
				"title": "Easyship case study: How They Switched From AngularJS to Vue and Increased Website Performance by 37%",
				"link": "https://www.monterail.com/blog/from-angularjs-to-vuejs",
				"date": "19 Jul 2018",
				"tags": [
					"text",
					"angular"
				]
			},
			{
				"title": "Why I left React for Vue.",
				"link": "https://blog.sourcerer.io/why-you-should-leave-react-for-vue-and-never-use-it-again-5e274bef27c2",
				"date": "16 Jul 2018",
				"tags": [
					"text",
					"react"
				]
			},
			{
				"title": "Vue.js vs React poll results: Vue.js ready to slay its competition",
				"link": "https://jaxenter.com/vue-js-ready-to-slay-competition-146742.html",
				"date": "12 Jul 2018",
				"tags": [
					"text",
					"react"
				]
			},
			{
				"title": "The Vue Handbook: a thorough introduction to Vue.js",
				"link": "https://medium.freecodecamp.org/the-vue-handbook-a-thorough-introduction-to-vue-js-1e86835d8446",
				"date": "5 Jul 2018",
				"tags": [
					"text"
				]
			},
			{
				"title": "Vue.js: the good, the meh, and the ugly",
				"link": "https://medium.com/@Pier/vue-js-the-good-the-meh-and-the-ugly-82800bbe6684",
				"date": "19 Jun 2018",
				"tags": [
					"text",
					"react"
				]
			},
			{
				"title": "It is a nice Vue on Top!",
				"link": "https://www.facebook.com/groups/vuejsdevelopers/permalink/455027051575983/",
				"date": "15 Jun 2018",
				"tags": [
					"text",
					"react",
					"angular"
				]
			},
			{
				"title": "Vue.js or React ? Which you would chose and why?",
				"link": "https://www.reddit.com/r/javascript/comments/8o781t/vuejs_or_react_which_you_would_chose_and_why/e01qn55/",
				"date": "3 Jun 2018",
				"tags": [
					"text",
					"react"
				]
			},
			{
				"title": "What's New in Vue.js - Evan You & Gregg Pollack",
				"link": "https://www.youtube.com/watch?v=8oFexUl7_DE",
				"date": "31 May 2018",
				"tags": [
					"video"
				]
			},
			{
				"title": "AN OVERVIEW OF VUE.JS",
				"link": "https://flaviocopes.com/vue-introduction/",
				"date": "28 May 2018",
				"tags": [
					"text"
				]
			},
			{
				"title": "Why Is Vue.js Growing so fast? 4 Reasons Behind the Framework's Success",
				"link": "https://www.netguru.co/blog/why-is-vue.js-growing-so-fast-4-reasons-behind-the-frameworks-success",
				"date": "23 May 2018",
				"tags": [
					"text"
				]
			},
			{
				"title": "Anyway, this is why I prefer Vue over React",
				"link": "https://itnext.io/anyway-this-is-why-i-prefer-vue-over-react-ad2653595fc5",
				"date": "16 May 2018",
				"tags": [
					"text",
					"react"
				]
			},
			{
				"title": 'My point of "vue" in React vs. Vue',
				"link": "https://dev.to/ycmjason/my-point-of-vue-in-react-vs-vue-2c6b",
				"date": "14 May 2018",
				"tags": [
					"text",
					"react"
				]
			},
			{
				"title": "How I Fell in Love with VueJS – Umbraco-Festival Deutschland 2018",
				"link": "https://www.youtube.com/watch?v=yJTvlHzHv6g",
				"date": "11 May 2018",
				"tags": [
					"video"
				]
			},
			{
				"title": "Vue on 2018 — Interview with Evan You, author of the Vue.js framework",
				"link": "https://blog.reactiveconf.com/vue-on-2018-interview-with-evan-you-author-of-the-vue-js-framework-26bba150a184",
				"date": "10 May 2018",
				"tags": [
					"text"
				]
			},
			{
				"title": "A React Point of Vue - Divya Sasidharan at VueConf.US",
				"link": "https://www.youtube.com/watch?v=5TgvhATYm3Q",
				"date": "3 May 2018",
				"tags": [
					"video",
					"react"
				]
			},
			{
				"title": "Why should you use Vue.js when using Laravel",
				"link": "https://blog.pusher.com/why-vuejs-laravel/",
				"date": "3 May 2018",
				"tags": [
					"text",
					"laravel"
				]
			},
			{
				"title": "Vue.js Futures: Vuejs popularity and why choose vuejs?",
				"link": "https://webcase.studio/blog/whats-future-vuejs/",
				"date": "20 Apr 2018",
				"tags": [
					"text"
				]
			},
			{
				"title": "Point of Vue: Angular is doomed, React is OK — We deserve better",
				"link": "https://medium.com/@vyaron/point-of-vue-angular-is-doomed-react-is-ok-we-deserve-better-fb60652a8cb4",
				"date": "20 Apr 2018",
				"tags": [
					"text",
					"react",
					"angular"
				]
			},
			{
				"title": "Everything you need to know about Vue.js",
				"link": "https://jaxenter.com/all-you-need-to-know-about-vuejs-143557.html",
				"date": "18 Apr 2018",
				"tags": [
					"text"
				]
			},
			{
				"title": "Should you learn Vue.js or React.js?",
				"link": "https://www.youtube.com/watch?v=HLv0sHnJfvw",
				"date": "17 Apr 2018",
				"tags": [
					"video",
					"react"
				]
			},
			{
				"title": "5 reasons developers are switching to Vue.js",
				"link": "https://www.heartinternet.uk/blog/5-reasons-developers-are-switching-to-vue-js-from-other-frameworks/",
				"date": "12 Apr 2018",
				"tags": [
					"text"
				]
			},
			{
				"title": "Why Vue Is So Awesome",
				"link": "https://praveenpuglia.com/why-vue-is-so-awesome/",
				"date": "6 Apr 2018",
				"tags": [
					"text"
				]
			},
			{
				"title": "Vue Better Than React?",
				"link": "https://www.youtube.com/watch?v=eDJGOxqD5N0",
				"date": "28 Mar 2018",
				"tags": [
					"video",
					"react"
				]
			},
			{
				"title": "13 Top Companies That Have Trusted Vue.js – Examples of Applications",
				"link": "https://www.netguru.co/blog/13-top-companies-that-have-trusted-vue.js-examples-of-applications",
				"date": "21 Mar 2018",
				"tags": [
					"text"
				]
			},
			{
				"title": "Why You Should Use Vue JS For Your Front-End",
				"link": "https://thewebtier.com/javascript/why-you-should-use-vue-js-for-your-front-end/",
				"date": "21 Mar 2018",
				"tags": [
					"text"
				]
			},
			{
				"title": "What's All The Fuss About Vue.JS?",
				"link": "https://blog.northcoders.com/whats-all-the-fuss-vuejs",
				"date": "18 Mar 2018",
				"tags": [
					"text"
				]
			},
			{
				"title": "Why we choose Vue.js over React for Vue Storefront",
				"link": "https://medium.com/the-vue-storefront-journal/why-we-choose-vue-js-over-react-for-vue-storefront-7f499c950239",
				"date": "13 Feb 2018",
				"tags": [
					"text",
					"react"
				]
			},
			{
				"title": "How and why mkdev moved to Vue.js",
				"link": "https://mkdev.me/en/posts/how-and-why-mkdev-moved-to-vue-js",
				"date": "11 Feb 2018",
				"tags": [
					"text"
				]
			},
			{
				"title": "WHY IT’S BETTER TO USE VUE.JS THAN ANGULAR AND REACT IN 2018",
				"link": "https://kruschecompany.com/blog/post/why-its-better-to-use-vuejs-than-angular-and-react-in-2018",
				"date": "5 Feb 2018",
				"tags": [
					"text",
					"react",
					"angular"
				]
			},
			{
				"title": "10 things I love about Vue",
				"link": "https://medium.com/@dalaidunc/10-things-i-love-about-vue-505886ddaff2",
				"date": "31 Jan 2018",
				"tags": [
					"text"
				]
			},
			{
				"title": "Why has Vue.js become so popular?",
				"link": "https://hub.packtpub.com/why-has-vuejs-become-so-popular/",
				"date": "19 Jan 2018",
				"tags": [
					"text"
				]
			},
			{
				"title": "Why 43% of Front-End Developers want to learn Vue.js",
				"link": "https://www.youtube.com/watch?v=p1iLqZnZPdo",
				"date": "21 Dec 2017",
				"tags": [
					"video"
				]
			},
			{
				"title": "Why Vue?",
				"link": "https://blog.cloudboost.io/why-vue-126a612b4ad9",
				"date": "13 Nov 2017",
				"tags": [
					"text",
					"react",
					"angular"
				]
			},
			{
				"title": "What is Vue.js and What are its Advantages",
				"link": "https://hackernoon.com/what-is-vue-js-and-what-are-its-advantages-4071b7c7993d",
				"date": "25 Oct 2017",
				"tags": [
					"text"
				]
			},
			{
				"title": "How car2go chose a frontend framework",
				"link": "https://medium.com/car2godevs/how-car2go-chose-a-frontend-framework-86b4838c64b0",
				"date": "4 Sep 2017",
				"tags": [
					"text"
				]
			},
			{
				"title": "Why we moved from Angular 2 to Vue.js (and why we didn’t choose React)",
				"link": "https://medium.com/reverdev/why-we-moved-from-angular-2-to-vue-js-and-why-we-didnt-choose-react-ef807d9f4163",
				"date": "31 Aug 2017",
				"tags": [
					"text",
					"react",
					"angular"
				]
			},
			{
				"title": "Why We Love, Use, And Support Vue.js",
				"link": "https://www.monterail.com/blog/why-we-use-vuejs",
				"date": "20 Jun 2017",
				"tags": [
					"text"
				]
			},
			{
				"title": "Will Vue.js Become a Giant Like Angular or React?",
				"link": "https://10clouds.com/blog/vuejs-angular-react/",
				"date": "14 Jun 2017",
				"tags": [
					"text",
					"react",
					"angular"
				]
			},
			{
				"title": "A new Vue for NativeScript",
				"link": "https://www.nativescript.org/blog/a-new-vue-for-nativescript",
				"date": "6 Jun 2017",
				"tags": [
					"text",
					"NativeScript"
				]
			},
			{
				"title": "Why we chose Vue.js over React",
				"link": "https://pixeljets.com/blog/why-we-chose-vuejs-over-react/",
				"date": "10 Dec 2016",
				"tags": [
					"text",
					"react"
				]
			},
			{
				"title": "4 Things Vue.js Got Right",
				"link": "https://medium.com/js-dojo/4-things-vue-js-got-right-10820cc84004",
				"date": "10 Nov 2016",
				"tags": [
					"text"
				]
			},
			{
				"title": "Vue.js is easier to learn than jQuery",
				"link": "https://medium.com/js-dojo/vue-js-is-easier-to-learn-than-jquery-abbbb9c12cf8",
				"date": "25 Oct 2016",
				"tags": [
					"text",
					"jquery"
				]
			},
			{
				"title": "Why we chose Vue.js",
				"link": "https://about.gitlab.com/2016/10/20/why-we-chose-vue/",
				"date": "20 Oct 2016",
				"tags": [
					"text"
				]
			},
			{
				"title": "Getting Started with Vue.js: Why Use it?",
				"link": "https://www.codementor.io/javascript/tutorial/getting-started-with-vuejs",
				"date": "13 Oct 2016",
				"tags": [
					"text"
				]
			},
			{
				"title": "7 Reasons to Use Vue.js",
				"link": "https://www.pop-art.com/7-reasons-to-use-vue-js/",
				"date": "2 Jun 2016",
				"tags": [
					"text"
				]
			},
			{
				"title": "The Official Vue News",
				"link": "https://news.vuejs.org/",
				"tags": [
					"audio"
				]
			},
			{
				"title": "Adding Vue.js to Your Technology Stack",
				"link": "https://www.monterail.com/vuejs-development-guide",
				"tags": [
					"text"
				]
			},
			{
				"title": "Comparison with Other Frameworks",
				"link": "https://vuejs.org/v2/guide/comparison.html",
				"tags": [
					"text"
				]
			}
		]
	})
}
</script>
