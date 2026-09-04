<script setup lang="ts">
import { useAuth } from "../composables/useAuth";

const { user } = useAuth();
</script>

<template>
	<section class="p-4 flex flex-col justify-center items-center gap-5">
		<p v-if="user" class="text-2xl">
			Welcome back, <strong>{{ user.name }}</strong
			>. Head to your <router-link to="/dashboard" class="border border-gray-300 bg-gray-100 p-2 rounded-md" title="Dashboard">dashboard</router-link>.
		</p>

		<div class="h-full bg-rose-200">TodoList</div>
	</section>
</template>
