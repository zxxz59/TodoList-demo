<script setup>
import { storeToRefs } from 'pinia';
import todo from '../store/modules/todo'
const todoFn = todo()
const { left } = storeToRefs(todoFn)
// 底部筛选
const filterIt = (item) => {
  todoFn.changeActive(item)
}
</script>

<template>
  <footer class="footer">
    <span class="todo-count"><strong>{{ left }}</strong> item left</span>
    <ul class="filters">
      <li>
        <a class="selected" href="#/" @click="filterIt('all')">All</a>
      </li>
      <li>
        <a href="#/active" @click="filterIt('active')">Active</a>
      </li>
      <li>
        <a href="#/completed" @click="filterIt('completed')">Completed</a>
      </li>
    </ul>
    <button class="clear-completed" @click="todoFn.clearCompleted">Clear completed</button>
  </footer>
</template>

<style lang="less" scoped>

</style>
