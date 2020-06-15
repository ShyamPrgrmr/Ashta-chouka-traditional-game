import React from 'react'

class Dice extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div>
                <div className="dice-number"></div>
                <button className="dice-button"></button>
            </div>
        );
    }
}