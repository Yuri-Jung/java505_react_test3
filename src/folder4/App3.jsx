//App3.jsx

import React from "react";

// 컨텍스트 2개 만드록
const ThemeContext = React.createContext('light');
const UserContext = React.createContext({name: "Guest"});

function App3(props){
    const {theme, signedInUser} = props;
    return(
        //두개를 겹쳐서 보낸다
        <ThemeContext.Provider value={theme}>
            <UserContext.Provider value = {signedInUser}>
                <Layout/>
            </UserContext.Provider>
        </ThemeContext.Provider>
    )
}

function Layout() {
    return(
        <div>
        </div>
    )
}

function ProfilePage(props){
    return
}

function Content(){
    return(
        // 두 개를 겹쳐서 받는다. 이렇게 하면 컨텍스트를 여러 개 동시에 사용할 수 잇다.
        <ThemeContext.Consumer>
            {theme => (
                <UserContext.Consumer >
                    {user => (
                        <ProfilePage user = {user} theme={theme}/>
                    )}
                </UserContext.Consumer>
            )}
        </ThemeContext.Consumer>
    )
}

export default App3;