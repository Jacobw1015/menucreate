import React from "react";
import recipes from "../recipes";

class Veggies extends React.Component{
  constructor(props){
    super(props);
    
    this.recipe=this.recipe.bind(this);
    
}
recipe(val){
    val = this.props.veg;
    if(val == 'broccoli'){
    return recipes.veggies.broccoli();
 }else if(val == 'carrots'){return recipes.veggies.carrots();}
 else if(val == 'peas'){return recipes.veggies.peas();}
 else if(val == 'spinach'){return recipes.veggies.spinach();}
}
    render(){
        let pic = this.props.src;
       let path = `/pics/veg/${pic}.jpg`;
       return (
        <div>
          <img src={path} />
          <p>This is {this.props.veg}</p>
          {this.recipe(this.props.veg)}
        </div>
        ) ;
    }
}

export default Veggies;