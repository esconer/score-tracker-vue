<script setup lang="ts">
import PlayerCard from '@/components/PlayerCard.vue';
</script>

<template>
	<PlayerCard :rank="10" player-name="I'm esconer" :right-count="70" :wrong-count="70" :total-count="150" />
	<PlayerCard :rank="15" player-name="Sumit" :right-count="50" :wrong-count="60" :total-count="150" />
</template> 
