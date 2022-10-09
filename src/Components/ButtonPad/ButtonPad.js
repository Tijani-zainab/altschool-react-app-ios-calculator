import React from "react";
import "./ButtonPad.css";

const ButtonPad = (props) => {
    
    return (
        <div className="button-pad">
            <div className="row">
                <button className="button grey" onClick={props.handleClear}>AC</button>
                <button className="button grey" onClick={props.handleSign}>+/-</button>
                <button className="button grey" onClick={props.handlePercent}>%</button>
                <button className="button orange" value={'/'} onClick={props.handleOperator}>÷</button>
            </div>
            <div className="row">
                <button className="button" value={7} onClick={props.handleNumber}>7</button>
                <button className="button" value={8} onClick={props.handleNumber}>8</button>
                <button className="button" value={9} onClick={props.handleNumber}>9</button>
                <button className="button orange" value={'x'} onClick={props.handleOperator}>x</button>
            </div>
            <div className="row">
                <button className="button" value={4} onClick={props.handleNumber}>4</button>
                <button className="button" value={5} onClick={props.handleNumber}>5</button>
                <button className="button" value={6} onClick={props.handleNumber}>6</button>
                <button className="button orange" value={'-'} onClick={props.handleOperator}>-</button>
            </div>
            <div className="row">
                <button className="button" value={1} onClick={props.handleNumber}>1</button>
                <button className="button" value={2} onClick={props.handleNumber}>2</button>
                <button className="button" value={3} onClick={props.handleNumber}>3</button>
                <button className="button orange" value={'+'} onClick={props.handleOperator}>+</button>
            </div>
            <div className="row">
                <button className="button zero" value={0} onClick={props.handleNumber}>0</button>
                <button className="button" value={'.'} onClick={props.handleNumber}>.</button>
                <button className="button orange" onClick={props.handleEqual}>=</button>
            </div>
        </div>
    );
};

export default ButtonPad;