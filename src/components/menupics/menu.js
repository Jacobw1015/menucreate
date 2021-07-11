import React from "react";
import Protein from "./protein/addprotein";
import Veggies from "./veg/addveggie";
import Starch from "./starch/addstarch";
import './styles.css';
import Button from '../button/Button';

class Menu extends React.Component{
   
    constructor(props){
        super(props);
       this.state={
        protein: ['beef','pork','salmon','Whole Chicken'],
        veggie: ['broccoli','peas','spinach','carrots'],
        starches: ['mashed potatoes','pasta','rice','polenta'],
        isClicked: true
       }
           this.onClick=this.onClick.bind(this);
          this.changPic =this.changPic.bind(this);
          
    }
    onClick(){
      this.setState({isClicked:!this.state.isClicked})
      

    }
    changPic(){
      let random = Math.floor(Math.random()*4);
      return random;
    }
    
    render(){
      let starch = this.state.starches[this.changPic()];
      let veg = this.state.veggie[this.changPic()];
      let protein = this.state.protein[this.changPic()];

        return(
          
            <div className="food">
              <Button onClick={this.onClick}/>
              {'\n'}
              {this.state.isClicked && <Protein src={protein} protein={protein}/>}
              {this.state.isClicked && <Veggies src={veg} veg={veg}/>}
              {this.state.isClicked && <Starch src={starch} starch={starch}/>}
        
            </div>
         
        );

    }
}
export default Menu;