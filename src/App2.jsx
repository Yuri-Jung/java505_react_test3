import React from "react"; //설치되어있는 라이브러리같은 건 경로 없이 가능
import Contents from "./Contents";
import Footer from "./Footer";
import Header from "./Header";
import Navigate from "./Navigate";
import LinkList from "./LinkList";
import Info from "./Info"; //우리가 만든 파일은 경로 있어야 한다

// 이런 스타일에서 바뀐것 카멜명명법, (,)와 (;),
// <style>
//     .fake-img{
//     height :200px;
//     background-color : "#aaa";
// }
// </style>
const styles={
    fakeImg : {
        height :200,
        backgroundColor : "#aaa",
    },
};

function App2(){
    return (

        <div>
            {/*헤더부분*/}
            {/*<div className={"p-5 bg-primary text-white text-center"}>*/}
            {/*    <h2>컴포넌트 연습용 부트스트랩 기본 페이지 만들기1</h2>*/}
            {/*    <p>반응형 웹이 지원하는 페이지</p>*/}
            {/*</div>*/}

            <Header/>
            
            {/*네비게이션바부분*/}

            {/*<nav className={"navbar navbar-expand-sm bg-dark navbar-dark"}>*/}
            {/*    <div className = {"container-fluid"}>*/}
            {/*        <ul className = {"navbar-nav" }>*/}
            {/*            <li className = {"nav-item" }>*/}
            {/*                <a className = {"nav-link active" }href = {"#"}>Active</a>*/}
            {/*            </li>*/}
            {/*            <li className = {"nav-item" }>*/}
            {/*                <a className = {"nav-link active" }href = {"#"}>Link</a>*/}
            {/*            </li>*/}
            {/*            <li className = {"nav-item" }>*/}
            {/*                <a className = {"nav-link active" }href = {"#"}>Link</a>*/}
            {/*            </li>*/}
            {/*            <li className = {"nav-item" }>*/}
            {/*                <a className = {"nav-link active" }href = {"#"}>Disabled</a>*/}
            {/*            </li>*/}
            {/*        </ul>*/}
            {/*    </div>*/}
            {/*</nav>*/}
            <Navigate/>

            <div className = {"container mt-5" }>
                <div className={"row"}>
                    <div className={"col-sm-4"}>
                        {/*<h2>About me</h2>*/}
                        {/*<h5>Photo of me:</h5>*/}
                        {/*<div style={styles.fakeImg}>Fake Image</div>*/}
                        {/*/!*위 처럼하면 style값 가져올 수 있다*!/*/}
                        {/*<p>아무노래나 틀터</p>*/}
                        <Info/>

                        {/*<ul className = {"nav nav=pills flex-column" }>*/}
                        {/*    <li className = {"nav-item" }>*/}
                        {/*        <a className = {"nav-link active" } href = {"#"}>Active</a>*/}
                        {/*    </li>*/}
                        {/*    <li className={"nav-item"}>*/}
                        {/*        <a className = {"nav-link" } href = {"#"}>Link</a>*/}
                        {/*    </li>*/}
                        {/*    <li className={"nav-item"}>*/}
                        {/*        <a className = {"nav-link" } href = {"#"}>Link</a>*/}
                        {/*    </li>*/}
                        {/*    <li className={"nav-item"}>*/}
                        {/*        <a className = {"nav-link" } href = {"#"}>Disabled</a>*/}
                        {/*    </li>*/}
                        {/*</ul>*/}

                        <LinkList/>
                        <hr className={"d-sm-none"}/>
                    </div>
                    <div className = {"col-sm-8" }>
                        {/*<h2>제목</h2>*/}
                        {/*<h5>부제목, 2023-01-03</h5>*/}
                        {/*<div style = {styles.fakeImg}></div>*/}
                        {/*<p>아무글자</p>*/}
                        {/*<p>내용 아무거나</p>*/}
                        
                        <Contents/>
                        <Contents/>
                    </div>
                </div>
            </div>

            {/*푸터부분*/}
            {/*<div className={"mt-5 p-4 bg-dark text-white text-center"}>*/}
            {/*    <p>Footer</p>*/}
            {/*</div>*/}
            <Footer/>
        </div>
    );
}

export default App2;