import { useState } from "react";

/*
    * state
        : 내부에서 변경이 가능한 데이터를 다루기 위해 사용하는 객체
          일반적으로 js에서는 변수에 담지만 react에서는 useState()라는 react 함수 사용
          
        - 특징
            : state를 정의할 때 반드시 렌더링이나 데이터 흐름에 사용되는 것만 state에 사용해야 함
            : state가 변경될 경우 component가 재렌더링이 되기 때문에 렌더링과 데이터 흐름에 관련없는 값을 
              불필요한 경우에 component가 다시 렌더링이 되어 성능을 저하시킴
            : 재렌더링또는 데이터 흐름에 관련된 값만 useState에 포함시키고 
              나머지는 component의 인스턴스 필드로 정의하면 됨
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