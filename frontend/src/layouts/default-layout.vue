<script setup lang="ts">
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
</script>

<template>
	<div class="default-layout flex flex-col min-h-screen">
		<AppHeader />
		<main class="container mx-auto grow">
			<router-view />
		</main>
		<AppFooter />
	</div>
</template>
