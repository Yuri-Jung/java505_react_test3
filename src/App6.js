import React from "react";
import Goal from "./folder3/Goal";
import Greeting from "./folder3/Greeting";
import LoginControl from "./folder3/LoginControl";
import MailBox from "./folder3/MailBox";
import Counter from "./folder3/Counter";
import MainPage from "./folder3/MainPage";
import LandingPage from "./folder3/LandingPage";
import AttendanceBook from "./folder3/AttendanceBook";
import NameForm from "./folder3/NameForm";
import RequestForm from "./folder3/RequestForm";
import FruitSelect from "./folder3/FruitSelect";
import Reservation from "./folder3/Reservation";
import Child from "./folder3/Child";
import Parents from "./folder3/Parents";
import Parents2 from "./folder3/Parents2";

function App6() {
    return(
        <div className={"container"}>
            <Goal isGoal = {false}/>
            <hr />
            <Greeting isLoggedIn = {false}/>
            <hr />
            <LoginControl/><hr />
            <MailBox unreadMessages={50}/><hr />
            <Counter/><hr />
            <MainPage/><br /><hr />
            <LandingPage/><hr />
            <AttendanceBook/><hr />
            <NameForm/>
            <RequestForm/>
            <FruitSelect/>
            <Reservation/>
            <Parents/>
            <br/>
            <Parents2/>

            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </div>
    )

}
export default App6;