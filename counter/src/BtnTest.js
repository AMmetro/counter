import React from 'react';


class BtnTest extends React.Component {


    state = {
        Andrei: "test",
        Ivan: 3
    }


    action = () => {
        this.setState ({Andrei: "work"});
             }



    render = () => {
        return (

            <div className="incWindow">

                  <button onClick={this.action}>{this.state.Andrei}</button>

             </div>

        );
    }
}

export default BtnTest;













