<script setup lang="ts">
console.log("auth layout");
</script>

<template>
	<div class="auth-layout">
		<main class="auth-forms container mx-auto p-4">
			<router-view />
		</main>
	</div>
</template>

<style scoped>
/* Placeholder */
.auth-layout {
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
	background-color: var(--gray-light);
}

.auth-forms {
	background: var(--white);
	max-width: 25rem;
	border-radius: 0.5rem;
	text-align: center;
}

.auth-forms input {
	display: block;
}
</style>
