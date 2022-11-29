import Menu from "./MenuComponent"
import { DISHES } from "../shared/dishes"
/* import { LEADERS } from "../shared/leaders"
import { COMMENTS } from "../shared/comments"
import { PROMOTIONS } from "../shared/promotiones" */
import React,{ Component } from 'react';
//import  DishdetailComponent  from "./DishdetailComponent"
import Header from './headerComponent';
import Footer from './footerComponent';
import Home from './HomeComponent'
import { Routes, Route } from "react-router-dom";
import Contactus from './contactComponent'

import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotiones';
import { LEADERS } from '../shared/leaders';


class  Main extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          dishes: DISHES,
           
        };
      }

  render(){
    function HomePage(){
      return(
        <Home dish={DISHES.filter((dish) => dish.featured)[0]}
        promotion={PROMOTIONS.filter((promo) => promo.featured)[0]}
        leader={LEADERS.filter((leader) => leader.featured)[0]}
          />
      )
    }
   
    return (

      <div className="App">
            
         <Header/>

         <Routes>
         <Route path='/home'  element={<HomePage/>} />
          <Route exact path='/menu' element={ <Menu dishes={this.state.dishes} />} />
          <Route exact path='/contactus' element={<Contactus />}/>
          
        </Routes> 
        

       
        <Footer/>
        
        
      </div>
    );
  }
  
}

export default Main;
