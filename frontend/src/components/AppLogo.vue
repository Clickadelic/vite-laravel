<script setup lang="ts">
console.log("logo component");
</script>

<template>
	<h1 class="font-bold"><a href="/" title="Home" aria-label="Home">Vue Todo</a></h1>
</template>

<style scoped>
/* Placeholder */

a:link,
a:visited {
	text-decoration: none;
	color: var(--white);
	font-weight: 500;
	font-size: var(--text-2xl);
	text-shadow: 1px 2px 1px rgba(0, 0, 0, 0.5);
}

a:hover,
a:active {
	color: var(--gray-light);
}
</style>
