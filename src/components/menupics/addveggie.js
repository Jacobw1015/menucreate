import React from "react";

class Veggies extends React.Component{
    
    render(){
        let pic = this.props.src;
       let path = `/pics/veg/${pic}.jpg`;
       return (
        <div>
          <img src={path} />
          <p>This is {this.props.veg}</p>
        </div>
        ) ;
    }
}

export default Veggies;