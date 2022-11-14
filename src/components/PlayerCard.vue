<script setup lang="ts">
import Circle from '@/assets/icons/circle.svg';
import Cross from '@/assets/icons/cross.svg';
import Right from '@/assets/icons/right.svg';
import Dots from '@/assets/icons/dots.svg';
</script>

<template>
	<!-- NOTE: use the imported Circle, Cross etc int the :src of a image tag -->
	<!-- <img :src="Circle" alt="circle" /> -->

	<!-- TODO: set default formatter volar -->
	<!-- TODO: setup android devices view on browser for pixel perfect development -->

	<!-- TODO: comment out any code outside of the card -->
	<!-- TODO: ids are not needed in a javascript framework so remove it -->
	<!-- TODO: leave margin and padding -->
	<!-- TODO: decrease font size -->
	<!-- NOTE: use tailwind css for better DX -->
	<!-- TODO: body is used only once in a html so never use body in component -->

	<body>
		<div class="container1">
			<div>
				<p id="Header">Total player 4</p>
				<br>
				<span class="container2">
					<p id="Player-num">#1</p>
					<p id="Player-name">Sumit Dey</p>
				</span>
				<p>Success Rate 79%</p>
				<p>Error Rate 15%</p>
				<p>Skip Rate 6%</p>
				<p id="Score">Score 98.2</p>
			</div>
			<div>
				<p id="Header">Total Questions 129</p>
				<br>
				<!-- TODO: use grid for better layout -->
				<span class="container2">
					<div>
						<img :src="Right" alt="right" id="Right">
						102
					</div>
					<div>
						<img :src="Cross" alt="cross" id="Cross">
						19
					</div>
					<div>
						<img :src="Circle" alt="circle" id="Circle">
						8
					</div>
				</span>
				<div id="Option">
					<!-- TODO: use absolute positioning for the dot -->
					<img :src="Dots" alt="dots">
				</div>
			</div>
		</div>
	</body>
</template>

<style>
.container {
	display: flex;
	/* TODO: spa is a invalid value for justify-content*/
	/* TODO: Invoke intellisense for getting possible valid values */
	justify-content: spa;
}

.container1 {
	display: flex;
	justify-content: space-around;
	border-radius: 5%;
	background-color: rgb(199, 223, 246);
}

.container2 {
	display: flex;
	justify-content: space-between;
	text-align: center;
}

#Header {
	/* font-weight: bold; */
	font-size: x-large;
	text-align: center;
}

P {
	text-align: left;
}

#Player-num {
	color: rgb(188, 185, 185);
	text-align: left;
	font-size: xx-large
}

#Player-name {
	/* font-weight: bold; */
	font-size: xx-large;
}

#Option {
	text-align: right;
}

#Score {
	font-weight: bold;
	font-size: xx-large;
}

/* TODO: use hex code instead of rgb */
#Right {
	background-color: green;
	border-radius: 20%;
}

#Cross {
	background-color: rgb(183, 3, 102);
	border-radius: 20%;
}

#Circle {
	background-color: rgb(24, 87, 248);
	border-radius: 20%;
}
</style>