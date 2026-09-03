<script setup lang="ts">
import AppLogo from "@/components/AppLogo.vue";
import { useAuth } from "@/composables/useAuth";

const { user } = useAuth();

console.log("header component");
</script>

<template>
	<div class="wrap">
		<header class="container mx-auto py-4">
			<AppLogo />
			<nav class="app-nav">
				<router-link to="/">Home</router-link>
				<template v-if="user">
					<router-link to="/dashboard">Dashboard</router-link>
				</template>
				<template v-else>
					<router-link to="/auth/login">Login</router-link>
					<router-link to="/auth/register">Register</router-link>
				</template>
			</nav>
		</header>
	</div>
</template>

<style scoped>
/* Placeholder */

.wrap {
	background: var(--primary);
	box-shadow: 1px 0 2px rgba(0, 0, 0, 0.75);
}

header {
	display: flex;
	justify-content: space-between;
	align-items: center;
}
</style>
