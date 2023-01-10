// AsyncAwait.jsx
import React from "react";
import axios, {Axios} from "axios";

// async / await : 비동기 처리를 조금 더 쉽게 하기 위해서 개발됨
// 기본적으로 promise를 사용함

// 사용법 :
// async funciton 함수명(매개변수) {
//  const 변수명 = await promise를 사용하는 함수();
//  const.log(변수명);
// }


function AsyncAwait(props){
    const fetchItems = () => {
        return new Promise((resolve, reject) => {
            var items = [1,2,3];
            resolve(items);
        });
    }

    // 프로미스 사용 시 비동기 처리방법
    const logItem1 = () => {
        //프로미스를 반환하는 함수를 직접 호출해야한다
        fetchItems()
            .then((item) => {
                console.log(item);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    // async / await 사용 시 비동기 처리방식
    const logItem2 = async () => {
        const resultItems = await fetchItems();
        // 이렇게 해도 된다
        // resultItems
        //     .then(() => {
        //    
        // })
        //     .catch(()=>{
        //        
        //     });
        console.log(resultItems);
    }

    //axios사용
    const getData = async () => {
        // await 비동기가 끝날 때까지 기다렸다가 실행
        const {data} = await axios.get('https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList' +
            '.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20230109');
        console.log(data.boxOfficeResult.dailyBoxOfficeList);
    }

    return(
        <div>
            {/*둘의 결과값은 동일. */}
            <button className={"btn btn-primary"} onClick={logItem1}>프로미스 사용</button>
            <button className={"btn btn-success"} onClick={logItem2}>async/await 사용</button>
            <button className={"btn btn-info"} onClick={getData}>axios와 함께 사용하기</button>
        </div>
    )
}
export default AsyncAwait;