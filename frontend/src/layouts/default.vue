<script setup lang="ts">
import { useAuth } from "../composables/useAuth";

const { user } = useAuth();
</script>

<template>
	<div class="default-layout">
		<div class="wrap">
			<header>
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
			</header>
		</div>

		<main>
			<router-view />
		</main>
		<div class="wrap">
			<footer class="container mx-auto">
				<p>All Rechte vorbehalten. &copy; 2026.</p>
			</footer>
		</div>
	</div>
</template>
