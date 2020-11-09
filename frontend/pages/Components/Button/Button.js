import React from 'react';
import Link from 'next/link';

import styles from "./button.module.css";

function Button(props) {
    let type = props.type;
    if (!type) {
        type = styles.default;
    }
    return (
        <Link href={props.path}>
            <div className={type}>
                {props.text}
            </div>
        </Link>
    )
}


export default Button;