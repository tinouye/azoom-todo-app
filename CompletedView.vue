<script setup>
import { todoStore } from '@/stores/todo';



let todoList = [];
let inputDate = "";
let inputItem = "";

const todoListPinia = todoStore();

function unCompleteItem(index){
  console.log("completing " + index);
  todoListPinia.unCompleteItem(index);
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
        <tr v-for="(item, index) in todoListPinia.completed">
          <td><input type="checkbox" v-on:click="unCompleteItem(index)" checked /></td>
          <td>{{ item.date }}</td>
          <td>{{ item.title }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
