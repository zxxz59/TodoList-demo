import { defineStore } from "pinia"
const useTodoStore = defineStore('todos', {
    persist: {
        key: 'todosKeys',
        storage: sessionStorage,
        paths: ['list']
    },
    state () {
        return {
            list: [
                { id: 1, name: '使用说明', done: false },
                { id: 2, name: '1.顶部选择按钮全选反选', done: false },
                { id: 3, name: '2.点击左侧选择按钮选择已完成项', done: false },
                { id: 4, name: '3.底部按钮全部-未完成-已完成-清除所有完成项', done: false },
                { id: 5, name: '4.已完成效果', done: true },
                { id: 6, name: 'have a good time', done: false }
            ],
            activeBtn: 'all'
        }
    },
    getters: {
        isCheckAll () {
            return this.list.every(item => item.done)
        },
        itemShow () {
            return this.listShow.length
        },
        listShow () {
            switch (this.activeBtn) {
                case 'all':
                    return this.list
                case 'active':
                    return this.list.filter(item => !item.done)
                case 'completed':
                    return this.list.filter(item => item.done)
                default:
                    return []
            }
        }
    },
    actions: {
        delTodo (id) {
            this.list = this.list.filter(item => item.id !== id)
        },
        addTodo (str) {
            this.list.push({ id: Date.now(), name: str, done: false })
        },
        changeDone (id) {
            let index = this.list.findIndex(item => item.id == id)
            this.list[index].done = !this.list[index].done
        },
        checkAll (boolean) {
            this.list.forEach(item => item.done = !boolean)
        },
        changeActive (item) {
            this.activeBtn = item
        },
        clearCompleted () {
            this.list = this.list.filter(ele => !ele.done)
        }
    }
})
export default useTodoStore 