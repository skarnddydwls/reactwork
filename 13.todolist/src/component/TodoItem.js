import { useState } from "react";

const TodoItem = ({todos}) => {
    const [items, setItems] = useState([]);

    return(
        <>
            <table align='center' border={'solid'}>
                <tr>
                    <th width='20%'>{todos.id}</th>
                    <th width='60%'>{todos.content}</th>
                    <th width='20%'>{todos.date}</th>
                </tr>
            </table>
        </>
    )
}

export default TodoItem;