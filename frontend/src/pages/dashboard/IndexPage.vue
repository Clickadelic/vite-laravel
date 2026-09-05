<script lang="ts">
export default {
	layout: "dashboardLayout"
};
</script>
<script setup lang="ts">
import { useRouter } from "vue-router";
import { useAuth } from "@/composables/useAuth";

const router = useRouter();
const { user, logout } = useAuth();

const handleLogout = async () => {
	await logout();
	await router.push("/auth/login");
};
</script>

<template>
	<section class="text-gray-800">
		<h2 class="text-2xl">Dashboard</h2>
		<p v-if="user">
			Logged in as <strong>{{ user.name }}</strong> ({{ user.email }})
		</p>
		<button type="button" class="bg-gray-200 hover:cursor-pointer hover:bg-gray-100 border-gray-300 border px-3 py-2 rounded" @click="handleLogout">Logout</button>
	</section>
</template>
