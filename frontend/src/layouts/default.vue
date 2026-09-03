<script setup lang="ts">

import AppFooter from "@/components/AppFooter.vue";
</script>

<template>
	<div class="default-layout">
		<main class="container mx-auto">
			<router-view />
		</main>
		<AppFooter />
	</div>
</template>
