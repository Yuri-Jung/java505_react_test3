// CountButton.jsx

import React from "react";
import Button from "react-bootstrap/Button";

class CountButton extends React.Component {
    constructor(props) {
        super(props);

        // state 객체 생성
        //setState()를 사용해야만 여기서 선언한 객체를 수정할 수 있다.
        this.state = {
            count: 0,
        }

        // 클래스의 멤버 변수(객체의 멤버 변수) count 선언 count: 0 가져옴
        this.count = this.state.count;
    }

    //메서드 2개 생성
    countUp = () => {
        // this.state.count = this.state.count + 1
        console.log(" 이전 this.count : " + this.count);
        this.count = this.count + 1;
        // setState() 함수를 실행해야만 state의 값이 수정이 되고, state의 값이 수정되면 render() 함수가 재실행됨
        this.setState({
            count : this.count
            }
        )
        console.log(" + 사용후 this.count : " + this.count);
    };

    countDown = () => {
        // this.state.count = this.state.count - 1
        console.log(" 이전 this.count : " + this.count);
        this.count = this.count - 1;
        // 화면의 count 숫자 바뀜
        this.setState({
            count : this.count
        })
        console.log("- 사용 후 this.count : " + this.count);
    };


    render() {
        return(
            <div>
            <label className={"form-label"}> count : <span>{this.count}</span></label><br/>
                <Button variant = {"primary"} onClick = {this.countUp}>+</Button>
                <Button variant = {"danger"} onClick = {this.countDown}>-</Button>
            </div>
        )
    }
}

export default CountButton;