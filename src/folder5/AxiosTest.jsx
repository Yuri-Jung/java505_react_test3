import React, {useEffect} from "react";
import axios from "axios";

//AxiosTest.jsx

// axios : node.js에서 비동기 통신을 하기 위한 라이브러리, promise를 사용함 (then,catch있다)
// axios는 rest 방식을 지원한다
// get(url) : get 방식으로 서버에 데이터를 요청
// post(url, data[, config]) : post 방식으로 서버에 데이터를 전달
// put(url, data[, config]) : put 방식으로 서버에 데이터 전달
// delete(url, data[,config]) : delete 방식으로 데이터 전달
// options(url, config) : axios 객체 생성 시 설정 정보를 변경할 수 있음
// then() : 정상적으로 통신이 성공했을 경우 실행
// catch() : 통신이 실패했을 경우 실행된다

// async/await 와 함께 사용 시 then()을 필요한 경우 나중에 호출할 수 있음
// async/await 와 함께 사용 시 예외처리를 try/catch로 처리한다

// 응답 객체 : 요청에 대한 응답 객체가 json 방식으로 전달됨
// data{} : 서버에서 제공한 데이터 json 타입
// status : 서버와의 통신 응답 신호, 200 : ok, 300 : redirect, 400 : 리소스없음, 500 : 서버 내부 오류
// statusText : 서버와의 응답 메시지
// headers{} : 서버에서 응답한 헤더 정보
// config{} : 서버에 요청 시 axios의 설정 정보
// request{} : 응답을 생성한 요청

// 사용법 :
// npm install axios; // 사용할 프로젝트 axios 설치
// import axios from 'axios'; // 사용할 컴포넌트에서 axios import


// axios({
//      method : 'get|post|put|delete',
//      url : 'url',
//      data : {
//          param1 : 'data',
//          param2 : 'data'
//      },
// });

// 보통은 이거 사용하는 편이다.
//  axios.get(url)
//  .then(function(rep)){
//      성공 시 실행할 소스;
// });
// .catch(function(err)){
//      실패 시 실행할 소스;
// });

// axios.post(url, {
//  param1: 'data1',
//  param2: 'data2'
// })
// .then(function(req){
//      성공 시 실행할 소스;
// })
// .catch(function(err){
//      실패 시 실행할 소스;
// })



// 
function AxiosTest(props){
    useEffect(()=>{
        //영화진흥원 api 가져왔다 json방식
        axios.get('https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.' +
            'json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20230109')
            .then((req)=>{
                // alert('통신성공')
                console.log('통신성공')
                // console.log(req);
                // console.log(req.data);

                console.log(req.data.boxOfficeResult.dailyBoxOfficeList);
                const list = req.data.boxOfficeResult.dailyBoxOfficeList;
                // console.log(dailyBoxOfficeList);
                for(let i =0; i<list.length; i++){
                    let str = `순번 : ${list[i].rnum}`
                    console.log(`순번 : ${list[i].rnum}
                    순위 : ${list[i].rank}
                    제목 : ${list[i].movieNm}
                    개봉일 : ${list[i].openDt}
                    관람객 : ${list[i].audiCnt}`)
                }

            })
            .catch((err)=>{
                alert('통신실패')
            });
    },[]);
    return(
        <div>
            
        </div>
    )
}
export default AxiosTest;