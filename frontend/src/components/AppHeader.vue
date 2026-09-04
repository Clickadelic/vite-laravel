<script setup lang="ts">
import AppLogo from "@/components/AppLogo.vue";
import { useAuth } from "@/composables/useAuth";

const { user } = useAuth();

console.log("header component");
</script>

<template>
	<div class="bg-emerald-800">
		<header class="container mx-auto py-4 flex justify-between items-center">
			<AppLogo />
			<nav class="flex items-center justify-end gap-2">
				<router-link class="text-white hover:text-slate-300" to="/">Home</router-link>
				<template v-if="user">
					<router-link class="text-white hover:text-slate-300" to="/dashboard">Dashboard</router-link>
				</template>
				<template v-else>
					<router-link class="text-white hover:text-slate-300" to="/auth/login">Login</router-link>
					<router-link class="text-white hover:text-slate-300" to="/auth/register">Register</router-link>
				</template>
			</nav>
		</header>
	</div>
</template>
