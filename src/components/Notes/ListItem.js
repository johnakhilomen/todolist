import React from 'react'
import Particles from 'react-particles-js'
import './ListItem.css'
import Note from './Note'
import {Modal, Button, Row, Col, Form } from 'react-bootstrap'
import ModalItem from './ModalItem'

class ListItem extends React.Component{

    state = {

        todo:{},
        show: false,
        currentNoteID: ""
    }

    handleModal =(id) =>{
        this.setState({show:true});
        this.setCurrentId(id);
        console.log(this.state)
        console.log('this is:', this);
        
    }

    setCurrentId = (id) => {
        this.setState({currentNoteID: id});
    }
    handleClose = () => { 
        this.setState({ show: false });
        //console.log("show : " +this.props.show);
    }


    // handleSubmit = (e) =>{
    //     e.preventDefault()
    //     const noteId = document.getElementById("currentNoteId").innerHTML
    //     const todo = e.target.TodoName.value
    //     console.log(todo)
    //     fetch('http://localhost:8000/todo/' + noteId, {
    //     method:'PUT',
    //     headers:{'Content-Type' : 'application/json', 'Authorization' : 'sdfsfsfwiiowuerewrwrewrww'},
    //     body:JSON.stringify({
    //       todo:todo
    //     })
    //   }).then((result)=>console.log(result))
    // }


    render(){
        let i = 0;
        return <div>
            {this.props.items.map(item => {
                i = i+ 1
                return(
                    <div>
                        <div className="list" key={item.noteid} >
                            <p id={"p" + 1} style={{
                                textDecoration: item.done === 1  ? 'line-through' : ""
                            }}  key={item.noteid} onClick={()=> this.props.toggleComplete(item) } > {item.todo} {item.noteid} </p>
                            <div className="icons">
                                
                                
                                <Button onClick={()=> {let id; id = item.noteid;this.handleModal(id) }} id={item.noteid} >Edit</Button>
                                
                                <ModalItem show = {this.state.show} itemid={this.state.currentNoteID} handleClose = {this.handleClose}/>
                                
                                <img onClick={()=> this.props.deleteItem(item.noteid)} src="https://img.icons8.com/wired/64/000000/empty-trash.png" height="20" />
                            </div>
                        </div>
                    </div>
                
                )
            })}
        </div>
        
    }
}


/* const ListItem = (props) =>{
    const items = props.items
    if (items.length !== 0){
        const listItems = items.map(item => {
            return (
                <div className="list" key={item.noteid}>
                    <p key={item.noteid}> {item.todo} {item.noteid}</p>
                    <div className="icons">
                        <img className="pencil" src="https://img.icons8.com/android/24/000000/pencil.png" height="20"/>
                        <img onClick={()=> props.deleteItem(item.noteid)} src="https://img.icons8.com/wired/64/000000/empty-trash.png" height="20" />
                    </div>
                </div>
            )
        })
        return (
            <div>{listItems}
            
            </div>
        )
    } else {
        return (
            <div></div>
        )
    }
    
} */

export default ListItem

