<script setup lang="ts">
const test = async () => {
	const { data } = await useFetch('/api/test', {
		method: 'POST',
	})
	console.log(data.value)
}
</script>
<template>
	<div>
		<button @click="test">Click me</button>
	</div>
</template>
