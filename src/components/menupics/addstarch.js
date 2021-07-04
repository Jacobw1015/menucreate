import React from "react";

class Starch extends React.Component{
  
    render(){

        let pic = this.props.src;
        let path = `/pics/starch/${pic}.jpg`;
        return <img src={path} /> ;
 

    }
}
export default Starch;