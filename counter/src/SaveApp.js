import React from 'react';
import Btn from './Btn';
import BtnTest from './BtnTest';
import './App.css';

 function App() {

      let state = {
        curNumber: 0,
        maxNumber: 5,
        InpClass: "InpClassEnable",
        IncBtnClass: "IncBtnClassEnable",
        ResetBtnClass: "ResetBtnClassEnable"
    }


       let numbWindow = React.createRef();

       let incNumber = () => {
        state.curNumber = state.curNumber + 1;
        numbWindow.current.value = state.curNumber;
        if (state.curNumber == state.maxNumber) {
            state.InpClass = "InpClassDisable";
            state.InpBtnClass = "IncBtnClassDisable";
            alert(state.InpClass);
        }
    }


       let resNumber = () => {
        state.curNumber = 0;
        numbWindow.current.value = state.curNumber;
    }



        return (
            <div className="App">


                <div className="counterArea">

                    <div className="numberWindow">
                        <input ref={numbWindow} type="text" placeholder="0" className={state.InpClass}/>
                    </div>

                    <div className="buttonWindow">

                        <Btn ButtonClick={incNumber} title="Inc" BtnClass={state.IncBtnClass}/>
                        <Btn ButtonClick={resNumber} title="reset" BtnClass={state.ResetBtnClass}/>


                        <BtnTest ButtonClick={resNumber} title="test" BtnClass={state.ResetBtnClass}/>


                    </div>


                </div>

                <tst/>

            </div>
        );


    }

export default App;
