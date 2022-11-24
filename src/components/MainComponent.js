import { Navbar,NavbarBrand } from 'reactstrap'
import Menu from "./MenuComponent"
import { DISHES } from "../shared/dishes"
import { Component } from 'react';
import  DishdetailComponent  from "./DishdetailComponent"


class  Main extends Component {
  constructor(props){
    super(props)
    this.state={
      dishes:DISHES,
      selectedDish:null,
      selectOne:false,
      comment:null
    }
  };
  onDishSelecte(dishId){
        
    this.setState({selectedDish: dishId ,  selectOne: true ,   comment:dishId.comments })
  
}
  render(){
    return (

      <div className="App">
        <Navbar dark color="primary">
          <div className="container ">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
  
          </div>
        </Navbar>
        
        <Menu dishes={this.state.dishes} onClick={(dishId)=>this.onDishSelecte(dishId)}/>
        {this.state.selectOne &&(
            <div>
               
                <DishdetailComponent state={this.state} comments={this.state.comment} dish={this.state.dishes.filter((dish)=>dish.id === this.state.selectedDish)[0]}/>
                

            </div>
        )}
        
        
      </div>
    );
  }
  
}

export default Main;
