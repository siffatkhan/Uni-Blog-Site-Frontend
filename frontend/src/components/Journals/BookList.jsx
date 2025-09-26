import React,{useEffect, useState} from "react";
// import books from "../../data/books";
import "./Booklist.css"
import axios from "axios";

const BookList = ({shouldFetch}) => {


  const [books, setBooks]=useState([]);
  const [loading,setLoading]=useState(false);

  useEffect(() => {
    if (!shouldFetch) return;
    // shouldFetch is like an ON/OFF switch for fetching.

    const controller = new AbortController(); 
    // AbortController prevents stale requests if user switches fast.

    const fetchBooks = async () => {
      try {
        setLoading(true)
        const res = await axios.get("http://127.0.0.1:8000/api/books/",{
          signal: controller.signal
        });
        setBooks(res.data);
      } catch (err) {
        if (err.name === "CanceledError" || err.name === "AbortError") return;
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
    return()=>controller.abort();

  }, [shouldFetch]);

  if(!shouldFetch){
    return null;
  }

  if(loading){
    return <p className="loader">Loading Books...</p>
  }

  return (
    <div className="bookList">
      {books.map(book => {
        const links = getGoogleDriveLinks(book.fileId);
        return (
          <div className="bookCard" key={book.id}>
            <h3>{book.title}</h3>
            <p>{book.author}</p>

            <a href={links.view} target="_blank" rel="noopener noreferrer">
              Read
            </a>

            <a href={links.download} target="_blank" rel="noopener noreferrer">
              Download
            </a>
          </div>
        );
      })}
    </div>
  );
};

function getGoogleDriveLinks(fileId) {
  return {
    view: `https://drive.google.com/file/d/${fileId}/preview`,
    download: `https://drive.google.com/uc?export=download&id=${fileId}`
  };
}

export default BookList;
