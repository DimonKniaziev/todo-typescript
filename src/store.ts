import { create } from "zustand";
import { persist } from 'zustand/middleware';
import { ITodoList } from "./interfaces";

interface ITodosState { 
    maxId: number,
    todos: ITodoList,
    addTodo: (label: string) => void,
    toggleImportant: (itemId: number) => void,
    toggleDone: (itemId: number) => void,
    deleteTodo: (itemId: number) => void,
}

const useTodos = create<ITodosState>()(
    persist(
        set => ({
            maxId: 100,
            todos: [
                {label: "Learn React", important: false, done: false, id: 1},
                {label: "Learn Zustand", important: false, done: false, id: 2}
            ],

            addTodo: (label) => set(state => {
                const newTodo = {label, important: false, done: false, id: state.maxId};

                return {todos: [...state.todos, newTodo], maxId: state.maxId + 1};
            }),

            toggleImportant: (itemId) => set(state => {
                const idx = state.todos.findIndex((el) => el.id === itemId);
                const oldItem = state.todos[idx];
                const newItem = {...oldItem, important: !state.todos[idx].important};

                return {todos: [...state.todos.slice(0, idx), newItem, ...state.todos.slice(idx+1)]};
            }),

            toggleDone: (itemId) => set(state => {
                const idx = state.todos.findIndex((el) => el.id === itemId);
                const oldItem = state.todos[idx];
                const newItem = {...oldItem, done: !state.todos[idx].done};

                return {todos: [...state.todos.slice(0, idx), newItem, ...state.todos.slice(idx+1)]};
            }),

            deleteTodo: (itemId) => set(state => {
                const idx = state.todos.findIndex((el) => el.id === itemId);

                return {todos: [...state.todos.slice(0, idx), ...state.todos.slice(idx+1)]};
            })
        }),
        {
            name: 'todos-storage'
        }
    )
)

interface IFilterState {
    searchTerm: string,
    filter: string,
    setSearchTerm: (searchTerm: string) => void,
    setFilter: (filter: string) => void,
}

const useFilter = create<IFilterState>()(set => ({
    searchTerm: '',
    filter: 'all',

    setSearchTerm: (searchTerm: string) => set({searchTerm}),

    setFilter: (filter: string) => set({filter})
}))

export {useTodos, useFilter};