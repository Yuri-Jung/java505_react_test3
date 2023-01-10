//AxiosRestServer.jsx
// spring과 데이터 주고받기
import React from "react";
import axios from "axios";
// 버튼을 매개로 요청 서버(get, post, put, delete)
function AxiosRestServer(props){



    const sendDataPostdata1 = () => {
        axios.post("http://localhost:8080/async/data1",{id : 'a', pw:'1234'})
            .then((req)=>{
                console.log("post방식으로 통신성공")
                console.log(req); //데이터 넘어오는지 확인
            })
            .catch((err)=>{

            });
    }

    const sendDataGet = () => {
        axios.get('http://localhost:8080/async/sendDataGet')
            .then((req)=>{
                console.log("get방식으로 통신성공")
                console.log(req); //데이터 넘어오는지 확인
            })
            .catch((err)=>{
                console.log('get방식으로 통신오류')
            });
    }


    const sendDataPost = () => {
        axios.post("http://localhost:8080/async/sendDataPost",null,
            {params : {
                    id : "id",
                    pw : "pw"
                }}
            )
            .then((req)=>{
                console.log("post방식으로 통신성공")
                console.log(req); //데이터 넘어오는지 확인
            })
            .catch((err)=>{

            });
    }

    const sendDataPut = () => {

            axios.put('http://localhost:8080/async/sendDataPut',null,
                {params : {idx : 50}}
                )
                .then((req)=>{
                    console.log("put방식으로 통신성공")
                    console.log(req); //데이터 넘어오는지 확인
                })
                .catch((err)=>{
                    console.log('put방식으로 통신오류')
                });
        }



    const sendDataDelete = () => {

            axios.delete('http://localhost:8080/async/sendDataDelete',{params : {idx : 50}})
                .then((req)=>{
                    console.log("delete방식으로 통신성공")
                    console.log(req); //데이터 넘어오는지 확인
                })
                .catch((err)=>{
                    console.log('delete방식으로 통신오류')
                });


    }



    return(
        <div className={"container mt-5 p-5"}>
            <h1>Axios를 사용한 비동기 통신</h1>
            <div className={"row"}>
                <div className={"col-sm-8 mx-auto"}>
                    <div>
                        
                    </div>
                    <div className={"my-3 d-flex justify-content-center"}>
                        <button className = {"btn btn-primary me-3"} onClick={sendDataGet}>get 방식</button>
                        <button className={"btn btn-success me-3"} onClick={sendDataPost}>post 방식</button>
                        <button className={"btn btn-info me-3"} onClick={sendDataPut}>put 방식</button>
                        <button className={"btn btn-danger"} onClick={sendDataDelete}>delete 방식</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AxiosRestServer;