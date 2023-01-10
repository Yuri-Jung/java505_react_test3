// App8.jsx

// axios 예제 시작


import React from "react";
import AxiosTest from "./folder5/AxiosTest";
import DailyBoxOffice from "./folder5/DailyBoxOffice";
import AsyncAwait from "./folder5/AsyncAwait";
import AxiosRestServer from "./folder5/AxiosRestServer";

function App8(){
    return(
        <div>
            <h3>APP8</h3>
            <AxiosTest/>
            <DailyBoxOffice/>
            <AsyncAwait/>

            <hr/>
            <AxiosRestServer/>
        </div>
    )


}

export default App8;