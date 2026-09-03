<script setup lang="ts">
import AppLogo from "@/components/AppLogo.vue";
import { useAuth } from "@/composables/useAuth";

const { user } = useAuth();

console.log("header component");
</script>

<template>
	<div class="wrap">
		<header class="container mx-auto">
			<AppLogo />
			<nav class="app-nav">
				<router-link to="/">Home</router-link>
				<template v-if="user">
					<router-link to="/dashboard">Dashboard</router-link>
				</template>
				<template v-else>
					<router-link to="/login">Login</router-link>
					<router-link to="/register">Register</router-link>
				</template>
			</nav>
		</header>
	</div>
</template>

<style scoped>
/* Placeholder */
</style>
