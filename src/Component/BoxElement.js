import React from 'react';
import BoxPlayerElement from './BoxPlayerElement';
class BoxElement extends React.Component{
    constructor(props){
        super();
        this.state = props;
    }
    componentWillReceiveProps(nextProps){
        this.state = nextProps;
    }
    render(){
        return(<div className="box-element">
            <BoxPlayerElement props = {{player : 1,data:this.state.props.p1}}/>
            <BoxPlayerElement props = {{player : 2,data:this.state.props.p2}}/>
            <BoxPlayerElement props = {{player : 3,data:this.state.props.p3}}/>
            <BoxPlayerElement props = {{player : 4,data:this.state.props.p4}}/>
        </div>);
    }
}
export default BoxElement;