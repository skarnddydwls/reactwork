import './App.css';

function App() {
  // 변수나 함수를 정의하여 사용
  const name= "남궁용진";
  let classname= "풀스택";
  var value= "변수";
  const funcName= () => {


    return '함수에서 문자 반환';
  }
  // 사용할 땐 중괄호({ }) 안에서 사용
  return (
    <div className="App">
      <h1>{name}은 교육받고 있어요</h1>
      <h2>{classname} 교육이요</h2>

      <h3>중괄호 안에 넣을 수 있는 것들</h3>
      <ul>
        <li>{"문자"}와 {1+5}(숫자) 사용 가능</li>
        <li>{funcName()}: 함수 사용 가능</li>
        <li>변수에 들어있는 값 출력 가능</li>
      </ul>

      <h3>중괄호 안에 넣을 수 없는 것들</h3>
      <ul>
        <li>{true} boolean 불가능</li>
        <li>{[ ]} 배열 불가능</li>
      </ul>
    </div>
  );
}

export default App;
