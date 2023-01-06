// DarkOrLight.jsx

import React,{useState,useCallback} from "react";
// 파일로 생성된 컨텍스트를 import하여 사용, 여러 컴포넌트에서 활용이 가능하다.
import ThemeContext from "./ThemeContext"; //컨텍스트 불러와서 사용

import MainContents from "./MainContents";

function DarkOrLight(props){
    // state 로 등록.
    // 부모의 state값을 수정할 수 있는 함수를 지정.
    const [theme, setTheme] = useState('light');

    //useCallback() : 콜백함수를 반환하는 리액트 훅, 메모이제이션 기능을 가지고 있다.
    // 메모이제이션 기능을 사용할 수 있어 지정한 의존성 배열에 등록된 데이터가 변경되었을 경우에만 동작한다.
    // useEffect()를 사용하면 변경되지 않고 동일하더라도 재랜더링이 된다. -> 시간이 오래 걸림, 리소스 많이 사용
    // 하지만 useCallback()을 사용하면 리소스도 아끼고 속도도 더 빠르다.
    // 여기서는 theme의 값이 변경이 될 때만 재랜더링 시킨다.
    const toggleTheme = useCallback(()=>{
        //state로 지정된 값이 변경될 경우에만 동작
        if (theme == "light") {
            setTheme("dark");
        }
        else if (theme == "dark") {
            setTheme("light");
        }
    }, [theme])
    return (
        // context Provider로 해당 컴포넌트 아래의 자손 컴포넌트에서 지정한 데이터를 사용할 수 있도록 한다.
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            <MainContents/>
        </ThemeContext.Provider>
    )
}

export default DarkOrLight;