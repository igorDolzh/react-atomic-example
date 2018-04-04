import { cursor, atom, deref } from 'atom-observable'

let todoListA = [{
    id: 1,
    text: 'Write todo1'
}, {
    id: 2,
    text: 'Write async example'
}, {
    id: 3,
    text: 'Write READ.ME'
}]


export let appendTodolist = (todo) => todoListA.reset([...deref(todoListA), todo])

export let deleteTodolist = (id) => todoListA.reset(deref(todoListA).filter((todo) => {
    if (todo.id !== id) return todo;
}))
