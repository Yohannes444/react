
import React, { Component } from "react"
import { Card, CardImg, CardText, CardBody,CardTitle } from 'reactstrap';


class DishDetail extends Component {
    constructor(props){
        super(props)
        this.state={
                dish:this.props.dish,
                comments:this.props.comments
        }
    }
    renderDish(dish){
        
        return(
            <Card key={dish.id} className="col-12 col-md-5 m-1">
                <CardImg width="100%" src={dish.image} alt={dish.name}/>
                <CardBody>
                    <CardTitle >{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        )
      
        
    }
 
    
    render() {
        
        
            var renderComments= this.state.dish.comments.map((comment)=>{
            
            return(
            <div key={comment.id} className="container">
                
                <p>{comment.comment}</p>
                <p>{comment.author}  {new Intl.DateTimeFormat('en-US',{year:'numeric',month:'short', day:'2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                
            </div>    )
        }) 
        
        return(
            <div className="row">
                {this.renderDish(this.state.dish)}
                <div className="m-1">
                    <h4>Comments</h4>
                  {renderComments} 
                </div>
               
                 
                
            </div>
        )
    }
    
}


export default DishDetail