<script setup lang="ts">
import { useAuth } from "../composables/useAuth";

const { user } = useAuth();
</script>

<template>
	<main id="app-shell">
		<h1>Vite &amp; Laravel</h1>

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

		<router-view />
	</main>
</template>
