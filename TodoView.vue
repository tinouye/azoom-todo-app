<script setup>
import { todoStore } from '@/stores/todo';
import { ref, computed } from 'vue';

// Get props from parent
const props = defineProps( {
    showCompleted: {
        type: Boolean,
        required: true
    }
});

let todoList = [];
let inputDate = "";
let inputItem = "";

const todoListPinia = todoStore();

const displayedList = computed(() => {
  return props.showCompleted ? todoListPinia.completed : todoListPinia.items;
})

function addTodoItem(){
  todoListPinia.addItem(inputDate, inputItem);
}

function completeItem(index){
  console.log("completing " + index);
  todoListPinia.completeItem(index);
}

function toggleCheck(index){
  if (!props.showCompleted) {
    todoListPinia.completeItem(index);
  }
  else {
    todoListPinia.unCompleteItem(index);
  }
}
</script>

<template>
  <div>
    <table>
      <thead>
        <tr>
          <th></th>
          <th>Date</th>
          <th>Title</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in displayedList">
          <td><input type="checkbox" :checked="props.showCompleted" v-on:click="toggleCheck(index)"></td>
          <td>{{ item.date }}</td>
          <td>{{ item.title }}</td>
        </tr>
        <tr>
          <td></td>
          <td>
            <input type="date" required placeholder="Date" v-model="inputDate">
          </td>
          <td>
            <input type="text" required placeholder="Item name" v-model="inputItem">
          </td>
        </tr>
      </tbody>
    </table>

    
    
    <button v-on:click="addTodoItem">Add Item</button>
  </div>
</template>
