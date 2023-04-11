<template>
  <button
    @click="() => store.removeAllCompletedTasks()"
    class="w-full h-12 font-Roboto font-bold text-xl shadow-md text-slate-950 rounded-sm bg-emerald-500"
  >
    Remove Completed Tasks
  </button>
</template>

<script setup lang="ts">
import useTasksStore from "../stores/TasksStore";

const store = useTasksStore();
</script>

<style scoped></style>
