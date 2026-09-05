<script setup lang="ts">
import TodoCreator from "../components/TodoCreator.vue";
import { useAuth } from "../composables/useAuth";
import { ref } from "vue";
import { v4 as uuidv4 } from "uuid";
import type { Todo } from "../types/todo";

const { user } = useAuth();

const todoList = ref<Todo[]>([]);

const createTodo = (todo: string) => {
	const name = todo.trim();
	if (!name) return;

	todoList.value.push({
		id: uuidv4(),
		name,
		isCompleted: false,
		isEditing: false
	});
};

const removeTodo = (id: string) => {
	todoList.value = todoList.value.filter(todo => todo.id !== id);
};
</script>

<template>
	<section class="p-4 flex flex-col justify-center items-center gap-5">
		<p v-if="user" class="text-2xl">
			Welcome back, <strong>{{ user.name }}</strong
			>. Head to your <router-link to="/dashboard" class="underline" title="Dashboard">dashboard</router-link>.
		</p>

		<div class="h-full w-140">
			<TodoCreator @create-todo="createTodo" />

			<ul v-if="todoList.length" class="flex flex-col gap-2 mt-4">
				<li v-for="todo in todoList" :key="todo.id" class="flex items-center justify-between gap-3 p-2 border border-gray-200 rounded">
					<label class="flex items-center gap-2 flex-1">
						<input v-model="todo.isCompleted" type="checkbox" />
						<span :class="{ 'line-through text-gray-400': todo.isCompleted }">{{ todo.name }}</span>
					</label>
					<button type="button" class="text-gray-400 hover:text-red-500 hover:cursor-pointer" title="Delete" aria-label="Delete" @click="removeTodo(todo.id)">✕</button>
				</li>
			</ul>
			<p v-else class="text-center text-gray-400 mt-4">No todos yet.</p>
		</div>
	</section>
</template>
