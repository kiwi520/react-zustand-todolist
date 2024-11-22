import { create } from 'zustand'

const useStore = create((set) => ({
    item: "",
    setItem: (item) => {
        set(() => ({
            item: item
        }))
    },
    list: [],
    setList: (item) => {
        set(state => ({
            list: [...state.list, item]
        }))
    },
    toggleItem: (id, completed) => {
        set(state => ({
            list: state.list.map((item) => {
                if (item.id === id) {
                    return {...item, completed: !completed}
                }
                return item
            })
        }))
    },
    deleteItem: (id) => {
        set(state => ({
            list: state.list.filter((item) => item.id !== id)
        }))
    }
}))

export default useStore
