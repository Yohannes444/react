
import React from "react"
import { Card, CardImg, CardText, CardBody,CardTitle } from 'reactstrap';


function renderDish(dish){
        
    return(
        <Card  key={dish.id} className="col-12 col-md-5 m-1">
            <CardBody>
            <CardImg width="100%" src={dish.image} alt={dish.name}/>
                <CardTitle >{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>
    )
  
    
}
const DishDetail=(props)=>{
    var renderComments= props.dish.comments.map((comment)=>{
            
        return(
        <div key={comment.id} className="container">
            
            <p>{comment.comment}</p>
            <p>{comment.author}  {new Intl.DateTimeFormat('en-US',{year:'numeric',month:'short', day:'2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
            
        </div>    )
    })
    return(
        <div className="row">
        {renderDish(props.dish)}
        <div className="m-1">
            <h4>Comments</h4>
          {renderComments} 
        </div>
       
         
        
    </div>
    )
}

   
   
 
    
   



export default DishDetail