import React from 'react';
class DiceNumber extends React.Component{
    constructor(props){
        super();
        this.props = props;
    }
    render(){
        return(<div className="dice-number">{this.props}</div>);
    }
}

export default DiceNumber;