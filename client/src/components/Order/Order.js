import React from 'react';
import './Order.css';
const order = (props) => {
    let id = props.id;
    let encode = '';
    for (let i = 0; i < 8; i++) {
        let x = id.slice(i, i+1);
        encode += x.charCodeAt(0);  
    }
    console.log(encode);
    // let strId = props.id;
    // var numberId = strId.charCodeAt(0) - 62;
    return (
        <div className="order">
            <p>Order Id: {encode}</p>
            <p>Categories : {props.shoes.categories}</p>
            <p>Logo : {props.shoes.url === "" ? "NA"  : <a href={props.shoes.url}>Applied</a>} </p>
            <p>Shoes Size : {props.shoes.shoesSize}</p>
            <p>Text : {props.shoes.text === "" ? "NA" : props.shoes.text}</p>
            <p>Text Style : {props.shoes.textStyle}</p>
            <p>Text Color : {props.shoes.textColor}</p>
        </div>
    )
    

    
};

export default order;