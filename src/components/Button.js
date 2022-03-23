import React from 'react';
import { Link } from "react-router-dom";
import "../Home/CentralPart/Main";
const Button = (props) => {

    return (
        <div>
            <Link to={{ pathname: props.pathname }}>
                <input className={props.className} style={props.background} type="button" value={props.value}/>
            </Link>
        </div>
    );
}
export default Button;