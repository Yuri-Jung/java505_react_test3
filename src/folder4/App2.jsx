//App2.jsx
// 컨텍스트 예제
import React from "react";
import ThemedButton from "./ThemedButton";

// 컨텍스트 객체 생성
const ThemeContext = React.createContext('light'); // 다른거 안적으면 light가 들어간다.

function Toolbar2(props){
    return (
        <ThemeContext.Consumer>
            {value => <ThemedButton2 aaa={value}/>}
        </ThemeContext.Consumer>

    // {/*<div>*/}
    // {/*    <ThemedButton2/>*/}
    // {/*</div>*/}
    );
}

function ThemedButton2(props){
    return(
        <ThemeContext.Consumer>
            {value => <Button2 theme={value} />}
        </ThemeContext.Consumer>
    )
}



function Button2(props){
    return <button>{props.theme}</button>
}

function App2(props){
    return(
        <ThemeContext.Provider value={'dark'}>
            {/*이렇게 하면 dark라는 값이 value에 들어가서 Toolbar2에 모든 곳에 데이터가 전달된다.*/}
            <Toolbar2/>
        {/*    사용할 자손 컴포넌트 지정해줌*/}
        </ThemeContext.Provider>
    )
}

export default App2;