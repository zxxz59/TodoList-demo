<script setup>

import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import useTodoStore from '../store/modules/todo.js';
const todoFn = useTodoStore()
const { isCheckAll } = storeToRefs(todoFn)
const str = ref(null)
const submit = (e) => {
  if (e.key == 'Enter' && str.value != '') {
    todoFn.addTodo(str.value)
    str.value = ''
  }
}
</script>

<template>
  <div class="header">
    <label>
      <input id="toggle-all" type="checkbox" :checked="isCheckAll" @change="todoFn.checkAll(isCheckAll)" />
    </label>
    <div class="writeBox">
      <input class="write" placeholder="What are you 想弄嘞?(按下enter添加)" autofocus @keyup.enter="submit" v-model="str" />
    </div>
  </div>
</template>

<style  scoped>
.header {
  display: flex;
  justify-content: flex-start;
  margin-left: 40px;
  align-items: center;
  height: 50px;
  padding-top: 5px;
  overflow: hidden;
}

input::-webkit-input-placeholder {
  /* placeholder颜色  */
  color: #aab2bd;
  /* placeholder字体大小  */
  font-size: 24px;
  line-height: 24px;
  /* placeholder位置  */
  text-align: left;
}

.writeBox {
  margin-left: 20px;
}

.write {
  background-color: transparent;
  outline: 0;
  caret-color: #ea7072;
  width: 500px;
  height: 40px;
  border-radius: 4px;
  border: 1px solid transparent;
  color: antiquewhite;
  font-size: 24px;
}
</style>
