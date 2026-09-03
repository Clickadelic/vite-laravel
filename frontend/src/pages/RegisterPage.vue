<script setup lang="ts">
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { useAuth } from "../composables/useAuth";

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
	<section class="auth-forms">
		<p v-if="errorMessage" class="error">{{ errorMessage }}</p>

		<form @submit.prevent="handleRegister">
			<h2>Register</h2>
			<input v-model="registerForm.name" type="text" placeholder="Name" required />
			<input v-model="registerForm.email" type="email" placeholder="Email" required />
			<input v-model="registerForm.password" type="password" placeholder="Password" required />
			<input
				v-model="registerForm.password_confirmation"
				type="password"
				placeholder="Confirm password"
				required
			/>
			<button type="submit" :disabled="loading">Register</button>
		</form>

		<p>
			Already have an account? <router-link to="/login">Login</router-link>
		</p>
	</section>
</template>
