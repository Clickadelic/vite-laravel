<script setup lang="ts">
import { RouterLink } from "vue-router";
import { useAuth } from "@/composables/useAuth";

const { user } = useAuth();
const toggleSidebar = () => {
	const sidebar = document.querySelector(".sidebar");
	if (sidebar) {
		sidebar.classList.toggle("hidden");
	}
};
</script>
<template>
	<aside class="fixed w-64 top-0 left-0 bg-gray-200 min-h-screen">
		<h1 class="my-3 text-center font-bold"><RouterLink to="/" class="hover:text-gray-300" title="Vue Todo" aria-label="Vue Todo">Vue Todo</RouterLink></h1>
		<div class="absolute bottom-0 left-0 w-full h-24" v-if="user">
			<nav>
				<ul>
					<li>
						<RouterLink to="/dashboard/profile/{{ user.id }}" class="block p-2 hover:bg-slate-200">{{ user.name }}</RouterLink>
					</li>
				</ul>
			</nav>
		</div>
	</aside>
	<header class="fixed w-full top-0 h-16 left-64 p-2 bg-gray-200 flex justify-between items-center gap-3">
		<div class="flex justify-between items-center gap-3">
			<button class="bg-white rounded p-2 cursor-pointer size-8" @click="toggleSidebar">
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
				<template v-if="user">
					<li><router-link class="text-white hover:text-slate-300" to="/dashboard">Dashboard</router-link></li>
				</template>
				<template v-else>
					<li><router-link class="text-white hover:text-slate-300" to="/auth/login">Login</router-link></li>
					<li><router-link class="text-white hover:text-slate-300" to="/auth/register">Register</router-link></li>
				</template>
				<li><RouterLink class="text-gray-800" to="/">Dashboard</RouterLink></li>
			</ul>
		</nav>
	</header>
	<main class="w-auto ml-72 mt-24 bg-white text-gray-800"><router-view /></main>
</template>
