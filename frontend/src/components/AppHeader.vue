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
			<nav class="flex items-center justify-end gap-3">
				<template v-if="user">
					<router-link class="text-white hover:text-slate-300" to="/dashboard">Dashboard</router-link>
					<router-link class="text-white hover:text-slate-300" to="/dashboard/profile/{{ user.id }}" title="Profil" aria-label="{{ user.name }}">{{ user.name }}</router-link>
					<router-link class="text-white hover:text-slate-300" to="/auth/logout" title="Logout" aria-label="Logout">Logout</router-link>
				</template>
				<template v-else>
					<router-link class="text-white hover:text-slate-300" to="/auth/login">Login</router-link>
					<router-link class="text-white hover:text-slate-300" to="/auth/register">Register</router-link>
				</template>
			</nav>
		</header>
	</div>
</template>
