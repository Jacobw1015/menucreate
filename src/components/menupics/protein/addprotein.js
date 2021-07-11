import React from "react";
import recipes from "../recipes";

class Protein extends React.Component{
    constructor(props){
        super(props);
        
        this.recipe=this.recipe.bind(this);
        
    }
    recipe(val){
        val = this.props.protein;
        if(val == 'pork'){
        return recipes.proteins.pork();
     }else if(val == 'beef'){return recipes.proteins.beef();}
     else if(val == 'Whole Chicken'){return recipes.proteins.chicken();}
     else if(val == 'salmon'){return recipes.proteins.salmon();}
    }
    render(){
        let pic = this.props.src;
       let path = `/pics/protein/${pic}.jpg`;
        return (
            <div>
              <img src={path} />
              <p>This is {this.props.protein}</p>
              {this.recipe(this.props.protein)}
            </div>
            ) ;
       

    }
    
}
export default Protein;