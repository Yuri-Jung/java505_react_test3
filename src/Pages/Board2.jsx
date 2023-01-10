// Board2.jsx
// 쿼리스트링 예제

import React from "react";
import {useLocation, useNavigate, useNavigation, useSearchParams} from "react-router-dom";

function  Board2(props) {
    const param1 = useLocation();
    const [param2, setParam2] = useSearchParams();

    // useNavigate() 예제
    const navi = useNavigate();

    const goBack = () =>{
        navi(-1);
    }

    const goBoard = () => {
        navi('/Board/100')
    }

    return(
        <div>
            <p>{param1.search}</p>
            <p>{param2.get("val1")}</p>
            <p>{param2.get("val2")}</p>
        {/*    navi위한 버튼*/}
            <button className={'btn btn-primary'} onClick={goBack}>뒤로 이동</button>
            <button className={'btn btn-success'} onClick={goBoard}>Board 페이지로 이동(1번,100)</button>
        </div>
    )
}

export default Board2;