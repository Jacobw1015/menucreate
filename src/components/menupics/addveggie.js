import React from "react";

class Veggies extends React.Component{
    
    render(){
        let pic = this.props.src;
       let path = `/pics/veg/${pic}.jpg`;
       return <img src={path} /> ;

    }
}

export default Veggies;