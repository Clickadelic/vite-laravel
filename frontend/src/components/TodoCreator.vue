<script setup lang="ts">
import { reactive } from "vue";

const emit = defineEmits(["createTodo"]);

const todoState = reactive({
	todo: "",
	invalid: null,
	errMsg: null
});

const createTodo = () => {
	if (todoState.todo !== "") {
		emit("createTodo", todoState.todo);
		todoState.todo = "";
		return;
	}

	emit("createTodo", todoState.todo);
	todoState.todo = "";
	todoState.invalid = null;
	todoState.errMsg = null;
};
</script>
<template>
	<div class="mt-8 flex items-center justify-end">
		<input v-model="todoState.todo" type="text" placeholder="Neues Todo" class="rounded-tl rounded-bl border-l border-t border-b border-gray-200 p-2 w-full focus-outline:border-emerald-300" />
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
