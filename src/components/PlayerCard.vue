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
	<div class="flex">
		<ul class="grid">
			<h1><span>#1</span><span>Sumit Dey</span></h1>
			<span>Success Rate 79%</span>
			<span>Error Rate 15%</span>
			<span>Skip Rate 6%</span>
			<Span>Score 98.2</Span>
		</ul>
		<div class="grid">
			<div>
				<img :src="Right" alt="Right">
				<h1>102</h1>
			</div>
			<div>
				<img :src="Cross" alt="Cross">
				<h1>19</h1>
			</div>
			<div>
				<img :src="Circle" alt="Circle">
				<h1>8</h1>
			</div>
			<div>
				<img :src="Dots" alt="Dots">
			</div>
		</div>
	</div>
</template>

<style>
div {
	background-color: #E3EEFF;
	border-radius: 5%;
}
</style>
