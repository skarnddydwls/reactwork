import { useState } from "react";
import TodoItem from "./TodoItem";

const List= ({todos, onUpdate, onDelete}) => {
    const [search, setSeacrch] = useState('');

    // 검색하기
    const getFilteredData = function() {
        if(search === '') return todos;

        return todos.filter((todo) => {

            return todo.content.includes(search); // 대소문자 가림

            // todos.content.toLowerCase().include(search.toLowerCase()); 
        })
    }

    const filetereTodos = getFilteredData();
    
    return(
        <>
            <h4>To do List</h4>
            <input placeholder="검색어를 넣어주세요" 
                onChange={(e) => {setSeacrch(e.target.value)}}
            /> &emsp; <br/><br/><br/>

            {/* <table align="center" border={'solid'}>
                <tr>
                    <th width='10%'>ID</th>
                    <th width='60%'>To do</th>
                    <th width='20%'>Date</th>
                    <th width='10%'>Delete</th>
                </tr>
            </table> */}
            
            <div>
                {
                    filetereTodos.map((todos) => <TodoItem todos={todos} onUpdate={onUpdate} onDelete={onDelete}/>)
                }
            </div>
        </>
    )
}

export default List;