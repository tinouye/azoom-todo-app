<script setup>
let todoList = [];
let inputDate = "";
let inputItem = "";
function addtodoItem(){
  todoList.push([inputDate, inputItem])
}
</script>

<template>
  <div>
    <h1>Hello World!</h1>>
    <list>
      <tr>
        <th>Date</th>
        <th>Item</th>
        <th>Status</th>
      </tr>
      <tr>
        <td>1/2/34</td>
        <td>Foo</td>
        <td><input type="checkbox"></td>
      </tr>
    </list>
    <form v-on:submit.prevent="addtodoItem">
      <input type="text" required placeholder="Date" v-model="inputDate">
      <input type="text" required placeholder="Item name" v-model="inputItem">
      <button type="submit">Add Item</button>
    </form>
  </div>
</template>
