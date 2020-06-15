import React from 'react';
import BoxElement from './BoxElement';
class Box extends React.Component{
    constructor(props){
        super();
        this.props = props;
        this.state = this.props.props.boxSoloData;
    }

    componentWillReceiveProps(nextProps){
        this.state = nextProps.props.boxSoloData;
    }

    handleClick=()=>{
        this.props.handleBoxClick(this.state.boxId);
    }

    render(){
        if(this.props.props.iscrossed){
            return(<div className='box crossed' onClick={this.handleClick}>
                <BoxElement props={this.state}/>
            </div>);
        }
        else{
            return(<div className='box'  onClick={this.handleClick}>
                <BoxElement props={this.state}/>
            </div>);
        }
    }
}

export default Box;