import { useState } from "react";

const TodoItem = ({todos, onUpdate, onDelete}) => {
    const [items, setItems] = useState([]);

    return(
        <>
            <table align='center' border={'solid'}>
                <tr>
                    <th width='10%'><input type='checkbox' checked={todos.isDone} onChange={() => {onUpdate(todos.id)}}/></th>
                    <th>{todos.content}</th>
                    <th width='30%'>{todos.date}</th>
                    <td width='12%'><button onClick={() => {onDelete(todos.id)}}>삭제</button></td>
                </tr>
            </table>
            
        </>
    )
}

export default TodoItem;