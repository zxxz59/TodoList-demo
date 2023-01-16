<script setup>
import useStore from '../store/index.js'
import todoit from '../store/modules/todo'
import { storeToRefs } from "pinia";
const { todos } = useStore()
const todoFn = todoit()
const { listShow } = storeToRefs(todos)
</script> 

<template>
  <div class="main">
    <ul class="todo-list">
      <li :class="item.done ? 'completed' : ''" v-for="item in listShow" :key="item.id">
        <div class="view">
          <div> <input class="toggle" type="checkbox" :checked="item.done" @change="todoFn.changeDone(item.id)" /></div>
          <div class="txt" :class="{ cross: item.done }">{{ item.name }}</div>
          <div class="destroy" @click="todoFn.delTodo(item.id)">×</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<style  scoped>
.todo-list>li {
  display: flex;
  height: 50px;
  align-items: center;
  padding-left: 40px;
  border-bottom: 1px solid rgba(250, 250, 250, 0.2);
}

.view {
  display: flex;
  height: 50px;
  width: 600px;
  align-items: center;
  justify-content: space-between;
}

.txt {
  width: 550px;
  margin-left: 20px;
  line-height: 50px;
  font-size: 24px;
  color: antiquewhite;
}

.cross {
  color:rgba(250, 250, 250, 0.2);
  text-decoration: line-through;
}

.destroy {
  height: 25px;
  width: 25px;
  border-radius: 50%;
  background: linear-gradient(to bottom right, #FF7265, #5666cb);
  font-size: 30px;
  color:antiquewhite;
  text-align: center;
  line-height: 25px;
}
</style>
