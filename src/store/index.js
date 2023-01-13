import useTodosStore from "./modules/todo"
const useStore = () => {
    return {
        todos: useTodosStore()
    }
}
export default useStore