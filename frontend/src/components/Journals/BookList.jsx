import React from "react";
import books from "../../data/books";
import "./Booklist.css"

const BookList = () => {
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
