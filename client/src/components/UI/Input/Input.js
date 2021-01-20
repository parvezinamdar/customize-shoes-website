import React from 'react';
import './Input.css';

const input = (props) => {
    let inputElement = null;
    const inputClasses = ["input-element"];

    if(props.invalid && props.shouldValidate && props.touched){
        inputClasses.push("invalid-element");
    }

    switch(props.elementType){
        case ('input'):
            inputElement = <input 
                className={inputClasses.join(' ')} 
                {...props.elementConfig} 
                value={props.value} 
                onChange={props.changed}/>;
            break;
        case ('textarea'):
            inputElement = <textarea 
                className={inputClasses.join(' ')} 
                {...props.elementConfig} 
                value={props.value} 
                onChange={props.changed}/>;
            break;
        case ('select'):
            inputElement = (
                <select 
                    className={inputClasses.join(' ')} 
                    value={props.value} 
                    onChange={props.changed}>
                    {
                        props.elementConfig.options.map(opt => (
                            <option key={opt.value} value={opt.value}>
                                {opt.displayValue}
                            </option>
                        ))
                    }
                </select>
            );    
            break;
        default:
            inputElement = <input 
                className={inputClasses.join(' ')} 
                {...props.elementConfig} 
                value={props.value} 
                onChange={props.changed}/>;
    }
    return (
        <div className="input">
            <label className="label">{props.label}</label>
            {inputElement}
        </div>
    )
    
};

export default input;