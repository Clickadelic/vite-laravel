<script setup lang="ts">
import { useAuth } from "../composables/useAuth";

const { user } = useAuth();
</script>

<template>
	<section>
		<h2>Home</h2>
		<p v-if="user">
			Welcome back, <strong>{{ user.name }}</strong
			>. Head to your <router-link to="/dashboard">dashboard</router-link>.
		</p>
		<p v-else>
			<router-link to="/login">Login</router-link> or
			<router-link to="/register">register</router-link> to get started.
		</p>
	</section>
</template>
