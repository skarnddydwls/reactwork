import {Table, Button} from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Cart() {
    const [list, setList] = useState([]);

    const user = JSON.parse(sessionStorage.getItem('loginUser'))
  
    useEffect(() => {
        if(!user){
            alert('로그인 후 사용하세요');
            return;
        }


        axios.get('/react/getCart', {params:{memId: user.email}})
             .then(result => {
                setList(result.data);
                console.log(list);
            })
             .catch(error => {
                console.log("실패", error);
             })
    }, [])

    return (
        <div className='cart'>
            <br/>
            <h2>CART LIST</h2>
            <br/>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>상품명</th>
                        <th>가격</th>
                        <th>수량</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        list.map(c =>
                            <tr>
                                <td>{c.id}</td>
                                <td>{c.title}</td>
                                <td>{c.price}</td>
                                <td>{c.count}</td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        </div>
    )
}
export default Cart;