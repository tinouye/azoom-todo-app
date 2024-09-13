<script lang="ts" setup>
import { ref, reactive, computed } from 'vue';
import TodoView from './TodoView.vue';
import CompletedView from './CompletedView.vue';

let showCompleted = ref(false);

const selectedStyle = reactive({
  fontWeight: 'bold'
});

const deSelectedStyle = reactive({});

const tasksTitleStyle = computed(() => {
  return showCompleted.value ? deSelectedStyle : selectedStyle;
})

const completedTitleStyle = computed(() => {
  return showCompleted.value ? selectedStyle : deSelectedStyle;
})

function switchList(newValue: boolean) {
  showCompleted.value = newValue;
  console.log(showCompleted.value);
}
</script>
<style>
  h1 {
    text-align:center;
    font-family:'arial';
  }
  table {
    margin:auto;
    font-family:'arial';
  }
</style>
<template>
  <h1>Task List</h1>
  <table>
    <tbody>
      <tr>
        <td :style=tasksTitleStyle @click="() => switchList(false)">Tasks</td>
        <td :style=completedTitleStyle @click="() => switchList(true)">Completed</td>
      </tr>
    </tbody>
  </table>
  <TodoView :showCompleted="showCompleted" />
</template>
