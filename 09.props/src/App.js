import './App.css';
import Compo from './component/Compo';

/*
  * props
    부모가 자식 컴포넌트에게 전달하는 데이터
    자식 컴포넌트는 값 변경 불가
    자식 -> 부모 는 불가능
    형제끼리도 값 넘겨주는 것은 불가능
*/

// 1. string 값 넘겨주기
/* function App() {
  const name= "남궁용진";
  return (
    <div className="App">
      <Compo user={name} addr={"석호로"}/>
    </div>
  );
} */

// 2. 객체 형태 넘겨주기
/*function App() {
  const userInfo = {
    name: '남궁용진',
    addr: '석호로',
    likeList: ['캐릭터', '만화', '웹툰'] 
  }

  return (
    <div className="App">
      // 2.1
      <Compo user={userInfo}/>

      // 2.2 풀어서 넘겨주기
      <Compo {...userInfo} />

    </div>
  )
}*/

function App(){

  return(
    <>
     <Compo/>
    </>
  )
}

export default App;
