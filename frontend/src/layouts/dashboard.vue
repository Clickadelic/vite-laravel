<script setup lang="ts">
import { RouterLink } from "vue-router";

const customAlert = () => {
	alert("Custom alert");
};
</script>
<template>
	<aside class="fixed w-64 top-0 left-0 bg-slate-100 min-h-screen">
		<h1 class="my-3 text-center font-bold">Dashboard</h1>
	</aside>
	<header class="fixed w-full top-0 h-16 left-64 p-2 bg-slate-100 flex justify-between items-center gap-3">
		<div class="flex justify-between items-center gap-3">
			<button class="bg-white rounded p-2 cursor-pointer size-8" @click="customAlert">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					viewBox="0 0 16 16"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="lucide lucide-list-indent-decrease"
				>
					<path d="M21 5H11" />
					<path d="M21 12H11" />
					<path d="M21 19H11" />
					<path d="m7 8-4 4 4 4" />
				</svg>
			</button>
			<form><input type="text" name="search" class="bg-white rounded p-2 w-96 border border-gray-300" placeholder="Search" /></form>
		</div>
		<nav class="bg-emerald-800">
			<ul>
				<li><RouterLink class="text-gray-800" to="/">Home</RouterLink></li>
				<li><RouterLink class="text-gray-800" to="/">Dashboard</RouterLink></li>
			</ul>
		</nav>
	</header>
	<main class="w-auto ml-64 pt-16 bg-white">Check<slot /></main>
</template>

<style scoped>
/* Placeholder */
</style>
