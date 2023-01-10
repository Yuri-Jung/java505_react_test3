//Board.jsx
// url파라미터 예제
import React from "react";
import {useParams} from "react-router-dom";

function Board(props){
    // props를 빼도 실행 잘 됨. ㅇㅇ
    const boardSelect = useParams();
    return(
        <div>
            <h2>글번호 : {boardSelect.boardIdx}</h2>
        </div>
    )
}

export default Board;