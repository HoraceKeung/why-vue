<template>
	<div class="flex flex-col pt-16">
		<div class="bg-white h-16 fixed pin border-b border-police-blue shadow-md z-50">
			<div class="container h-full flex">
				<div class="my-auto mr-2 sm:mr-4"><img class="h-8 sm:h-12 min-w-8" src="/icon.png" alt="vue"></div>
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
					<link-prevue class="deep-h-full" :url="r.link">
						<template slot-scope="props">
							<div class="shadow-md bg-white w-full h-full rounded border border-police-blue flex flex-col">
								<img class="rounded-t w-full" :src="props.img" :alt="r.title">
								<div class="p-4 flex flex-col flex-1">
									<p class="text-sm mb-2">{{r.date}}</p>
									<a :href="r.link" target="_blank" class="font-bold text-xl mb-3">{{r.title}}</a>
									<div class="flex flex-wrap -mx-1">
										<div v-for="t in r.tags" :key="r.title+t" class="px-1 mb-2">
											<button type="button" class="btn rounded p-1 capitalize" @click="searchWord=t">{{t}}</button>
										</div>
									</div>
									<p class="mb-4">{{props.description}}</p>
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
				<img class="w-4 m-auto" src="~assets/img/back-to-top.png">
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
		computedResources () {
			return this.resources.slice(0).map(r => {
				r.show = this.searchWord ? r.title.toLowerCase().includes(this.searchWord.toLowerCase()) || r.tags.includes(this.searchWord.toLowerCase()) : true
				return r
			}).sort((a, b) => new Date(b.date) - new Date(a.date))
		}
	},
	data: () => ({
		showMobileSearch: false,
		searchWord: null,
		resources: [
			{
				title: 'Should you learn Vue.js or React.js?',
				link: 'https://www.youtube.com/watch?v=HLv0sHnJfvw',
				date: '17 Apr 2018',
				tags: ['video', 'vue', 'react']
			},
			{
				title: 'Vue Better Than React?',
				link: 'https://www.youtube.com/watch?v=eDJGOxqD5N0',
				date: '28 Mar 2018',
				tags: ['video', 'vue', 'react']
			},
			{
				title: 'A React Point of Vue - Divya Sasidharan at VueConf.US',
				link: 'https://www.youtube.com/watch?v=5TgvhATYm3Q',
				date: '3 May 2018',
				tags: ['video', 'vue', 'react']
			},
			{
				title: 'VueNYC - Vue.js from the eyes of a React Fanboy - David Ashe',
				link: 'https://www.youtube.com/watch?v=Rii_hXFJ5aU',
				date: '23 Aug 2018',
				tags: ['video', 'vue', 'react']
			},
			{
				title: 'Vue.js or React ? Which you would chose and why?',
				link: 'https://www.reddit.com/r/javascript/comments/8o781t/vuejs_or_react_which_you_would_chose_and_why/e01qn55/',
				date: '3 Jun 2018',
				tags: ['text', 'vue', 'react']
			},
			{
				title: 'Comparing the React and Vue Ecosystems with a Real-World SPA',
				link: 'https://vuejsdevelopers.com/2018/09/04/comparing-vue-and-react/',
				date: '4 Sep 2018',
				tags: ['text', 'vue', 'react']
			},
			{
				title: 'From Zero to Hero with Vue - But first, why Vue?',
				link: 'https://medium.freecodecamp.org/from-zero-to-hero-with-vue-why-vue-8c7e981b494',
				date: '29 Aug 2018',
				tags: ['text', 'vue']
			},
			{
				title: 'Vue.js vs React poll results: Vue.js ready to slay its competition',
				link: 'https://jaxenter.com/vue-js-ready-to-slay-competition-146742.html',
				date: '12 Jul 2018',
				tags: ['text', 'vue', 'react']
			},
			{
				title: 'Everything you need to know about Vue.js',
				link: 'https://jaxenter.com/all-you-need-to-know-about-vuejs-143557.html',
				date: '18 Apr 2018',
				tags: ['text', 'vue']
			},
			{
				title: 'THE SOLO JAVASCRIPT DEVELOPER CHALLENGING GOOGLE AND FACEBOOK',
				link: 'https://www.wired.com/story/the-solo-javascript-developer-challenging-google-facebook/',
				date: '23 Aug 2018',
				tags: ['text', 'vue', 'react', 'angular']
			},
			{
				title: 'Trending Tech Tuesday: Vue.js',
				link: 'https://www.economicmodeling.com/2018/09/18/trending-tech-tuesday-vuejs/',
				date: '18 Sep 2018',
				tags: ['text', 'vue']
			},
			{
				title: 'What is the easiest JavaScript framework to learn in 2018?',
				link: 'https://www.linkedin.com/feed/update/activity:6446251519095369728/',
				date: 'Sep 2018',
				tags: ['text', 'vue']
			},
			{
				title: 'I created the exact same app in React and Vue. Here are the differences.',
				link: 'https://medium.com/javascript-in-plain-english/i-created-the-exact-same-app-in-react-and-vue-here-are-the-differences-e9a1ae8077fd',
				date: '24 Jul 2018',
				tags: ['text', 'vue', 'react']
			},
			{
				title: 'How Tiny & Powerful Vue.js Helps to Keep the Front-End Code Clean (Actual Web App Demonstrations)',
				link: 'https://medium.com/flow-studio/how-tiny-powerful-vue-js-helps-to-keep-the-front-end-code-clean-actual-web-app-demonstrations-47c734e61791',
				date: '6 Aug 2018',
				tags: ['text', 'vue']
			},
			{
				title: 'Anyway, this is why I prefer Vue over React',
				link: 'https://itnext.io/anyway-this-is-why-i-prefer-vue-over-react-ad2653595fc5',
				date: '16 May 2018',
				tags: ['text', 'vue', 'react']
			},
			{
				title: 'Why I left React for Vue.',
				link: 'https://blog.sourcerer.io/why-you-should-leave-react-for-vue-and-never-use-it-again-5e274bef27c2',
				date: '16 Jul 2018',
				tags: ['text', 'vue', 'react']
			},
			{
				title: 'Why we choose Vue.js over React for Vue Storefront',
				link: 'https://medium.com/the-vue-storefront-journal/why-we-choose-vue-js-over-react-for-vue-storefront-7f499c950239',
				date: '13 Feb 2018',
				tags: ['text', 'vue', 'react']
			},
			{
				title: 'It is a nice Vue on Top!',
				link: 'https://www.facebook.com/groups/vuejsdevelopers/permalink/455027051575983/',
				date: '15 Jun 2018',
				tags: ['text', 'vue', 'react', 'angular']
			},
			{
				title: 'aTeamIndia – Use Vue js for Front End Applications',
				link: 'https://www.ateamindia.com/ateamindia-use-vue-js-for-front-end-applications/',
				date: '15 Oct 2018',
				tags: ['text', 'vue']
			},
			{
				title: '13 Top Companies That Have Trusted Vue.js – Examples of Applications',
				link: 'https://www.netguru.co/blog/13-top-companies-that-have-trusted-vue.js-examples-of-applications',
				date: '21 Mar 2018',
				tags: ['text', 'vue']
			},
			{
				title: '12 companies that have utilized Vue.js in their applications',
				link: 'https://naturaily.com/blog/companies-vue-js-applications',
				date: '8 Oct 2018',
				tags: ['text', 'vue']
			},
			{
				title: 'The 10 talks and many highlights of Vue London',
				link: 'https://www.netlify.com/blog/2018/09/27/the-10-talks-and-many-highlights-of-vue-london/',
				date: '27 Sep 2018',
				tags: ['text', 'vue']
			},
			{
				title: 'Why I chose Vue.js over React',
				link: 'https://medium.com/@luistinygod/why-i-chose-vue-js-over-react-509ad12d7b53',
				date: '1 Oct 2018',
				tags: ['text', 'vue', 'react']
			},
			{
				title: 'Plans for the Next Iteration of Vue.js',
				link: 'https://medium.com/the-vue-point/plans-for-the-next-iteration-of-vue-js-777ffea6fabf',
				date: '30 Sep 2018',
				tags: ['text', 'vue']
			},
			{
				title: `What's New in Vue.js - Evan You & Gregg Pollack`,
				link: 'https://www.youtube.com/watch?v=8oFexUl7_DE',
				date: '31 May 2018',
				tags: ['video', 'vue']
			},
			{
				title: `The New Vue UI is Amazing for Creating & Managing your Projects! Let's check it out`,
				link: 'https://www.youtube.com/watch?v=-y5xYznyQ1A',
				date: '2 Aug 2018',
				tags: ['video', 'vue']
			},
			{
				title: 'Spelunking into the VueJS Frontend JavaScript Framework',
				link: 'https://devmode.fm/episodes/spelunking-into-the-vuejs-frontend-javascript-framework',
				date: '6 Aug 2018',
				tags: ['audio', 'vue']
			},
			{
				title: 'Adding Vue.js to Your Technology Stack',
				link: 'https://www.monterail.com/vuejs-development-guide',
				tags: ['text', 'vue']
			},
			{
				title: 'Point of Vue: Angular is doomed, React is OK — We deserve better',
				link: 'https://medium.com/@vyaron/point-of-vue-angular-is-doomed-react-is-ok-we-deserve-better-fb60652a8cb4',
				date: '20 Apr 2018',
				tags: ['text', 'vue', 'react', 'angular']
			},
			{
				title: 'Easyship case study: How They Switched From AngularJS to Vue and Increased Website Performance by 37%',
				link: 'https://www.monterail.com/blog/from-angularjs-to-vuejs',
				date: '19 Jul 2018',
				tags: ['text', 'vue', 'angular']
			},
			{
				title: `Vue's Ecosystem Growth is Taking Off... Just Like React's Did`,
				link: 'https://zendev.com/2018/10/16/vue-growth-taking-off-like-react.html',
				date: '16 Oct 2018',
				tags: ['text', 'vue', 'react']
			},
			{
				title: 'The Vue Handbook: a thorough introduction to Vue.js',
				link: 'https://medium.freecodecamp.org/the-vue-handbook-a-thorough-introduction-to-vue-js-1e86835d8446',
				date: '5 Jul 2018',
				tags: ['text', 'vue']
			}
		]
	})
}
</script>
