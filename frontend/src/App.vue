<script setup lang="ts">
import { onMounted, reactive, ref } from "vue";
import { useAuth } from "./composables/useAuth";

const { user, register, login, logout, fetchUser } = useAuth();

const loading = ref(false);
const errorMessage = ref("");

const registerForm = reactive({
	name: "",
	email: "",
	password: "",
	password_confirmation: ""
});

const loginForm = reactive({
	email: "",
	password: ""
});

onMounted(() => {
	fetchUser();
});

const handleRegister = async () => {
	loading.value = true;
	errorMessage.value = "";

	try {
		await register({ ...registerForm });
	} catch (error: any) {
		errorMessage.value = error?.response?.data?.message ?? "Registration failed.";
	} finally {
		loading.value = false;
	}
};

const handleLogin = async () => {
	loading.value = true;
	errorMessage.value = "";

	try {
		await login({ ...loginForm });
	} catch (error: any) {
		errorMessage.value = error?.response?.data?.message ?? "Login failed.";
	} finally {
		loading.value = false;
	}
};

const handleLogout = async () => {
	await logout();
};
</script>

<template>
	<main id="app-shell">
		<h1>Vite &amp; Laravel</h1>

		<section v-if="user">
			<p>
				Logged in as <strong>{{ user.name }}</strong> ({{ user.email }})
			</p>
			<button type="button" @click="handleLogout">Logout</button>
		</section>

		<section v-else class="auth-forms">
			<p v-if="errorMessage" class="error">{{ errorMessage }}</p>

			<form @submit.prevent="handleLogin">
				<h2>Login</h2>
				<input v-model="loginForm.email" type="email" placeholder="Email" required />
				<input v-model="loginForm.password" type="password" placeholder="Password" required />
				<button type="submit" :disabled="loading">Login</button>
			</form>

			<form @submit.prevent="handleRegister">
				<h2>Register</h2>
				<input v-model="registerForm.name" type="text" placeholder="Name" required />
				<input v-model="registerForm.email" type="email" placeholder="Email" required />
				<input v-model="registerForm.password" type="password" placeholder="Password" required />
				<input v-model="registerForm.password_confirmation" type="password" placeholder="Confirm password" required />
				<button type="submit" :disabled="loading">Register</button>
			</form>
		</section>
	</main>
</template>
