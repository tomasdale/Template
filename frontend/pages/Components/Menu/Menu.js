import React from 'react';
import Button from '../Button/Button';

import styles from './Menu.module.css';

function Menu (){
    return(
    <div className= {styles.menuLayer}>
        <Button text="Home" path="/home" />
        <Button text="Bo" path="/bo" />
        <Button text="Contact" path="#contact" />
    </div>)
}

export default Menu;