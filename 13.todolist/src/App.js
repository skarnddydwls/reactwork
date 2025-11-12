import { useState, useRef } from 'react';
import './App.css';
import Editor from './component/Editor';
import Header from './component/Header';
import List from './component/List';

const tmpData = [
  {id: 4, isDone: false, content: '집 가기', date: new Date().toLocaleDateString()}, 
  {id: 3, isDone: false, content: '지하철 타기', date: new Date().toLocaleDateString()}, 
  {id: 2, isDone: false, content: '버스 타기', date: new Date().toLocaleDateString()}, 
  {id: 1, isDone: false, content: '양치 하기', date: new Date().toLocaleDateString()}, 
]

// 체크박스가 체크가 되게 하기
// isDone값이 true가 되어야 함

function App() {
  const [todos, setTodos] = useState(tmpData);

  // id를 기존 데이터의 id번호 다음 번호로 세팅하기
  /*
      useRef(): React Hook 중 하나
                컴포넌트가 리렌더링 되어도 값이 유지되는 컨테이너 역할을 함
  */

  const idRef = useRef(5); // id가 0~2번까지 있어서 3번부터 시작
  const onCreate = (content) => {
    const newItem = {
      id: idRef.current++, 
      isDone: false, 
      content: content, 
      date: new Date().toLocaleDateString()
    } 

    setTodos([newItem, ...todos]);
  }

  const onUpdate = (targetId) => {
    setTodos(todos.map( todo => {
      if(todo.id === targetId) {
        return {
          ...todo,
          isDone: !todo.isDone
        }
      }
      return todo
    }))

    // setTodos(todos.map(todo => todo.id === targetId ? {... todo, isDone: !todo.isDone}: todo)) 
  }

  const onDelete = targetId => {
    const is = window.confirm("진짜 삭제할거야??");
    if(is) setTodos(todos.filter(todo => todo.id != targetId))
  }

  return (
    <div className="App">
      <Header/>
      <Editor onCreate={onCreate}/>
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete}/>
    </div>
  );
}

export default App;
