import { Link, useNavigate } from "react-router-dom"
import { useState, useContext } from "react"
import DataProvider, { DataContext } from "../providers/DataProvider"
import '../App.css';


const NewBook = ()=>{
    const navigate = useNavigate()
    const data = useContext(DataContext)
    let [title, setTitle]= useState('')
    let [author, setAuthor]= useState('')
  

    const handleSubmit = (e)=>{
        e.preventDefault()
        let newBook = {id: Math.random(), title, author}
        console.log(newBook)

        data.addBook(newBook)
        
        navigate('/books')
    };





    return(
       <>
            <h1 style={{ textAlign: 'center'}}>New Book </h1>
            <Link to='/books'>Back to books page!</Link>
            <form style={{textAlign: 'center'}} onSubmit={handleSubmit}>
                <br />
                <br />
                <input style={{textAlign: 'center', borderRadius: '10px'}} placeholder='Title...' value={title} onChange={(e)=>setTitle(e.target.value)} />
                <br />
                <br />
                <input style={{ textAlign: 'center', borderRadius: '10px'}} placeholder='Author...' value={author} onChange={(e)=>setAuthor(e.target.value)} />
                <br />
                <button>Add Book!</button>
            </form>
            </>
    );



};
export default NewBook;