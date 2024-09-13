<script setup>
import { ref } from 'vue';
import TodoView from './TodoView.vue';
import CompletedView from './CompletedView.vue';

let showCompleted = ref(false);

function switchList() {
  showCompleted.value = !showCompleted.value;
  console.log(showCompleted.value);
}
</script>

<template>
  <h1>Task List</h1>
  <table>
    <tbody>
      <tr>
        <td v-on:click="switchList">Tasks</td>
        <td>Completed</td>
      </tr>
    </tbody>
  </table>
  <TodoView :showCompleted="showCompleted" />
</template>
