import React from 'react';
class BoxPlayerElement extends React.Component{
    constructor(props){
        super(props);
        this.state = props;
    }

    componentWillReceiveProps(nextProps){
        this.state = nextProps;
    }

    render(){

        if(this.state.props.player===1){
            return(<div className='box-player-element'>
                <div className='player player1' hidden={!this.state.props.data.g1}></div>
                <div className='player player1' hidden={!this.state.props.data.g2}></div>
                <div className='player player1' hidden={!this.state.props.data.g3}></div>
                <div className='player player1' hidden={!this.state.props.data.g4}></div>
            </div>);
        }
        else if(this.state.props.player===2){
            return(<div className='box-player-element'>
                <div className='player player2' hidden={!this.state.props.data.g1}></div>
                <div className='player player2' hidden={!this.state.props.data.g2}></div>
                <div className='player player2' hidden={!this.state.props.data.g3}></div>
                <div className='player player2' hidden={!this.state.props.data.g4}></div>
            </div>);
        }
        else if(this.state.props.player===3){
            return(<div className='box-player-element'>
                <div className='player player3' hidden={!this.state.props.data.g1}></div>
                <div className='player player3' hidden={!this.state.props.data.g2}></div>
                <div className='player player3' hidden={!this.state.props.data.g3}></div>
                <div className='player player3' hidden={!this.state.props.data.g4}></div>
            </div>);
        }
        else if(this.state.props.player===4){
            return(<div className='box-player-element'>
                <div className='player player4' hidden={!this.state.props.data.g1}></div>
                <div className='player player4' hidden={!this.state.props.data.g2}></div>
                <div className='player player4' hidden={!this.state.props.data.g3}></div>
                <div className='player player4' hidden={!this.state.props.data.g4}></div>
            </div>);
        }
        
    }
}

export default BoxPlayerElement;