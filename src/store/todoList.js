import { Atom } from 'react-atomic'
class Todolist extends Atom {
    constructor(atom) {
        super(atom)
    }

    count = () => {
        return this.value.length
    }

    appendTodolist = (todo) => this.atom.reset([...this.atom.deref(), todo])

    deleteTodolist = (id) => this.atom.reset(this.atom.deref().filter((todo) => {
        if (todo.id !== id) return todo;
    }))
}

export default new Todolist([{
    id: 1,
    text: 'Write todo1'
}, {
    id: 2,
    text: 'Write async example'
}, {
    id: 3,
    text: 'Write READ.ME'
}])

