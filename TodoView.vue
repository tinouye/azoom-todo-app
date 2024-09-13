<script lang="ts" setup>
import { todoStore } from '@/stores/todo';
import { ref, computed } from 'vue';

// Get props from parent
const props = defineProps( {
    showCompleted: {
        type: Boolean,
        required: true
    }
});

let inputDate = ref("");
let inputItem = ref("");

const todoListPinia = todoStore();

// Computed property for deciding whether to show complete or incomplete items
const displayedList = computed(() => {
  return props.showCompleted ? todoListPinia.completed : todoListPinia.items;
})

// Update Pinia state object and clear input fields
function addTodoItem(){
  todoListPinia.addItem(inputDate.value, inputItem.value);
  inputDate.value = "";
  inputItem.value = "";
}

// Handle check mark being toggled (mark as complete or incomplete)
function toggleCheck(index: number){
  if (!props.showCompleted) {
    todoListPinia.completeItem(index);
  }
  else {
    todoListPinia.unCompleteItem(index);
  }
}

// Handle delete button, delete item from state object
function deleteItem(index: number){
  if (!props.showCompleted) {
    todoListPinia.removeItem(index);
  }
  else {
    todoListPinia.removeCompleted(index);
  }
}
</script>

<style scoped>
table {
  border: 1px solid black;
  table-layout: fixed;
  width: 500px;
}
</style>

<template>
  <div>
    <table>
      <thead>
        <tr>
          <th style="width:20px"></th>
          <th style="width:150px">Date</th>
          <th>Title</th>
          <th style="width:90px"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in displayedList">
          <td><input type="checkbox" :checked="props.showCompleted" v-on:click="toggleCheck(index)"></td>
          <td>{{ item.date }}</td>
          <td>{{ item.title }}</td>
          <td><button @click="() => deleteItem(index)">Remove</button></td>  
        </tr>
        <tr v-if="!showCompleted">
          <td></td>
          <td>
            <input type="date" required placeholder="Date" v-model="inputDate">
          </td>
          <td>
            <input type="text" required placeholder="Item name" v-model="inputItem">
          </td>
          <td>
            <button @click="addTodoItem">Add Item</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
