import { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import {useParams} from 'react-router-dom';

// 배열로 정보를 보여주면 삭제시 다른 정보를 보여줄 수 있음
// id를 찾아서 그 정보를 보여주는것이 오류를 줄일 수 있음
function Detail(props) {
    let {pid} = useParams();

    let findId = props.clothes.find(item => 
        item.id === pid
    ) 

    let [alert, setAlert] = useState(true);
    // 3초가 지나면 alert값을 false로 넣으시오
    useEffect(() => {
        let timer = setTimeout(()=>{
            setAlert(false);
            return() => {
                clearTimeout(timer);
            }
        },3000)
    },[])

    return (
        <div>
            {
                alert == true ? <div>3초이내 구매시 할인</div> : null
            }

            <Container>
                <Row>
                    <Col>
                        <img src={`${process.env.PUBLIC_URL}/img/${props.clothes[pid].id}.png`} width="80%"/>
                    </Col>
                    <Col>
                        <h4>{findId.title}</h4>
                        <p>{findId.content}</p>
                        <p>{findId.price}원</p>
                        <button variant="info">주문하기</button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Detail;