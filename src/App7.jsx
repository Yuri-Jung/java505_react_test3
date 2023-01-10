//App7.jsx

import React from "react";
import Culculator from "./folder4/Culculator";
import App from "./folder4/App";
import App2 from "./folder4/App2";
import App4 from "./folder4/App4";
import DarkOrLight from "./folder4/DarkOrLight";


// 라우터 추가된 후 추가된 부분
import {BrowserRouter,Routes, Route} from "react-router-dom";

import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Blogs from "./Pages/Blogs";
import Contact from "./Pages/Contact";
import NoPage from "./Pages/NoPage";
import Board from "./Pages/Board";
import Board2 from "./Pages/Board2";

function App7() {
    return (
        // <div>
        //     <Culculator />
        //     <App/>
        //     <hr/>
        //     <App2/>
        //     <hr />
        //     <DarkOrLight/>
        //     <App4/>
        // </div>


        // 리액트 라우터 : spa방식의 리액트 앱을 mpa방식으로 사용할 수 있도록 해주는 라이브러리
        // Routes : 페이지 객체를 여러 개 가질 수 있는 객체
        // Route : 화면에 그려지는 페이지 객체
        // Path : 웹 브라우저에 표시되는 url 주소 설정, 절대 경로/상대경로 다 사용 가능,
        // * 사용시 모든 페이지를 뜻함.(path url을 정확하게 입력해야 접속이 가능하다.)
        // element : path로 지정된 url 주소와 매칭되는 컴포넌트 (localhost : 3030)
        // <Link> : 리액트 라우터에서 사용되는 링크 전용 컴포넌트, html의 <a>태그와 같다.
        // to : url 주소 입력, Route 컴포넌트에 path로 설정된 주소
        // <Outlet> : 현재 선택된 경로의 컴포넌트를 화면에 표시



        // 2023 01 10

        // url 파라미터 : restful 방식의 주소형태로 구성되는 파라미터
        // 기존 url 뒤에 /와 :파라미터명을 사용하여 데이터를 전달하는 방식
        // rest 방식에서 많이 사용함
        // 연결된 컴포넌트에서 useParams 훅을 사용해야 한다.

        // 사용법 :
        // 기존url/:파라미터1/:파라미터2
        // <Route path = url/:test1/:test2 element={<Url/>}>

        // 쿼리스트링 : 기존의 get 방식으로 웹 브라우저의 주소에 파라미터를 함께 전달하는 방식
        // <Route > 컴포넌트의 path에 변경이 없다
        // 지정된 컴포넌트에서 몇 가지 옵션 사항을 사용할 수 있다.
        //      옵션 :
        //          pathname : 쿼리 스트링을 제외한 현재 주소의 경로
        //          search : 맨 앞의 ? 문자를 포함한 쿼리스트링 값 전체가 출력
        //          hash : 주소의 # 문자열 뒤의 값 (구형 브라우저에서만 사용)
        //          state : 페이지 이동 시 임의로 추가한 상태 값
        //          key : location 객체의 고유값
        //  useLocation(), useSearchParams() 훅을 사용하여 데이터를 가져올 수 있다
        // useLocation()훅을 사용하여 데이터를 가져오면 원하는 파라미터 값을 가져오기 위해 직접 파싱을 진행해야 함.
        // useSearchParams() 훅을 사용하여 데이터를 가져오면 파라미터 데이터만 따로 가져올 수 있다
        // 사용법 :
        // 기존 url?파라미터1=값1%파라미터2=값2
        //

        // useNavigate() : Link 컴포넌트를 사용하지 않고 다른 페이지로 이동하는 훅
        // 사용법 :
        // const navigate = useNavigate();
        // navigate(-1) // History를 사용하여 뒷페이지로 이동(js기억나쥬??), 숫자를 음수로 입력 시 해당 뒤로 이동
        //  양수로 입력 시 앞으로 이동
        // navigate('/url') //지정한 url로 이동
        //


        // 페이지 넘어갈 수 있게
        <BrowserRouter>
            <Routes>
                {/*Route path={"/"}는 모든 주소가 /밑에 적힌다는 의미이다.*/}
                <Route path={"/"} element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path={"blogs"} element={<Blogs />}/>
                    <Route path={"contact"} element={<Contact />}/>
                    <Route path={"*"} element={<NoPage />}/>
                    <Route path = {"board/:boardIdx"} element={<Board/>}/> {/*url파라미터*/}
                    <Route path = {"board2"} element={<Board2 />}/> {/*쿼리스트링*/}
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App7;












