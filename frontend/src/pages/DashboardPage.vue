<script lang="ts">
export default {
	layout: "dashboard"
};
</script>
<script setup lang="ts">
import { useRouter } from "vue-router";
import { useAuth } from "../composables/useAuth";

const router = useRouter();
const { user, logout } = useAuth();

const handleLogout = async () => {
	await logout();
	await router.push("/auth/login");
};
</script>

<template>
	<section class="py-12 text-gray-800">
		<h2>Dashboard</h2>
		<p v-if="user">
			Logged in as <strong>{{ user.name }}</strong> ({{ user.email }})
		</p>
		<button type="button" @click="handleLogout">Logout</button>
	</section>
</template>
