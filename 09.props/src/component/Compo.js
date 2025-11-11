import './Button';
import Button from './Button';

// 1. String으로 값 받기
/*const Compo = props => {
    return(
        <>
            <h3>본문</h3>
            <p>{props.user}님은 {props.addr}에 살고 있음</p>
        </>
    )
}*/

// 2.1 객체의 형태 값 그대로(객체의 형태로) 받기
/*const Compo = user => {
    return(
        <>
            <h3>본문</h3>
            <p>{user.user.name}은 {user.user.addr}에 살고 있고, <br/>
                {user.user.likeList[2]}를 좋아함
            </p>
        </>
    )
}*/

// 2.2 객체의 형태를 펼쳐서 보냈을 때 받기
/*const Compo = user => {
    return(
        <>
            <h3>본문</h3>
            <p>{user.name}은 {user.addr}에 살고 있고, <br/>
                {user.likeList.length}개 중에 {user.likeList[2]}를 좋아함
            </p>
        </>
    )
}*/

// 2.3 객체를 풀어서 보내고, 객체 분해 할당으로 받기
/*const Compo = ({name, addr, likeList}) => {
    return(
        <>
            <h3>본문</h3>
            <p>
               {name}님은 {addr}에 살고 있고, <br/>
               {likeList}를 좋아하는군요?
            </p>
        </>
    )
}*/

const Compo = () => {
    const btnProps = {
        text: "내가 만든",
        color: ["red", "yellow", "green", "skyblue"],
        a: 1,
        b: 2,
        c: 3
    }

    function btnClick(e){ // e에 뭐가 들어간다고? A.버튼에서 발생한 이벤트가 들어감
        alert("버튼 누름?");
        console.log(e);
        console.log(e.target.name);
    }

    return(
        <>
        <h3>본문</h3>

        <button name="A버튼" onClick={btnClick}>A버튼 이벤트</button><br/>
        <button name="B버튼" onClick={btnClick}>B버튼 이벤트</button><br/><br/>

        <Button {...btnProps}/>
        </>
    )
}

export default Compo;