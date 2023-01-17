<script setup>
import { storeToRefs } from 'pinia';
import todo from '../store/modules/todo'
const todoFn = todo()
const { itemShow, activeBtn } = storeToRefs(todoFn)
// 底部筛选
const filterIt = (item) => {
  todoFn.changeActive(item)
}
</script>

<template>
  <footer class="bottom">
    <div class="count"><strong>{{ itemShow }}</strong> item show</div>
    <div class="filters">
      <div class="click " :class="activeBtn == 'all' ? 'border-active' : ''" @click="filterIt('all')">
        All
      </div>
      <div class="click" :class="activeBtn == 'active' ? 'border-active' : ''" @click="filterIt('active')">
        Active
      </div>
      <div class="click" :class="activeBtn == 'completed' ? 'border-active' : ''" @click="filterIt('completed')">
        Completed
      </div>
    </div>
    <div @click="todoFn.clearCompleted" class="click"> Clear completed</div>
  </footer>
</template>

<style  scoped>
.bottom {
  color: #155B93;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
}

.bottom strong {
  color: #FF7265;
}

.click {
  cursor: pointer;
}

.border-active {
  border: 1px solid #102693;
  border-radius: 3px;
  padding: 2px 5px;
}

.filters {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 250px;
}
.filters div{
text-align: center;
}
</style>
