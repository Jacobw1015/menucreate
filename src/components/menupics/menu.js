import React from "react";
import Protein from "./addprotein";
import Veggies from "./addveggie";
import Starch from "./addstarch";
import './styles.css';
import Button from '../button/Button';

class Menu extends React.Component{
   
    constructor(props){
        super(props);
       this.state={
        protein: ['beef','pork','salmon','Whole-Chicken'],
        veggie: ['broccoli','peas','spinach','carrots'],
        starches: ['mashedpotatos','pasta','rice','poenta'],
        isClicked: true
       }
           this.onClick=this.onClick.bind(this);
          
          
    }
    onClick(){
      this.setState({isClicked:!this.state.isClicked})
      

    }
    
    render(){
  
      let random = Math.floor(Math.random()*4);
        return(
          <div>
            <div>
              {this.state.isClicked && <Protein src={this.state.protein[random]}/>}
              {this.state.isClicked && <Veggies src={this.state.veggie[random]}/>}
              {this.state.isClicked && <Starch src={this.state.starches[random]}/>}
            </div>
            <Button onClick={this.onClick}/>
          </div>
        );

    }
}
export default Menu;