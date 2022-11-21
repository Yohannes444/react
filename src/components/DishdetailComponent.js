
import React, { Component } from "react"
import { Card, CardImg, CardText, CardBody,CardTitle } from 'reactstrap';


class DishDetail extends Component {
    constructor(props){
        super(props)
        this.state={
                dish:this.props.selected,
                comments:this.props.comment
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
        
        const renderComments=this.props.comments.map((comment)=>{
            
            if(comment != null){
            return(
            <div key={comment.id} >
                
                <p>{comment.comment}</p>
                <p>{comment.author}{comment.date}</p>
                
            </div>    )}else{
                return(<div></div>)
            }
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