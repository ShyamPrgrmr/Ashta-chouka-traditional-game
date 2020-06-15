import React from 'react';
import img_1 from './../img/pic-1.png';
import img_2 from './../img/pic-2.png';
class DiceImage extends React.Component{
    constructor(props){
        super(props);
        this.state = {props:props,isAnimate:false};
        
    }
    componentWillReceiveProps(nextProps){
        console.log("called");
        this.setState({
            props:nextProps.props,
            isAnimate:true
        });
    }
    componentWillUpdate(nextProps,nextState){
       
    }

    timeOut(){
        setTimeout(() => {
            this.setState({isAnimate:false});
        }, 500);
    }

   

    render(){
    
    if(this.state.isAnimate){
        this.timeOut();
        return(<div className="dice-image">
            <img className='dice-anim' alt="alt-text" src ={img_1}></img>
            <img className='dice-anim' alt="alt-text" src ={img_2}></img>
            <img className='dice-anim' alt="alt-text" src ={img_1}></img>
            <img className='dice-anim' alt="alt-text" src ={img_2}></img>
        </div>);
    }
    else{
        if(this.state.props.number===1){  
            return(<div className="dice-image">
                        <img className='dice-im' alt="alt-text" src ={img_1}></img>
                        <img className='dice-im' alt="alt-text" src ={img_1}></img>
                        <img className='dice-im' alt="alt-text" src ={img_1}></img>
                        <img className='dice-im' alt="alt-text" src ={img_2}></img>
                   </div>);
            }
            else if(this.state.props.number===2){  
                return(<div className="dice-image">
                            <img className='dice-im' alt="alt-text" src ={img_1}></img>
                            <img className='dice-im' alt="alt-text" src ={img_1}></img>
                            <img className='dice-im' alt="alt-text" src ={img_2}></img>
                            <img className='dice-im' alt="alt-text" src ={img_2}></img>
                       </div>);
            }
            else if(this.state.props.number===3){  
                return(<div className="dice-image">
                            <img className='dice-im' alt="alt-text" src ={img_1}></img>
                            <img className='dice-im' alt="alt-text" src ={img_2}></img>
                            <img className='dice-im' alt="alt-text" src ={img_2}></img>
                            <img className='dice-im' alt="alt-text" src ={img_2}></img>
                       </div>);
            }
            else if(this.state.props.number===4){  
                return(<div className="dice-image">
                            <img className='dice-im' alt="alt-text" src ={img_1}></img>
                            <img className='dice-im' alt="alt-text" src ={img_1}></img>
                            <img className='dice-im' alt="alt-text" src ={img_1}></img>
                            <img className='dice-im' alt="alt-text" src ={img_1}></img>
                       </div>);
            }
            else if(this.state.props.number===8){  
                return(<div className="dice-image">
                            <img className='dice-im' alt="alt-text" src ={img_2}></img>
                            <img className='dice-im' alt="alt-text" src ={img_2}></img>
                            <img className='dice-im' alt="alt-text" src ={img_2}></img>
                            <img className='dice-im' alt="alt-text" src ={img_2}></img>
                       </div>);
            }
            else{
                return(<div></div>);
            }
    }
}
}

export default DiceImage;