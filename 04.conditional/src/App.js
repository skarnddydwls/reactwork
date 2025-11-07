import './App.css';

function App() {
  const isStudent= true;
  /*
  if(isStudent){
    return <h1>학생 입니다</h1>
  } else {
    return <h1>학생 아닙니다</h1>
  } */
  
  /* 문자열로 인식하여 출력
  return (
    <div className="App">
      if(isStudent){
        <h1>학생 입니다</h1>
      } else {
        <h1>학생 아닙니다</h1>
      }
    </div>
  );*/

  /*
  return (
    isStudent === false ? <h1>학생</h1> : <h1>성인</h1>
  ) */

  return (
    /* 문자열로 인식
    <div>
    <h1>삼항연산자</h1>
    isStudent === false ? <h1>학생</h1> : <h1>성인</h1>
    </div> */

    // 여러줄 일 때(<div>로 감싸져 있을 때) 삼항연산자로 인식하게 하려면 중괄호안에 넣어야 됨
    <div>
      { isStudent === false ? <h1>학생</h1> : <h1>성인</h1> }
    </div>
  )
}

export default App;
