// Counter.jsx

import React from "react";


function Counter(props) {
    const count = 0;
    //값 자체가 0 이라서 fasle다. 그렇지만 && 앞 쪽의 값이 출력된다. 화면에 0이라고 뜬다.
    return(
        <div>
            {/*앞의 조건 false다. 데이터를 넣지 않았으니까. 그러니까 위의 0만 출력하고 끝난다.*/}
            {/*숫자를 2,3 등으로 바꾸면 화면이 바뀐다.*/}
            {count && <h1>현재 카운트 : {count}</h1>}
        </div>
    );
}

export default Counter;













