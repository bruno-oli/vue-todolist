<template>
  <div class="flex w-full flex-col gap-2">
    <div
      v-for="task in store.tasks"
      class="w-full px-4 py-2 flex gap-6 justify-between items-center bg-slate-950 rounded-sm cursor-pointer"
      :key="task.id"
    >
      <input
        type="text"
        v-model="task.title"
        class="flex-1 outline-none border-none bg-transparent focus:text-emerald-400 text-slate-300 font-Roboto font-bold transition-colors"
      />
      <div class="flex gap-2 items-center">
        <input type="checkbox" v-model="task.completed" />
        <button @click="() => store.removeAnTask(task.id)">
          <font-awesome-icon
            icon="fa-solid fa-trash"
            class="text-slate-300 hover:text-red-500 transition-colors"
          />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import useTasksStore from "../stores/TasksStore";

const store = useTasksStore();
</script>

<style scoped></style>
