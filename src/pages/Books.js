import { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { DataContext } from "../providers/DataProvider"
import "./BooksStyle.css"
import Book from "./Book"


const Books = ()=>{
    
    const data = useContext(DataContext)
    console.log(data.books)
    
    const renderBooks= ()=>{
        
  
        return data.books.map((book)=>{
          return <Book key={book.title} {...book} deleteBook={data.deleteBook} updateBook={data.updateBook}/>
        })
      }
    
    return (
        <div>
          
            <h1 id="header">Books Page</h1>
            <Link to='/NewBook'>create a New Book</Link>
        
            <button onClick={()=>data.setDemoState('changed in BOOKS')}>change text</button>
            
            <div>{data.books && renderBooks()}</div>
            
            <button onClick={data.getBooks}>Get Books</button>
            <hr />
            {/* {JSON.stringify(data)} */}
            <hr />
        </div>
        
    )
}




export default Books