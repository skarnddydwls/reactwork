import { useState } from "react";

/*
    * state
        : 내부에서 변경이 가능한 데이터를 다루기 위해 사용하는 객체
          일반적으로 js에서는 변수에 담지만 react에서는 useState()라는 react 함수 사용
          
        - 특징
            : state를 정의할 때
*/

const Counter = () => {
    // let count = 0; // 값이 변경되는 함수
    const [count, setCount] = useState(0);
    return (
        <>
            <h1>{count}</h1>
            <button onClick={()=>{setCount(count+1)}}>+</button>&emsp;
            <button onClick={()=>{setCount(count-1)}}>-</button>
        </>
    )
}

export default Counter;