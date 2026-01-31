import React, { useEffect, useState, useContext } from "react";
import "./Booklist.css";
import axios from "axios";
import Loader from "../Loader";
import { ErrorContext } from "../../contexts/ErrorContext";
import { BOOKS_API } from "../../config";

const BookList = ({ shouldFetch }) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const { showError } = useContext(ErrorContext);


  useEffect(() => {
    if (!shouldFetch) return; // shouldFetch is ON/OFF switch for fetching.

    let isMounted=true;
    const controller = new AbortController();  // AbortController prevents stale requests if user switches fast.

    const fetchBooks = async () => {
      try {
        if(isMounted) setLoading(true)
        const res = await axios.get(BOOKS_API+'/',{
          signal: controller.signal
        });
        if(isMounted) setBooks(res.data);
      } catch (err) {
        if (!(err.name === "CanceledError" || err.name === "AbortError")) {
          showError("Failed to load books. Please try again later.");
        }
      } finally {
         if(isMounted) setLoading(false);
      }
    };
    fetchBooks();

    return()=>{
      isMounted=false;
      controller.abort();
  };
}, [shouldFetch,showError]);




  if(!shouldFetch){ return null; }
  if (loading) { return <Loader size={100} />; }


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
