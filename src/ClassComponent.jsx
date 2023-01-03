// ClassComponetn.jsx
// js로 해도 작동은 잘 된다

// 1. 모든 컴포넌트는 React를 import해서 사용함
// 2. class 컴포넌트는 React.Component를 상속받아 클래스를 생성
// 3. 클래스 컴포넌트를 export default로 설정해야 내부에서 사용가능하다
// 4. 클래스 컴포넌트에는 render() 메서드가 존재한다. render() 함수에서 jsx문법을 사용함
// 5. 클래스 컴포넌트는 리액트 생명주기 메서드를 사용할 수 있음
// 6. 생성자 사용 가능. 생성자에서 상태표현을 위해 state를 설정


import React from "react";

class ClassComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state={}
    }
    
    render() {
        return(
            <div>
                <p>클래스 컴포넌트 화면</p>
            </div>
        );
    }
    
    componentDidMount() {
        console.log("마운트 후 출력")
    }
}

export default ClassComponent;