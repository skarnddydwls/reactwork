import { useState } from 'react';
import './App.css';
import {Container, Nav, Navbar, Row, Col} from 'react-bootstrap';
import pList from './data/ProductList';
import { Link, Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import Detail from './pages/Detail';

/*
  * 다른 페이지로 가기
    - 기존의 페이지
      1. html파일로 페이지 만들기
      2. /???로 접속하면 html 파일을 보여줌

    - React
      1. 컴포넌트로 상세페이지 만들기
      2. /detail로 접속하면 기존의 index.html 파일을 모두 비운 후 상세페이지를 보여줌

  * react-router-dom: 페이지를 교체시켜주는 api
      1. 설치: npm i react-router-dom
      2. index.js 에 <BrowserRouter> 태그로 감싸기
*/

function App() {
  const [clothes, setClothes] = useState(pList);
  // useNavigate(): 페이지 이동을 도와주는 함수
  const navigate = useNavigate();

  return (
    <div className="App">

    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Fashion Shop</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link onClick={() => {navigate('/')}}>Home</Nav.Link>
          <Nav.Link onClick={() => {navigate('/detail')}}>Detail</Nav.Link>
          <Nav.Link onClick={() => {navigate('/cart')}}>Cart</Nav.Link>
        </Nav>
      </Container>
    </Navbar>

    <Routes>
      <Route path="/" element={
        <>
          <div className={'main-gb'}/>
          <Container>
            <Row>
              {/* 별도의 컴포넌트를 만들기 */}
              {
                clothes.map((item, i) => {
                  return(
                    <Product clothes={item} key={i}/>
                  )
                })
              }
            </Row>
          </Container>
        </>
      } />

        {/* 
          1. url 파라미터 사용 
            localhost:3000/detail/i  ==> 받을 때 useParams() : 주고 고정적인 거 사용시

            localhost:3000/detail?search=knit ==> 받을 때 useSearchParams(): 변하는 값 사용시
              
              let [params, setParams] = useSearchParam()
              params.get('search');

            <Route path="/detail/:마음대로" element={<Detail clothes={clothes}/>} />
        */}
      {/* 값을 여러개 넘겨줄 때 */}
      {/* <Route path="/detail/:pid/:member" element={<Detail clothes={clothes}/>} /> */}

      <Route path="/detail/:pid" element={<Detail clothes={clothes}/>} />
      <Route path="/cart" element={<div>장바구니임</div>} />

      {/* 위에서 정의한 path 이외에 모든 path */}
      <Route path="*" element={<div>없는 페이지 입니다</div>} />
    </Routes>
  </div>
  );
}
 


function Product(props) {
  return(
    <>
      <Col>
        <img src={`${process.env.PUBLIC_URL}/img/${props.clothes.id}.PNG`} height={100}/>
        <h4>{props.clothes.title}</h4>
        <p>{props.clothes.price}</p>
      </Col> 
    </>
  )
}

export default App;
