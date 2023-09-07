import React from 'react';
import WizardCat from '../assets/WizardCat.png';
import './Popup.css';

function Popup(props){
    return(props.trigger) ? (
        <div className="popup">
            <div className= "popup-inner">
             <h2>Magic cat</h2>
             <p>You found the lost wizard cat! Congratulations!!!</p>

            <img src={WizardCat} alt="cat"/>
            <br></br>
            <button className="close-button" onClick={() => props.setTrigger(false)}>Thanks!</button>
            { props.childer }
            </div>
        </div>
    ) : "";
}

export default Popup