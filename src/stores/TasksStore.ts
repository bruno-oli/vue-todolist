import { defineStore } from "pinia";
import { ref, watchEffect } from "vue";

interface ITask {
  id: string;
  title: string;
  completed: boolean;
}

const useTasksStore = defineStore("tasks", () => {
  const tasks = ref<ITask[]>(JSON.parse(localStorage.getItem("tasks") || "[]"));

  watchEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks.value));
  });

  function addNewTask() {
    tasks.value.push({
      id: crypto.randomUUID(),
      title: `New Task ${tasks.value.length + 1}`,
      completed: false,
    });
  }

  function removeAnTask(id: string) {
    tasks.value = tasks.value.filter((i) => {
      return i.id !== id;
    });
  }

  function removeAllCompletedTasks() {
    tasks.value = tasks.value.filter((i) => {
      return !i.completed;
    });
  }

  return { tasks, addNewTask, removeAnTask, removeAllCompletedTasks };
});

export default useTasksStore;
