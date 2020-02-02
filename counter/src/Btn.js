import React from "react";


const Btn = (props) => {


    return (

        <div className="incWindow">

            <button onClick={props.ButtonClick}
                     className={props.BtnClass}
                    disabled={props.BtnDisable}>{props.title}</button>

        </div>

    )

}

export default Btn;



