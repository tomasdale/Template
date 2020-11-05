import React from 'react';
import Button from '../Button/Button';

import './menu.css';

function Menu (){
    return(
    <div id="menu-layer">
        <Button text="Home" path="/home" />
        <Button text="Bo" path="/bo" />
        <Button text="Contact" path="#contact" />
    </div>)
}

export default Menu;