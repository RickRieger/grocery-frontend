import React, { Component } from 'react'

export class GroceryList extends Component {


  render() {
    const { grocery, _id, purchased } = this.props.item;
    const { handleDeleteByID, handleDoneByID, handleEditByID1} = this.props;
    
    return (
      <div className="task-row">
        <div className="class-row">
        <input type="checkbox"/>
        <label>Priority</label>
        <p 
        className={`${purchased ? "complete" : ""}`}
        onClick={()=>{handleDoneByID(_id, purchased)}}>{grocery}
        </p>
        </div>
        <div className="class-row">
        <i 
        className="fas fa-edit" 
        id="edit0"
        onClick={()=>{handleEditByID1(_id, this.props.item.grocery)}}></i>
        <i 
        className="fas fa-trash-alt" 
        id="delete0"
        onClick={()=>{handleDeleteByID(_id)}}>
        </i>
        </div>
      </div>              
    )
  }
}

export default GroceryList
