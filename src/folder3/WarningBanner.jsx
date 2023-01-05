// WarningBanner.jsx

import React from "react";

// 컴포넌트 렌더링 막기
// 리액트에서 렌더링을 하고 싶지 않을 경우 null을 사용한다.

function WarningBanner({warning}) {
    // if (!{warning}){
    //     return null;
    // }
    // return <div>경고!!</div>;
    if (!warning){
        return null
    }
    return <div>경고!!</div>;

}
export default WarningBanner;