import './App.css'; //js는 확장자명 안써줘도 됨

// 1. 별도의 style 파일을 만들어서 사용
/*
function App() {
  return (
    <>
      <h1>더조은에 오신것을 환영합니다</h1>
      <h3>java 풀스택 웹 앱 개발자 과정</h3>
      <p className="class1">class로 react style 적용하기</p>
      <p id="id1">id로 react style 적용하기</p>
    </>
  );
}*/

// 2. sytle 변수에 객체로 저장해서 사용
/*
function App(){
  const style = {
        div: {
          backgroundColor: 'green',
          padding: '30px',
          textAlign: 'center',
        },
        h1: {color: 'skyblue'},
        class1: {color: 'yellow'},
        id1: {color: 'hotpink'},
        h3: {color: 'black'}
      }

  return (
    <div style={style.div}>
      <h1 style={style.h1}>더조은에 오신것을 환영합니다</h1>
      <h3 style={style.h3}>java 풀스택 웹 앱 개발자 과정</h3>
      <p style={style.class1}>class로 react style 적용하기</p>
      <p style={style.id1}>id로 react style 적용하기</p>
    </div>
  );
}*/

// 3. inline 방식으로 style 주기
function App() {
  return (
    <div style={{textAlign: 'center', backgroundColor: 'pink'}}>
      <h1 style={{color:'red'}}>더조은에 오신것을 환영합니다</h1>
      <h3>java 풀스택 웹 앱 개발자 과정</h3>
      <p style={{color:'blue'}}><b>class로 react style 적용하기</b></p>
      <p >id로 react style 적용하기</p>
    </div>
  );
}

export default App;
