<template>
  <main
    class="bg-slate-900 w-screen min-h-screen flex items-center justify-center"
  >
    <section
      class="flex flex-col gap-3 justify-center align-top bg-slate-800 w-96 rounded shadow-md px-5 py-3 m-9"
    >
      <TheHeader />
      <Tasks v-if="store.tasks.length" />
      <NoTasks v-else />
      <RemoveCompletedTasks v-if="store.tasks.length" />
    </section>
  </main>
</template>

<script setup lang="ts">
import TheHeader from "./components/TheHeader.vue";
import Tasks from "./components/Tasks.vue";
import NoTasks from "./components/NoTasks.vue";
import RemoveCompletedTasks from "./components/RemoveCompletedTasks.vue";
import useTasksStore from "./stores/TasksStore";

const store = useTasksStore();
</script>
