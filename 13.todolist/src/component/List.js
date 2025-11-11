import TodoItem from "./TodoItem";

const List= ({todos}) => {
    
    return(
        <>
            <h4>To do List</h4>
            <input placeholder="검색어를 넣어주세요"></input> &emsp;
            <button>검 색</button><br/><br/><br/>
            <table align="center" border={'solid'}>
                <tr>
                    <th width='20%'>ID</th>
                    <th width='60%'>To do</th>
                    <th width='20%'>Date</th>
                </tr>
            </table>
            
            <div>
                {
                    todos.map((todos,i) => <TodoItem todos={todos}/>)
                }
            </div>
        </>
    )
}

export default List;