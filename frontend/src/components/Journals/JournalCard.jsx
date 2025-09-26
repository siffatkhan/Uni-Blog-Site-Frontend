import React,{useState} from 'react';
import blogs from '../../data/blogs';
import { NavLink } from "react-router-dom";
import books from '../../data/books';
import BookList from './BookList';
import './JournalCard.css'; 

const JournalCard = () => {
  const [selectedCategory,setselectedCategory]= useState("all");

  function handleclick(category){
      setselectedCategory(category)
  }

  let filteredBlogs;

  if(selectedCategory==="all"){
    filteredBlogs=blogs;
  }
  else if(selectedCategory==="books"){
      filteredBlogs=books;
  }else{
    filteredBlogs = blogs.filter((blog)=>{
      return blog.tags === selectedCategory
    })
  }
  return (
    <div className="wrapper">
      
      <div className="navLinks">
        <button onClick={()=>handleclick("all")}>All</button>
        <button onClick={()=>handleclick("men")}>Tech</button>
        <button onClick={()=>handleclick("career")}>Career</button>
        <button onClick={()=>handleclick("productivity")}>Productivity</button>
        <button onClick={()=>handleclick("books")} >Wanna read books!!</button>
      </div>
    
    <div className="journalCardGrid"> {/* Flex or grid container */}
      {
        selectedCategory==="books" ? ( <BookList shouldFetch={true}/> ) : (filteredBlogs.map((blog, index) =>{
        if(blog.id!==1){
            return (
          <div className="journalCard" key={index}>
          <img
            src={blog.coverImage ? `/${blog.coverImage}` : '/defaultCover.jpg'}
            alt="card cover image"
            loading="lazy"
            className="cardCover"
          />

          <div className="cardContent">
            <p className="cardMeta">
              {blog.date} 
              <span class="dot-separator">•</span>
               {blog.readTime}
            </p>

            <NavLink to={`/journals/${blog.slug}`} className={({isActive})=>isActive ? "actived":"navLink"}>
                <h2 className="cardTitle">{blog.title}</h2>
                <p className="cardExcerpt">
                  {blog.excerpt.length > 120
                  ? blog.excerpt.slice(0, 120) + '...'
                  : blog.excerpt || ""}
                </p>
             </NavLink>

                
        <div className="authorDetails">
          <p>{blog.author}</p>
          <p className="count">{blog.likes} 
            <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="heart-icon liked"
              >
            <path
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 
               2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 
                2.09C13.09 3.81 14.76 3 16.5 
                3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 
                6.86-8.55 11.54L12 21.35z"
              />
            </svg>
            </span>
            </p>
          </div>
          </div>
        </div>
            )
        }
            else {
                return null;
            }
            }))
      }
      
    </div>
    </div>
  );
};

export default JournalCard;
