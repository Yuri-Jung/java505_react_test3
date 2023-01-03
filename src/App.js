import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import ClassComponent from "./ClassComponent";
import FunctionComponent from "./FunctionComponent";

// 기본적으로 7가지를 알아야 한다
// JSX : 자바스크립트 + html / xml , 하나의 파일에 js와 html을 동시에 작성
// 컴포넌트 : 리액트를 구성하는 최소 ui단위, 데이터(props)를 입력받아 view(state) 상태에
//          따라 화면을 출력하는 함수, 컴포넌트 이름은 항상 대문자로 시작한다.(리액트는 소문자로 시작하는 컴포넌트를 html태그로 인식한다)
//          ui를 재사용 가능한 개별적인 여러 조각으로 나누어서 화면 구현

// 컴포넌트의 종류 2가지
// 함수형 컴포넌트 : 현재 많이 사용되는 방식, 사용이 간편함, 자바스크립트 함수를 작성하는 방식
// 클래스형 컴포넌트 : 기존에 많이 사용되는 방식, React.Component를 상속받아 구현함, 컴포넌트 구성요소,
//                  리액트 생명주기를 모두 포함하고 있음
// props : 컴포넌트 간의 데이터를 주고 받기 위한 객체, properties의 줄임말, 읽기 전용, 부모 컴포넌트에서
//          자식 컴포넌트로 데이터를 전달 시 주로 사용. 자바스크립트 오브젝트 타입으로 구성되어있다.
// state : 현재 컴포넌트의 상태를 표시하는 객체, setState()를 통해서 데이터를 수정, 데이터 수정 시 화면에
//          재랜더링이 됨
// hooks : react 16.8 버전에서 추가된 기능, 상태 변경 및 리액트 생명주기에 관련된 함수를 사용할 수 있게 해주는 기능.
//          리액트 hooks를 사용하면 클래스 컴포넌트를 사용할 필요가 없음
// 컨텍스트 : 데이터 전달 객체, 컴포넌트간의 데이터 전달 시 props를 사용하면 순차적으로 데이터를 전달함,
//          컨텍스트는 위치에 상관없이 데이터를 바로 전달할 수 있음. 원래는 1번 컨테이너에 들어가고 싶다면
//          전체 -> main -> 1이런 순으로 들어가야 하는데, 컨텍스트를 거치면 어느 곳이든 바로 들어갈 수 있다
// react-router : 각 페이지의 경로를 구성하는 라이브러리.



// JSX 문법
// 1. 반드시 1개의 부모 요소가 다른 요소를 감싸는 형태로 구성해야 함
// 리액트는 가상화면을 미리 만들어놓고 다 만드면 실제 화면에 뿌리는 형태이기 때문에 부모 요소가 하나만 존재한다
// 2. 자바스크립트 표현식 사용 가능
//    {} 안에 자바스크립트를 사용할 수 있다.
//    if문은 표현식이 아니기 때문에 jsx에서 사용할 수 없다 (삼항 연산자를 대신 사용)
// 3. html 속성을 카멜명명법으로 사용해야 한다
// font-size => fontSize로 사용함
// class => className 으로 사용
// 4. jsx문법은 html태그 사용 시 반드시 시작태그와 끝태그를 모두 입력해야 한다
// 축약 형식으로 시작 태그 끝에 /를 사용하는 방식도 상관 없음





function App() {
    let num1 = 10;
    const flag = false;
    let result;
    
    //여기서는 if문 사용이 가능하다
    // {}표현식 내에서 자바스크립트의 if문을 사용할 수 없으므로 외부에서 미리 연산한다
    if (flag){
        result = <div>결과가 true</div>
    }
    else{
        result = <div>결과가 false</div>
    }

    return (

        // <></> 이것도 태그로 인식한다.
        // <p>안뇽</p>
    //    꼭 div태그를 사용해야 하는 건 아님(부모태그로) 그래도 가장 무난한 건 div다.
    <div className="App">


        <br/><hr/>
        <button type={"button"}>기본 버튼</button><br/>
        <button type={"button"} className={"btn btn-primary"}>부트스트랩 적용 버튼</button><br/>
        <Button type={"button"} variant={"success"}>react용 bootstrap 적용 버튼</Button>

        <p>{num1 + 10}</p>

        {/*if문을 사용하면 바로 에러가 난다.*/}
        {/*{if(flag){*/ } 
        {/*    */}
        {/*}}*/}

        {/*아래와 같은 삼항연산자를 if문 대신 사용해야 한다*/}
        {flag == true ? 1100 : 0}

        {/*두 개중 어느 것을 골라도 동일하게 출력이 된다*/}
        {result}
        <div>{result}</div>
        <br/><hr/><br/>

        <ClassComponent/>
        <FunctionComponent/>



        {/*리액트 용 방법은 좀 다르다. react용 button은 대문자로 시작된다.
        소문자로 적은건 html태그로 인식한 것이고
        대문자로 시작한 건 리액트 컴포넌트로 인식한 것이다.*/}
        <br/><hr/>
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
        >
            Learn React
        </a>
        </header>



    </div>
    );
}

export default App;
