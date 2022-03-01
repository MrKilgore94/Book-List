import axios from "axios";
import React, { useState } from "react";
export const DataContext = React.createContext();

const DataProvider = (props) => {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);
  const [demoState, setDemoState] = useState(
    "hi I am demoState from the data provider "
  );

  
  const getBooks = async () => {
 
    try {
      let res = await axios.get("https://fakerapi.it/api/v1/books?_quantity=5");
      setBooks(res.data.data);
    } catch (err) {
      setError("error occured");
    }
  };

 
 
  const addBook = (newBookFromForm) => {
    let newBooks = [...books, newBookFromForm];
    setBooks(newBooks);
  };

  
  const updateBook = (updateBookFromForm) => {
    let updateBooks = books.map((u) =>
      u.id === updateBookFromForm.id ? updateBookFromForm : u
    );
    setBooks(updateBook);
  };
  
  const deleteBook = (idOfBookClicked) => {
    let filteredBooks = books.filter((book) => book.id !== idOfBookClicked);
    setBooks(filteredBooks);
  };

  
  const dataProviderThing = {
    books,
    demoState,
    x: 1,
    setDemoState,
    addBook,
    updateBook,
    deleteBook,
    getBooks,
    error,
  };
  
  return (
    <DataContext.Provider value={dataProviderThing}>
      {props.children}
    </DataContext.Provider>
  );
};

export default DataProvider;