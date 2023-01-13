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
                { id: 1, name: '吃饭', done: true },
                { id: 2, name: '睡觉', done: false },
                { id: 3, name: '打豆豆', done: true },
            ],
            activeBtn: 'all'
        }
    },
    getters: {
        isCheckAll () {
            return this.list.every(item => item.done)
        },
        left () {
            return this.list.filter(item => !item.done).length
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