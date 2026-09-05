<script setup lang="ts">
console.log("auth layout");
</script>

<template>
	<div class="min-h-screen flex flex-col justify-center items-center bg-slate-200">
		<main class="w-100 mx-auto p-5 bg-white rounded-md shadow flex flex-col items-center justify-between border border-gray-300">
			<router-view />
		</main>
	</div>
</template>
