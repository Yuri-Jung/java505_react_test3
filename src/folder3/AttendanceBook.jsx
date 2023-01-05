//AttendenceBook.jsx

import React from "react";

// 앞으로 리스트로 데이터를 넣거나 가져올 때 key 부분을 만들어라. 구분할 수 있는 유일한 값이면 된다.
const students = [
    {id : 1, name : "Inje"},
    {id : 2, name : "Steve"},
    {id : 3, name : "Bill"},
    {id : 4, name : "Jeff"},
];

// 리스트 : 비슷한 데이터를 모아둔 것
// key : 리액트에서 각 객체나 아이템을 구분할 수 있는 고유의 값. key가 없으면 서로 구분할 수 없다.
// react에서는 해당 리스트 사이에서 엘리먼트를 구분할 수 있는 고유한 값이면 된다.

// id를 사용, id라는 것 자체가 고유한 값이라는 의미이므로 key값으로 사용할 수 있다.

function AttendanceBook(){
    return(
        <ul>
            {students.map((student)=>{
                return <li>{student.name}</li>
            })}
        </ul>
    );
}

export default AttendanceBook;









