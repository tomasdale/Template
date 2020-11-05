import React from 'react';
import { Link } from 'react-router-dom';

import "./button.css";

function Button(props) {
    let type = props.type;
    if (!type) {
        type = "default";
    }
    return (
        <Link to={props.path}>
            <div className={type}>
                {props.text}
            </div>
        </Link>
    )
}


export default Button;