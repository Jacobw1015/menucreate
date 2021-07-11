import React from "react";
import recipes from "../recipes";

class Starch extends React.Component{
  constructor(props){
    super(props);
    
    this.recipe=this.recipe.bind(this);
    
}
recipe(val){
    val = this.props.starch;
    if(val == 'mashed potatoes'){
    return recipes.starches.potatoes();
 }else if(val == 'polenta'){return recipes.starches.polenta();}
 else if(val == 'rice'){return recipes.starches.rice();}
 else if(val == 'pasta'){return recipes.starches.pasta();}
}
    render(){

        let pic = this.props.src;
        let path = `/pics/starch/${pic}.jpg`;
        return (
        <div>
          <img src={path} />
          <p>This is {this.props.starch}</p>
          {this.recipe(this.props.starch)}
        </div>
        ) ;
 

    }
}
export default Starch;