// Toolbar.jsx

import React from "react";

const styles = {
    wrapper : {
        padding : 16,
        display : 'flex',
        flexDirection : 'row',
        borderBottom : "1px solid grey",
    },

    greeting : {
        marginRight : 8,
    },
}

function Toolbar(props){
    // object 의 확장표현식으로 props 객체에 있는 데이터를 모두 받음
    const {isLoggedIn, onClickLogin, onClickLogOut} = props;

    return (
        <div style = {styles.wrapper}>
            {/* &&연산자로 isLoggedIn의 값에 따라 화면 렌더링 여부 결정*/}
            {isLoggedIn && <span style={styles.greeting}>환영합니다.</span>}

            {/*삼항 연산자로 로그인/로그아웃 버튼을 출력*/}
            {isLoggedIn
                ? (<button onClick={onClickLogOut}>로그아웃</button> )
                : (<button onClick={onClickLogin}>로그인</button>)
            }
        </div>
    );
}

export default Toolbar;











