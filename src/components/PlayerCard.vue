<script setup lang="ts">
import Circle from '@/assets/icons/circle.svg';
import Cross from '@/assets/icons/cross.svg';
import Right from '@/assets/icons/right.svg';
import Dots from '@/assets/icons/sots.svg';
</script>

<template>
	<!-- NOTE: use the imported Circle, Cross etc int the :src of a image tag -->
	<!-- <img :src="Circle" alt="circle" /> -->
	<!-- Hello PlayerCard -->
		<header class="text-5xl p-4 mx-4 justify-center flex w-auto  "> Score Tracker </header>
		<h4 class="flex pl-4 float-left text-xl w-auto ">Total Player : 3</h4>
		<h4 class="text-xl  float-right flex mb-2 pr-4">Total Questions : 100</h4>
		 
	<section class="absolute w-screen items-center justify-center mt-14 grid">
		
		<span class="w-80   bg-blue-100 h-56  ml-8 rounded-lg ">
			<h1 class="text-2xl m-3 font-semibold">#1 Shirshendu Bairagi</h1>
				<img class="float-right mr-2 bg-red-600 rounded-lg" :src="Cross" alt="Cross" />
				<img class="float-right mr-3 bg-green-600 rounded-lg" :src="Right" alt="Right" />
			<h3 class="text-lg ml-4">Success Rate : 89% </h3>
			<h3 class="text-lg ml-4">Error Rate : 8%</h3>
				<p class="float-right  mr-6">08</p>
				<p class="float-right  mr-10">89</p>
			<h3 class="text-lg ml-4">Skip Rate : 3%</h3>
				<img class="float-right mr-16 mt-2 bg-blue-600 rounded-lg" :src="Circle" alt="circle" />
			<h1 class="text-3xl ml-4 mt-4 font-semibold">Score : 87.00</h1>
				<p class="  ml-56">03</p>
	</span>

	<span class="w-80 bg-blue-100 h-56 m-8  rounded-lg ">
			<h1 class="text-2xl m-3 font-semibold">#2 Sumit Dey</h1>
				<img class="float-right mr-2 bg-red-600 rounded-lg" :src="Cross" alt="Cross" />
				<img class="float-right mr-3 bg-green-600 rounded-lg" :src="Right" alt="Right" />		
			<h3 class="text-lg ml-4">Success Rate : 89% </h3>
			<h3 class="text-lg ml-4">Error Rate : 8%</h3>
			<p class="float-right  mr-6">08</p>
				<p class="float-right  mr-10">89</p>
			<h3 class="text-lg ml-4">Skip Rate : 3%</h3>
				<img class="float-right mr-16 mt-2 bg-blue-600 rounded-lg" :src="Circle" alt="circle" />
			<h1 class="text-3xl m-3 font-semibold">Score : 87.00</h1>
				<p class="  ml-56">03</p>

	</span>

	<span class="w-80 bg-blue-100 h-56 m-8 mt-0 rounded-lg ">
			<h1 class="text-2xl m-3 font-semibold">#3 Sukanta Mondal</h1>
				<img class="float-right mr-2 bg-red-600 rounded-lg" :src="Cross" alt="Cross" />	
				<img class="float-right mr-3 bg-green-600 rounded-lg" :src="Right" alt="Right" />
			<h3 class="text-lg ml-4">Success Rate : 89% </h3>
			<h3 class="text-lg ml-4">Error Rate : 8%</h3>
			<p class="float-right  mr-6">08</p>
				<p class="float-right  mr-10">89</p>
			<h3 class="text-lg ml-4">Skip Rate : 3%</h3>
				<img class="float-right mr-16 mt-2 bg-blue-600 rounded-lg" :src="Circle" alt="circle" />
			<h1 class="text-3xl m-3 font-semibold">Score : 87.00</h1>
				<p class="  ml-56">03</p>
	</span>
	</section>
</template>
	