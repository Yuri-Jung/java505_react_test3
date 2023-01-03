    // BoardList.jsx

    import React from "react";
    import BoardItem from "./BoardItem";

    const boardItemList = [
        {boardIdx : 100, boardTitle: "게시판 글 제목 100번", boardUserId : "test1",  boardCreateDate:"2023-01-03-12:40:00"},
        {boardIdx : 101, boardTitle: "게시판 글 제목 101번", boardUserId : "test2",  boardCreateDate:"2023-01-03-12:41:00"},
        {boardIdx : 102, boardTitle: "게시판 글 제목 102번", boardUserId : "test3", boardCreateDate:"2023-01-03-12:43:00"},
    ]

    function BoardList(){
        // boardItemList.map((item )=>{
        //    return <BoardItem idx ={item.boardIdx} title={item.boardTitle} userId={item.boardUserId} createDt={item.boardCreateDate}/>
        // })
        return(
            <div className={"container mx-5 mx-auto" }>
                <table className={"table table-hover table-striped"}>
                    <thead>
                    <tr>
                        <th>글 번호</th>
                        <th>글 제목</th>
                        <th>사용자</th>
                        <th>등록시간</th>
                    </tr>
                    </thead>
                    <tbody>
                    {/*하나하나 다 넣기 힘드니까 데이터는 리스트로 넘어오니 for문으로 반복해 집어넣어준다*/}
                    {boardItemList.map((item )=>{
                            return <BoardItem idx ={item.boardIdx} title={item.boardTitle} userId={item.boardUserId} createDt={item.boardCreateDate}/>
                    })}

                        {/*<BoardItem idx={"100"} title={"테스트 제목100"} userId={"test1"} createDt={"2023-01-03 12:40:00"}/>*/}
                        {/*<BoardItem idx={"101"} title={"테스트 제목101"} userId={"test2"} createDt={"2023-01-03 12:40:00"}/>*/}
                        {/*<BoardItem idx={"102"} title={"테스트 제목102"} userId={"test3"} createDt={"2023-01-03 12:40:00"}/>*/}
                    </tbody>
                </table>
                <BoardItem/>
            </div>
        );
    }
    export default BoardList;