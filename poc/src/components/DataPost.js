import React, { Component } from 'react';
import axios from 'axios'
import Tippy from '@tippy.js/react'
import 'tippy.js/dist/tippy.css'

class DataPost extends Component {
    constructor(props) {
        super(props)
    
        this.state = {bookId:'',
        authName:'',
        author:'',
        postKaro:false,
        posting:true
             
        }
    }
    ifPost(){
        this.setState({postKaro:true})
    }
    done(){
        this.setState({posting:false})
    }

    changeHandler=(e)=>{
        this.setState({[e.target.name]:e.target.value})

    }
    submitHandler=(e)=>{
        e.preventDefault()
        alert(`${this.state.bookId} by ${this.state.authName} has been added`)
        axios.post(`https://jsonplaceholder.typicode.com/posts`,this.state)
        .then(res=>{
            console.log(res)
         })
        .catch(err=>{
            console.log(err)
        })
    }
    
    render() {
        const {bookId,authName,author}=this.state
        return (
            <div>
                <Tippy content='To add a book'>
                <button onClick={()=>this.ifPost()}>Add a book</button>
                </Tippy>
                {(this.state.postKaro&&this.state.posting)&&
                (<div><form onSubmit={this.submitHandler}>
                    <label>Book name</label>
                    <input  type='text' name='bookId' value={bookId} onChange={this.changeHandler}></input>
                    <br></br>
                    <label>Author name name</label>
                    <input  type='text' name='authName' value={authName} onChange={this.changeHandler} ></input>
                    <br></br>
                    <button type='submit'>Add book</button>
                </form><button onClick={()=>this.done()}>done</button></div>)}
                
            </div>
        );
    }
}

export default DataPost;