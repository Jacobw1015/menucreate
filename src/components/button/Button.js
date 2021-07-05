import React from 'react';
import './styles.css';

class Button extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return (
            <div>
              <button onClick={this.props.onClick}>Button</button>
            </div>
        );
    }


}
export default Button;