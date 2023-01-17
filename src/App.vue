<script setup>
import TodoTop from './components/TodoTop.vue'
import TodoMiddle from './components/TodoMiddle.vue'
import TodoBottom from './components/TodoBottom.vue'
</script>

<template>
  <section class="todoBox">
    <TodoTop></TodoTop>
    <TodoMiddle></TodoMiddle>
    <TodoBottom></TodoBottom>
  </section>
</template>

<style>
.todoBox {
  width: 666px;
  height: 333px;
  background: linear-gradient(to bottom right, #5666cb, #FF7265);
  margin: 50px auto 0;
  border-radius: 10px;
}

input[type=checkbox] {
  position: relative;
  margin-right: 5px;
  cursor: pointer;
  font-size: 14px;
  width: 35px;
  height: 35px;
  display: inline-block;
  border-radius: 50%;
  visibility: hidden
}

input[type=checkbox]:after {
  position: absolute;
  width: 35px;
  height: 35px;
  top: 0;
  content: " ";
  color: #fff;
  display: inline-block;
  visibility: visible;
  padding: 0px 2px;
  border-radius: 50%;
  background: #c26e89;
  background: linear-gradient(to bottom right, #FF7265, #5666cb);
  border: 1px solid #c26e89;
}

input[type=checkbox]:checked:after {
  display: block;
  text-align: center;
  content: "✓";
  font-size: 26px;
  font-weight: 600;
  background-color: #c26e89;
}
</style>
