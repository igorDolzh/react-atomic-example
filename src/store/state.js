import { stateA } from './atomic'
import { cursor } from 'atom-observable'

export let todoListC = cursor(stateA,['todoList'])

export default {
    todoListC
}