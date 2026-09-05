<script setup lang="ts">
import { ref } from "vue";

const emit = defineEmits(["createTodo"]);

const todo = ref("");

const createTodo = () => {
	if (!todo.value.trim()) return;

	emit("createTodo", todo.value);
	todo.value = "";
};
</script>
<template>
	<div class="p-4 flex items-center justify-end">
		<input v-model="todo" type="text" placeholder="Neues Todo" class="rounded-tl rounded-bl border-l border-t border-b border-gray-200 p-2 w-full focus-outline:border-emerald-300" />
		<button
			class="border-t border-r border-b border-gray-200 p-2 bg-gray-200 rounded-tr rounded-br hover:cursor-pointer hover:bg-gray-100"
			title="Neues Todo"
			aria-label="Neues Todo"
			@click="createTodo()"
		>
			Create
		</button>
	</div>
</template>

<style scoped></style>
