import React from "react";


class Protein extends React.Component{
    constructor(props){
        super(props);
        
    }
    render(){
        let pic = this.props.src;
       let path = `/pics/protein/${pic}.jpg`;
        return (
            <div>
              <img src={path} />
              <p>This is {this.props.protein}</p>
            </div>
            ) ;
       

    }
    
}
export default Protein;