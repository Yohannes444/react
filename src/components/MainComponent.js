import Menu from "./MenuComponent"
import { DISHES } from "../shared/dishes"
import React,{ Component } from 'react';
//import  DishdetailComponent  from "./DishdetailComponent"
import Header from './headerComponent';
import Footer from './footerComponent';
import Home from './HomeComponent'
//import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import { Navbar, NavbarBrand } from 'reactstrap';
import Contact from "./contactComponent";
import {Comment } from "../shared/comment"
import {Promition} from "../shared/promotiones"
import {LEADERS} from "../shared/leaders"



class  Main extends Component {
  constructor(props){
    super(props)
    this.state={
      dishes:DISHES,
      leaders:LEADERS,
      promition:Promition,
      comments:Comment
    }
  };
  onDishSelecte(dishId){
        
    this.setState({selectedDish: dishId ,  selectOne: true ,   comment:dishId.comments })
  
}
onSetAfter(empty){
  this.setState({selectedDish: empty.selectedDish, selectOne:empty.seletedOne, comment:empty.comment})
}
  render(){
    function HomePage(){
      return(
        <Home/>
      )
    }
    return (

      <div className="App">
        
        
        {/* 
        <Menu dishes={this.state.dishes} onClick={(dishId)=>this.onDishSelecte(dishId)} setAfter={(empty)=>this.onSetAfter(empty)}/>
        {this.state.selectOne &&(<DishdetailComponent   comments={this.state.comment} dish={this.state.dishes.filter((dish)=>dish.id === this.state.selectedDish)[0]}/>)}
         */}
         <Header/>
     
         <BrowserRouter>
         <Routes>
          
          <Route path='/home'  element={<HomePage/>} />
          <Route exact path='/menu' element={ <Menu dishes={this.state.dishes} />} />
          <Route exact path="/contactus" element={<Contact/>}/>
        </Routes> 
        </BrowserRouter>
        <Footer/>
        
        
      </div>
    );
  }
  
}

export default Main;
