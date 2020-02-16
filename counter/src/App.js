import React from 'react';
import Btn from './Btn';
import './App.css';

class App extends React.Component {


    state = {
        curNumber: 0,
        maxNumber: 5,
        startNumber: 0,
        showSet: true,
        ResetBtnDisable: true,
        IncBtnDisable: false,              // через один сделать
        options: {
            InpClass: "InpClassEnable",
            IncBtnClass: "IncBtnClassEnable",
            ResetBtnClass: "ResetBtnClassDisable"
        }
    }

    maxNumbWindow = React.createRef();
    startNumbWindow = React.createRef();


    showCounter = () => {
        this.setState({showSet: !this.state.showSet})
    }

    setCounter = () => {
        alert("setting is successful")
                this.setState({
                curNumber: Number(this.startNumbWindow.current.value)
               });
    }


    changeMaxNumber =(e) => {
           this.setState({maxNumber: e.currentTarget.value})
                }

    changeStartNumber = (e)=> {
        this.setState({startNumber: e.currentTarget.value}, this.tempaction())
    }

    tempaction = ()=> {console.log(this.state)}   // убрать


    incNumber = () => {
        if (this.state.curNumber<this.state.maxNumber) {
            this.state.curNumber = this.state.curNumber + 1;
            this.startNumbWindow.current.value = this.state.startNumber;
            this.setState({
                ResetBtnDisable: false,
                options: {...this.state.options, ResetBtnClass: "ResetBtnClassEnable"}
            });
        }

        if (this.state.curNumber >= this.state.maxNumber) {
            let newOptions = {
                InpClass: "InpClassDisable",
                IncBtnClass: "IncBtnClassDisable",
                ResetBtnClass: "ResetBtnClassEnable"
            }
            this.setState({options: newOptions, IncBtnDisable: true, ResetBtnDisable: false});
        }
    }

    resNumber = () => {
        this.state.curNumber = 0;

        let newOptions2 = {
            InpClass: "InpClassEnable",
            IncBtnClass: "IncBtnClassEnable",
            ResetBtnClass: "ResetBtnClassDisable"
        }
        this.setState({options: newOptions2, ResetBtnDisable: true, IncBtnDisable: false})
    }


    render = () => {


        return (
            <div className="App">

{/* ---------------------------- Button component "SET" and INPUT options---------------------------------------------- */}

                {this.state.showSet && <div>

                    <div className="counterArea">
                        <div className="settingWindow">
                            <input ref={this.maxNumbWindow} type="number" placeholder={this.state.maxNumber} onChange={this.changeMaxNumber}/>
                            <span className="setting">Max number</span>
                            <input ref={this.startNumbWindow} type="number" placeholder={this.state.startNumber} onChange={this.changeStartNumber}/>
                            <span className="setting">Start number</span>
                        </div>
                        <div className="buttonWindow">
                            <Btn ButtonClick={this.setCounter} title="SET" BtnClass=""/>
                        </div>
                    </div>

                </div>}


 {/* ---------------------------------Button component "INC" "RESET" "OPTIONS"------------------------------------------- */}
                <div className="counterArea">

                    <div className="numberWindow">
                        <span className={this.state.options.InpClass}>{this.state.curNumber}</span>
                    </div>

                    <div className="buttonWindow">
                        <Btn ButtonClick={this.incNumber} title="Inc" BtnClass={this.state.options.IncBtnClass}
                             BtnDisable={this.state.IncBtnDisable}/>
                        <Btn ButtonClick={this.resNumber} title="reset" BtnClass={this.state.options.ResetBtnClass}
                             BtnDisable={this.state.ResetBtnDisable}/>
                        <Btn ButtonClick={this.showCounter} title="options"/>


                    </div>

                </div>

            </div>
        );

    }
}

export default App;
