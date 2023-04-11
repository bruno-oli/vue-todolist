<template>
  <div class="flex w-full justify-between items-center">
    <h1 class="font-Roboto font-bold text-2xl text-slate-300">Todo List</h1>
    <button
      @click="addNewTask"
      class="border-solid border-2 px-1.5 rounded-full transition-all hover:bg-emerald-500 hover:bg-opacity-80"
    >
      <font-awesome-icon icon="fa-solid fa-plus" class="text-slate-300" />
    </button>
  </div>
</template>

<script setup lang="ts">
import useTasksStore from "../stores/TasksStore";

const { addNewTask } = useTasksStore();
</script>
