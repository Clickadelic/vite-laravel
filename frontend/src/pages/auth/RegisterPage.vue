<script lang="ts">
export default {
	layout: "auth-layout"
};
</script>

<script setup lang="ts">
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { useAuth } from "@/composables/useAuth";

const router = useRouter();
const { register } = useAuth();

const loading = ref(false);
const errorMessage = ref("");

const registerForm = reactive({
	name: "",
	email: "",
	password: "",
	password_confirmation: ""
});

const handleRegister = async () => {
	loading.value = true;
	errorMessage.value = "";

	try {
		await register({ ...registerForm });
		await router.push("/dashboard");
	} catch (error: any) {
		errorMessage.value = error?.response?.data?.message ?? "Registration failed.";
	} finally {
		loading.value = false;
	}
};
</script>

<template>
	<section class="w-full">
		<p v-if="errorMessage" class="error">{{ errorMessage }}</p>

		<form @submit.prevent="handleRegister" class="flex flex-col gap-3 mb-3">
			<h2 class="text-center text-2xl font-medium mb-1">Registrierung</h2>
			<h3 class="text-center text-xl text-gray-500 mb-3">Willkommen bei Todo App</h3>
			<input v-model="registerForm.name" class="p-2 border border-gray-300 rounded-lg" type="text" placeholder="Benutzername" required />
			<input v-model="registerForm.email" class="p-2 border border-gray-300 rounded-lg" type="email" placeholder="Email" required />
			<input v-model="registerForm.password" class="p-2 border border-gray-300 rounded-lg" type="password" placeholder="Password" required />
			<input v-model="registerForm.password_confirmation" class="p-2 border border-gray-300 rounded-lg" type="password" placeholder="Confirm password" required />
			<button type="submit" :disabled="loading" class="bg-emerald-800 hover:bg-emerald-700 text-white hover:cursor-pointer border-gray-300 border px-3 py-2 rounded">Register</button>
		</form>

		<p class="text-center">Du hast schon einen Account? <router-link to="/auth/login">Login</router-link>.</p>
	</section>
</template>
