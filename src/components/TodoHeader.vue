<script setup>

import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import useTodoStore from '../store/modules/todo.js';
const todoFn = useTodoStore()
const str = ref(null)
const submit = (e) => {
  if (e.key == 'Enter' && str.value != '') {
    todoFn.addTodo(str.value)
    str.value = ''
  }
}
</script>

<template>
  <!-- <div>{{list}}</div> -->
  <header class="header">
    <!-- <h1>todos</h1> -->
    <input class="new-todo" placeholder="What needs to be done?" autofocus @keyup.enter="submit" v-model="str" />
  </header>
</template>

<style lang="less" scoped>

</style>
