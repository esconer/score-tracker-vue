<script setup lang="ts">
import Circle from '@/assets/icons/circle.svg';
import Cross from '@/assets/icons/cross.svg';
import Right from '@/assets/icons/right.svg';
import Dots from '@/assets/icons/sots.svg';
</script>

<template>
	<!-- NOTE: use the imported Circle, Cross etc int the :src of a image tag -->
	<!-- <img :src="Circle" alt="circle" /> -->
<body>
    <div class="container1">
        <div>
            <p id="Header">Total player 4</p>
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
            <span class="container2">
				<div>
					<img :src="Right" alt="right">
					102
				</div>
				<div>
					<img :src="Cross" alt="cross">
					19
				</div>
				<div>
					<img :src="Circle" alt="circle">
					8
				</div>
            </span>
			<div id="Option">	
			<img :src="Dots" alt="dots">
			</div>
        </div>
    </div>
</body>
</template>

<style>
.container {
	display: flex;
	justify-content: spa;
}
.container1 {
    display: flex;
    justify-content: space-around;
	border-radius: 5%;
	background-color: rgb(150, 208, 249);
}

.container2 {
	display: flex;
	justify-content: space-between;
	text-align: center;
}

#Header {
	font-weight: bold;
	font-size: large;
	text-align: center;
}

P {
	text-align: left;
}

#Player-num {
	color: rgb(188, 185, 185);
	text-align: left;
	font-size: x-large
}

#Option {
	text-align: right;
}

#Player-name {
	/* font-weight: bold; */
	font-size: x-large;
}

#Score {
	font-weight: bold;
	font-size: xx-large;
}
</style>