<script setup lang="ts">
import { useAuth } from "../composables/useAuth";

const { user } = useAuth();
</script>

<template>
	<section class="py-12">
		<h2>Home</h2>
		<p v-if="user">
			Welcome back, <strong>{{ user.name }}</strong
			>. Head to your <router-link to="/dashboard">dashboard</router-link>.
		</p>
	</section>
</template>
