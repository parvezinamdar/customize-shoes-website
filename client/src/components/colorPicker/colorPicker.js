import React from 'react';
import './colorPicker.css';

const colorPicker = (props) => {
    return (
        <div className="colors">
            <h5 className="mb-3">Choose your color:</h5>
            <div className="color" onClick={props.color} id="ffffff" style={{backgroundColor: '#ffffff'}} ></div>
            <div className="color" onClick={props.color} id="e1e851" style={{backgroundColor: '#e1e851'}} ></div>
            <div className="color" onClick={props.color} id="b5f334" style={{backgroundColor: '#b5f334'}} ></div>
            <div className="color" onClick={props.color} id="8cd147" style={{backgroundColor: '#8cd147'}} ></div>
            <div className="color" onClick={props.color} id="63bf7f" style={{backgroundColor: '#63bf7f'}} ></div>
            <div className="color" onClick={props.color} id="4eb758" style={{backgroundColor: '#4eb758'}} ></div>
            <div className="color" onClick={props.color} id="3b6d52" style={{backgroundColor: '#3b6d52'}} ></div>
            <div className="color" onClick={props.color} id="e5c129" style={{backgroundColor: '#e5c129'}} ></div>
            <div className="color" onClick={props.color} id="661f45" style={{backgroundColor: '#661f45'}} ></div>
            <div className="color" onClick={props.color} id="1e2024" style={{backgroundColor: '#1e2024'}} ></div>
            <div className="color" onClick={props.color} id="c6c6c6" style={{backgroundColor: '#c6c6c6'}}></div>
            <div className="color" onClick={props.color} id="d8a766" style={{backgroundColor: '#d8a766'}} ></div>
            <div className="color" onClick={props.color} id="936241" style={{backgroundColor: '#936241'}} ></div>
            <div className="color" onClick={props.color} id="cede00" style={{backgroundColor: '#cede00'}} ></div>
            <div className="color" onClick={props.color} id="ff8410" style={{backgroundColor: '#ff8410'}} ></div>
            <div className="color" onClick={props.color} id="d8712b" style={{backgroundColor: '#d8712b'}} ></div>
            <div className="color" onClick={props.color} id="964439" style={{backgroundColor: '#964439'}} ></div>
            <div className="color" onClick={props.color} id="ce5d5d" style={{backgroundColor: '#ce5d5d'}} ></div>
            <div className="color" onClick={props.color} id="a50c0c" style={{backgroundColor: '#a50c0c'}} ></div>
            <div className="color" onClick={props.color} id="f4b5da" style={{backgroundColor: '#f4b5da'}} ></div>
            <div className="color" onClick={props.color} id="0daeba" style={{backgroundColor: '#0daeba'}} ></div>
            <div className="color" onClick={props.color} id="4a9ccf" style={{backgroundColor: '#4a9ccf'}} ></div>
            <div className="color" onClick={props.color} id="007cba" style={{backgroundColor: '#007cba'}} ></div>
        </div>
    );
}

export default colorPicker