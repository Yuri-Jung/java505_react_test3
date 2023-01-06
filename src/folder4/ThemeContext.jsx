//ThemeContext.jsx

import React from "react";

// 컨텍스트 객체 생성, 기본값으로 'light'를 설정
const ThemeContext = React.createContext('light');
// 컨텍스트 이름 설정
ThemeContext.displayName = "ThemeContext";
// 컨텍스트만 만들고 변수만 export 해줬다. 함수아니다.

// 컨텍스트 객체를 외부에서 사용할 수 있도록 export
export default ThemeContext;

// 필요한 곳에서 어디든지 로딩해서 사용할 수 있다.
// 컨텍스트을 위한 컨텍스트용 파일이다.