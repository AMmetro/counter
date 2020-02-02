import React from 'react';
import Btn from './Btn';
import './App.css';

class App extends React.Component {

    state = {
        curNumber: 0,
        maxNumber: 5,
        ResetBtnDisable: true,
        IncBtnDisable: false,              // через один сделать
            options: {
                InpClass: "InpClassEnable",
                IncBtnClass: "IncBtnClassEnable",
                ResetBtnClass: "ResetBtnClassDisable"
                     }
    }

    numbWindow = React.createRef();

    incNumber = () => {
        this.state.curNumber = this.state.curNumber + 1;
        this.numbWindow.current.value = this.state.curNumber;
        this.setState({ResetBtnDisable: false});         // здесь нужно обратиться в options - КАК ? - НЕРАБОТАЕТ

               if (this.state.curNumber >= this.state.maxNumber) {
                   let newOptions= { InpClass: "InpClassDisable",
                                     IncBtnClass: "IncBtnClassDisable",
                                     ResetBtnClass: "ResetBtnClassEnable"}
                   this.setState({options: newOptions, IncBtnDisable: true});
                   console.log(this.state)   // для отладки !!!!
                                                             }
                    }

    resNumber = () => {
                this.state.curNumber= 0;
                this.numbWindow.current.value = this.state.curNumber;

            let newOptions2= { InpClass: "InpClassEnable",
                               IncBtnClass: "IncBtnClassEnable",
                               ResetBtnClass: "ResetBtnClassDisable"}
                this.setState({options: newOptions2, ResetBtnDisable: true, IncBtnDisable: false})
    }


    render = () => {

        return (
            <div className="App">

                <div className="counterArea">

                    <div className="numberWindow">
                        <input ref={this.numbWindow} type="text" placeholder="0" className={this.state.options.InpClass}/>
                    </div>

                    <div className="buttonWindow">
                        <Btn ButtonClick={this.incNumber} title="Inc" BtnClass={this.state.options.IncBtnClass}
                             BtnDisable={this.state.IncBtnDisable}/>
                        <Btn ButtonClick={this.resNumber} title="reset" BtnClass={this.state.options.ResetBtnClass}
                             BtnDisable={this.state.ResetBtnDisable}/>
                    </div>

                </div>

            </div>
        );

    }
}

export default App;
