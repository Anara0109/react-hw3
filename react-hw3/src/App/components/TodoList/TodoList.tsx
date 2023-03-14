import { ITodo } from "../../../types";
import TodoListItem from "../TodoListItem/TodoListItem";
import { FC } from "react"

interface ITodoListProps {
    todos: ITodo[]
    onDone: (id:number, newState:"done") => void
    onImportant: (id:number, newState:"important") => void
}

const TodoList: FC<ITodoListProps> = (props) => {
   
    return (
        <ul>          
            {props.todos.map( item => (
                <TodoListItem key={item.id} {...item} 
                onDoneClick={() => props.onDone(item.id, "done")}
                onImportantClick={() => props.onImportant(item.id, "important")}
                />
            ))}
        </ul>
    )
}

export default TodoList