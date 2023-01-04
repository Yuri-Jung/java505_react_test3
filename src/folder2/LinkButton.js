//LinkButton.js

import React from "react";


// state : 현재 컴포넌트의 상태를 나타내는 객체, 현재 컴포넌트에서 변경가능한 객체, state는 직접적인 수정이 불가능함(화면 렌더링과 관련이 있음)
// setState() : state의 값을 변경하는 함수

// react의 생명주기 : 컴포넌트가 생성되고 내용이 변경되고 컴포넌트가 삭제되는 상태
// componentDidMount : 컴포넌트가 생성되고 화면에 렌더링 된 이후 실행되는 함수
// componentDidUpdate : 컴포넌트의 상태가 변경된 후 실행되는 함수, props 변경, setState() 함수 실행
// forceUpdate()를 통한 강제 업데이트 후 동작함.
// componentWillUnmount : 부모 컴포넌트에서 더이상 해당 컴포넌트를 사용하지 않아 삭제된 후 실행

class LinkButton extends React.Component {
    constructor(props) {
        super(props);

        //state 설정
        this.state = {
            linked : false,
        }
        //현재 state 값 수정
        this.setState({
            linked : true, //이런 식으로 변경해준다
        })
    }
}