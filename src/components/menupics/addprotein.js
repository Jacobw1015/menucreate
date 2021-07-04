import React from "react";


class Protein extends React.Component{
    constructor(props){
        super(props);
        
    }
    render(){
        let pic = this.props.src;
       let path = `/pics/protein/${pic}.jpg`;
        return <img src={path} />;
       

    }
    
}
export default Protein;