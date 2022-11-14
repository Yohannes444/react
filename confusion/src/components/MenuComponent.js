import React,{ Component } from "react"
import { Card, CardImg, CardImgOverlay, CardText, CardBody,CardTitle } from 'reactstrap';
import  DishdetailComponent  from "./DishdetailComponent"


class Menu extends Component {
    constructor(props){
        super(props)
        this.state={
            selectedDish:null,
            selectOne:false,
            comment:null
        }
    }
    onDishSelecte(dish){
        
        this.setState({selectedDish: dish ,  selectOne: true ,   comment:dish.comments })
      
    }

    
    render()    {
        
        const menu=this.props.dishes.map((dish)=>{
            return(
                <div key={dish.id} className="col-12 col-md-5 m-1" >
                    <Card key={dish.id} onClick={()=>this.onDishSelecte(dish)} >
                        <CardImg width="100%" src={dish.image} alt={dish.name}/>
                        <CardImgOverlay>
                            <CardTitle heading>{dish.name}</CardTitle>
                        </CardImgOverlay>     
                    </Card>
                </div>
            )
        })
        
       return(
        <div className="container">
        
                <div className="row">
                    {menu} 
                </div>
                <div>

                    {this.state.selectOne &&( 
                        <div>
                        <DishdetailComponent  comments={this.state.comment} selected={this.state.selectedDish}/>
                        
                         </div>
                                            
                    )}
                    
                    
                </div> 
                
                               

            </div>
       )
    }
        
    
}
export default Menu