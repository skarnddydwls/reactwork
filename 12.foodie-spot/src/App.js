import { useState } from 'react';
import './App.css';

/*
  #1 동적 모달창 만들기
    1. UI 디자인 하기
    2. UI의 현재 상태를 state 저장해 놓기
    3. state에 따라 UI를 어떻게 보일지 조건문 등으로 작성
*/

/*
  
  #2 글 목록 줄이기
    1. 반복문
    2. 컴포넌트로 만들기
*/

/*

*/

/*
  #4 삭제하기
*/



function App() {
  const [like, setLike] = useState([0, 0, 0]);
  // 1. state로 index 정보 저장
  const [index ,setIndex] = useState(0);

  let [title, setTitle] = useState(['김밥','초밥','우동']);
  let [modal, setModal] = useState(false);

  let [inputValue, setInputValue] = useState('');

  // 글 목록을 반복문으로 줄이기
  return (
    <div className="App">
      <h2>FOODIE SPOT</h2>

      {/* 배열의 주소가 복사되어 주소는 바뀌지 않으므로 리렌더링이 안됨
      <button onClick={() => {
      let copy = title;
      copy[0] = '김밥천국';
      setTitle(copy);
      }}>수정</button> */}
      
      
      {
        title.map((v, i) => {
          return(
            <div className='list' key={i}>
            {/* 2. index번호 수정 */}
            <h4 onClick={() => {setModal(!modal); setIndex(i);}}>{v}</h4>
            <p><span onClick={() => {
                                      let copy = [...like];
                                      copy[i] = copy[i]+1;
                                      setLike(copy)
                                    }}>👍🏿</span> {like[i]} </p>

              <button onClick={()=> {
                let copy = [...title];
                copy.splice(i, 1);
                setTitle(copy);  
              }}>삭제</button>
            </div>
          )
        })
      }

      <input onChange={(e)=>{setInputValue(e.target.value)}}></input> &emsp;
      <button onClick={() => {
        let ctitle = [...title];
        let clike = [...like];
        ctitle.unshift(inputValue)
        clike.unshift(0);
        //title.unshift(inputValue);
        setTitle(ctitle);
        setLike(clike);
      }}>추가</button>

      {/* 3. index 넘겨주기 */}
      {modal ? <Modal title={title} like={like} setTitle={setTitle} setInputValue={setInputValue} index={index} inputValue={inputValue}/> : null}
    </div>
  );
}

function Modal({title, like, setTitle, index, inputValue, setInputValue}){
  return(
    <div className='modal'>
      <h4>{title[index]}</h4>
      <p>{like[index]}</p>

      {/* 버튼을 모달에서 사용 */}
      <input onChange={(e)=>{setInputValue(e.target.value)}}></input>
      <button onClick={() => {
        let copy = [...title];
        copy[index] = inputValue;
        setTitle(copy);
      }}>수정</button>
    </div>
  )
}

export default App;
