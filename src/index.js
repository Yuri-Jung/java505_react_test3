import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App2';
import reportWebVitals from './reportWebVitals';
import App2 from "./App2";
import App3 from "./App3";
import App33 from "./App33";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
    {/*     strict 모드란 react 앱 내의 잠재적인 문제를 알아내기 위한 도구라고 나와있습니다.*/}
    {/*<App />*/}
    {/*    <App2/>*/}
        <App3/>
    {/*    <App33/>*/}
    </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
