//DailyBoxOffice.jsx
// 클릭하면 작동하도록
import React, {useState} from "react";
import axios from "axios";


// 문제 1) 버튼 클릭 시 axios 통신을 통해 데이터를 가져와서 화면의 table에 출력하는 컴포넌트를 작성하세요
function DailyBoxOffice(props){
    // 초기값이 빈 배열이라는 것이 중요하다
    const [boxOffice, setBoxOffice] = useState([]); 
    const loadBoxOffice = () =>{
        axios.get('https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList' +
            '.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20230109')
            .then((req)=>{
                const boxOffice = req.data.boxOfficeResult.dailyBoxOfficeList;
                setBoxOffice(boxOffice);

                console.log(boxOffice);
            })
            .catch((err)=>{
                console.log('통신시 오류가 발생했습니다.')
            })
    }

    // const usePromise = () => {
    //     return new Promise(resolve,reject) => {
    //         // var items =
    //     }
    // }
    
    const loadBoxOffice2 = () => {
        loadBoxOffice()
            .then((item) => {
                console.log(boxOffice);
            })
            .catch((err) => {
                console.log('오류발생')
            })
    }


    return(

        <div className={"container"}>
            <div className={"col-sm-8 mx-auto"}>

                <table className={'table table-striped table-hover'}>

                    <thead>
                    <tr>
                        <th>순위</th>
                        <th>제목</th>
                        <th>개봉일</th>
                        <th>당일 관람객</th>
                        <th>누적 관람객</th>
                    </tr>
                    </thead>
                    <tbody>
                    {boxOffice.map((item)=>{
                        return(
                            <tr key = {item.rnum}>
                                <td>{item.rank}</td>
                                <td>{item.movieNm}</td>
                                <td>{item.openDt}</td>
                                <td>{item.audiCnt}</td>
                                <td>{item.audiAcc}</td>
                            </tr>
                        )
                    })}

                    </tbody>
                </table>
                <hr/>
                <div className={"my-3 d-flex justify-content-end"}>
                    <button className = {"btn btn-outline-primary" }onClick={loadBoxOffice}>영화 순위 조회</button>
                    {/*<button className = {"btn btn-outline-primary" }onClick={loadBoxOffice}>영화 순위 조회(async/awit)</button>*/}
                    {/*<button className = {"btn btn-outline-primary" }onClick={loadBoxOffice}>영화 순위 조회(프로미스)</button>*/}
                    {/*<button className = {"btn btn-outline-primary" }onClick={loadBoxOffice}>영화 순위 조회(axios)</button>*/}
                </div>
            </div>
        </div>
    );
}

export default DailyBoxOffice;