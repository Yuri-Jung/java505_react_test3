import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App2';
import reportWebVitals from './reportWebVitals';
import App2 from "./App2";
import App3 from "./App3";
import App33 from "./App33";
import App5 from "./App5";
import App6 from "./App6";
import App7 from "./App7";
import App77 from "./App77";










const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    // strict mode : 자바스크립트의 문법을 강력하게 확인한다는 의미. 자바스크립트는 간소화된 문법이다. 그렇지만 이게 있으면 좀 더 강하게 확인한다
    // React.StrictMode : 배포 버전에는 제외되고 개발 버전에서는 동작하는 엄격모드, 몇 가지 함수를 중복 실행 하여 잘못된 것이 없는지 개발자에게
    // 확인하도록 한다. 다 주석 처리해도 잘 실행된다
    // <React.StrictMode>

    //{/*/!*     strict 모드란 react 앱 내의 잠재적인 문제를 알아내기 위한 도구라고 나와있습니다.*!/,*/}
    //{/*/!*<App />*!/*/}
    // <App2/>
 // <App3/>
    // <App33/>
    //{/*    */}

    //{/*/!*</React.StrictMode>*!/*/}
// <App5/>
//     <App6/>
    <App7/>
//     <App77/>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
