import { useEffect } from "react"
import { useParams, useLocation } from "react-router-dom"
import NewBook from "./NewBook"
import "./BooksStyle.css"


const Book = (props)=>{
    let params = useParams()
    let location = useLocation()
    console.log(props)
    return (
        <div>
        
            <h1>{props.title}</h1>
            <h1>Author:{props.author}</h1>
            <button onClick={()=>{props.deleteBook(props.id)}}>Delete</button>
            <button onClick={()=>{props.updateBook(props.id)}}>Update</button>

        </div>
    )
}
// {data.books && data.books.map(u=>{
//     return(
//         <div key={u.id}>
//             <h1 id="title">{u.title} </h1>
//             <h3 id="author">Author:{u.author}</h3>
            
//             <button onClick={()=>{data.deleteBook(u.id)}}>delete</button>
//             <Link to={`/Books/${u.id}`} state={u}>show</Link>
//         </div>    
//     )
// })}

export default Book;