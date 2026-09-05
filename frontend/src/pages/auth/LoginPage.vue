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
const { login } = useAuth();

const loading = ref(false);
const errorMessage = ref("");

const loginForm = reactive({
	email: "",
	password: ""
});

const handleLogin = async () => {
	loading.value = true;
	errorMessage.value = "";

	try {
		await login({ ...loginForm });
		await router.push("/dashboard");
	} catch (error: any) {
		errorMessage.value = error?.response?.data?.message ?? "Login failed.";
	} finally {
		loading.value = false;
	}
};
</script>

<template>
	<section class="w-full">
		<p v-if="errorMessage" class="error">{{ errorMessage }}</p>

		<form @submit.prevent="handleLogin" class="flex flex-col gap-3 mb-3">
			<h2 class="text-center text-2xl font-medium mb-1">Login</h2>
			<h3 class="text-center text-xl text-gray-500 mb-3">Willkommen zurück</h3>
			<input v-model="loginForm.email" class="p-2 border border-gray-300 rounded-lg" type="email" placeholder="Email" required />
			<input v-model="loginForm.password" class="p-2 border border-gray-300 rounded" type="password" placeholder="Password" required />
			<button type="submit" :disabled="loading" class="bg-emerald-800 hover:bg-emerald-700 text-white hover:cursor-pointer border-gray-300 border px-3 py-2 rounded">Login</button>
		</form>

		<p class="text-center mb-3">
			Noch kein Account? Zur <router-link to="/auth/register" aria-label="Registrierung" title="Registrierung" class="text-emerald-800 hover:text-emerald-700">Registrierung</router-link>.
		</p>
		<p class="text-center text-sm">
			Passwort vergessen? <router-link to="/auth/passwort-zuruecksetzen" aria-label="Passwort zurücksetzen" title="Passwort zurücksetzen" class="underline">Passwort zurücksetzen</router-link>.
		</p>
	</section>
</template>
