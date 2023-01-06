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

function App7() {
    return (
        // <div>
        //     <Culculator />
        //     <App/>
        //     <hr/>
        //     <App2/>
        //     <hr />
        //     <DarkOrLight/>
            <App4/>
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

        // <BrowserRouter>
        //     <Routes>
        //         <Route path={"/"} element={<Layout/>}>
        //             <Route index element={<Home/>}/>
        //             <Route path={"blogs"} element={<Blogs />}/>
        //             <Route path={"contact"} element={<Contact />}/>
        //             <Route path={"*"} element={<NoPage />}/>
        //         </Route>
        //     </Routes>
        // </BrowserRouter>
    );
}

export default App7;












