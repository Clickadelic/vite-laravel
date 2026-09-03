<script lang="ts">
export default {
	layout: "auth"
};
</script>

<script setup lang="ts">
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { useAuth } from "../composables/useAuth";

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
	<section class="auth-forms">
		<p v-if="errorMessage" class="error">{{ errorMessage }}</p>

		<form @submit.prevent="handleLogin">
			<h2>Login</h2>
			<input v-model="loginForm.email" type="email" placeholder="Email" required />
			<input v-model="loginForm.password" type="password" placeholder="Password" required />
			<button type="submit" :disabled="loading">Login</button>
		</form>

		<p>
			No account? <router-link to="/register">Register</router-link>
		</p>
	</section>
</template>
