<script setup lang="ts">
import { useRouter } from "vue-router";
import { useAuth } from "../composables/useAuth";

const router = useRouter();
const { user, logout } = useAuth();

const handleLogout = async () => {
	await logout();
	await router.push("/login");
};
</script>

<template>
	<section>
		<h2>Dashboard</h2>
		<p v-if="user">
			Logged in as <strong>{{ user.name }}</strong> ({{ user.email }})
		</p>
		<button type="button" @click="handleLogout">Logout</button>
	</section>
</template>
