<script setup lang="ts">
import Circle from '@/assets/icons/circle.svg';
import Cross from '@/assets/icons/cross.svg';
import Right from '@/assets/icons/right.svg';
import Dots from '@/assets/icons/dots.svg';
import { computed, ref } from 'vue';

const props = defineProps({
	rank: { type: Number, required: true },
	playerName: { type: String, required: true },
	totalCount: { type: Number, required: true },
	rightCount: { type: Number, required: true },
	wrongCount: { type: Number, required: true }
})

/* const rank = ref(10) */
/* const playerName = ref("I'm esconer") */
/* const totalCount = ref(150) */
/* const rightCount = ref(70) */
/* const wrongCount = ref(70) */

const attempted = computed(() => props.rightCount + props.wrongCount)
const unattempted = computed(() => props.totalCount - attempted.value)
const successRate = computed(() => props.rightCount / attempted.value * 100)
const errorRate = computed(() => props.wrongCount / attempted.value * 100)
const skipRate = computed(() => (props.totalCount - attempted.value) / props.totalCount * 100)
const score = computed(() => props.rightCount * 1 - props.wrongCount * .25)



</script>



<template>
	<!-- NOTE: use the imported Circle, Cross etc int the :src of a image tag done -->
	<!-- <img :src="Circle" alt="circle" done/> -->

	<!-- TODO: set default formatter volar  done-->
	<!-- TODO: setup android devices view on browser for pixel perfect development done-->

	<!-- TODO: unnecessary Class container deleted it, playercard need it, right-ac need it, right-count need it etc -->
	<!-- TODO: use hex color or use tailwind config done -->
	<!-- TODO: use self closing tag where there is no content inside ?????????? -->
	<!-- TODO: avoid using fixed width done-->
	<!-- TODO: remove the container div component itself is a container  done-->
	<!-- TODO: avoid using table use grid instead done-->

	<!-- <div class="container flex justify-center"> -->
	<div class="playercard relative flex p-4 m-2 rounded bg-[var(--bg-lightblue)] sm:w-9/10 ">
		<div class="player-detail w-3/5">
			<p class="p-name mb-3 text-xl"><span class="text-base text-slate-500">#{{ rank }}</span> {{ playerName }}
			</p>
			<!-- <table class="text-xs border-spacing-3 my-1 border-slate-400 ...">
					<tr>
						<td class=" pr-2">Success Rate</td>
						<td class="pr-2">79%</td>
					</tr>
					<tr>
						<td class="pr-2">Error Rate</td>
						<td class="pr-2">15%</td>
					</tr>
					<tr>
						<td class="pr-2">skip Rate</td>
						<td class="pr-2">79%</td>
					</tr>
				</table> -->
			<!-- grid alternative -->
			<div class="inner-details mb-3 leading-relaxed text-xs grid grid-cols-2 ">
				<p>Success Rate</p>
				<p>{{ successRate.toFixed(1) }}%</p>
				<p>Error Rate</p>
				<p>{{ errorRate.toFixed(1) }}%</p>
				<p>Skip Rate</p>
				<p>{{ skipRate.toFixed(1) }}%</p>
			</div>
			<!-- TODO: span is unnecessary -->
			<p class="text-2xl">Score {{ score.toFixed(2) }}</p>
		</div>
		<div class="action-el w-2/5 grid grid-cols-2 gap-x-2 ">
			<div class="right-ac ">
				<div class="bg-[var(--bg-green)] max-w-xl rounded"><img class="mx-auto" :src="Right" alt="Right">
				</div>
				<p class="right-count text-center">{{ rightCount }}</p>
			</div>
			<div class="wrong-ac ">
				<div class="bg-[var(--bg-pink)] rounded"><img class="mx-auto" :src="Cross" alt="Cross"></div>
				<p class="wrong-count text-center">{{ wrongCount }}</p>
			</div>
			<div class="skip-ac">
				<div class="bg-my-blue rounded"><img class="mx-auto" :src="Circle" alt="circle"></div>
				<p class="skip-count text-center">{{ unattempted }}</p>
			</div>
		</div>
		<span class="dots absolute bottom-1 right-0 "><img class="mx-auto h-7" :src="Dots" alt="dots"></span>
	</div>
	<!-- </div> -->

</template>

<style>
:root {
	--bg-green: #058337;
	--bg-blue: #1e6ee5;
	--bg-pink: #c2185b;
	--bg-lightblue: #e3eeff;
}
</style>