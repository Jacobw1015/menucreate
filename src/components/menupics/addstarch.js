import React from "react";

class Starch extends React.Component{
  
    render(){

        let pic = this.props.src;
        let path = `/pics/starch/${pic}.jpg`;
        return (
        <div>
          <img src={path} />
          <p>This is {this.props.starch}</p>
        </div>
        ) ;
 

    }
}
export default Starch;