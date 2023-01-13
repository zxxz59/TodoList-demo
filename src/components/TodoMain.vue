<script setup>
import useStore from '../store/index.js'
import todoit from '../store/modules/todo'
import { storeToRefs } from "pinia";
const { todos } = useStore()
const todoFn =todoit()
const { listShow,isCheckAll } = storeToRefs(todos)
</script> 

<template>
  <section class="main">
    <input id="toggle-all" class="toggle-all" type="checkbox" :checked="isCheckAll" @change="todoFn.checkAll(isCheckAll)"/>
    <label for="toggle-all">Mark all as complete</label>
    <ul class="todo-list">
      <li :class="item.done ? 'completed' : ''" v-for="item in listShow" :key="item.id">
        <div class="view">
          <input class="toggle" type="checkbox" :checked="item.done" @change="todoFn.changeDone(item.id)" />
          <label>{{ item.name }}</label>
          <button class="destroy" @click="todoFn.delTodo(item.id)"></button>
        </div>
      </li>
    </ul>
  </section>
</template>

<style lang="less" scoped>

</style>
