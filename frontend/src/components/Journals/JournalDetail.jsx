import React,{useState} from "react";
import { useParams } from "react-router-dom";
import blogs from "../../data/blogs";
import "./JournalDetail.css"
import ReactMarkdown from "react-markdown"

const JournalDetail = () => {

  const [likeStatus,setLikeStatus]=useState(false);
  function toggleLikeStatus(){
    setLikeStatus(!likeStatus)
  }
  const { slug } = useParams();

  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) return <p>Blog not found</p>; // avoid errors on invalid slugs

  return (
    <div className="JournelDetailCardContainer">
      {/* <h1 className="DetailCardTitle">{blog.title}</h1> */}
      <img src={blog.coverImage ? `/${blog.coverImage}` : "/defaultCover.jpg"} alt="Blog Cover Image" />
      <div className="DetailCardContent">
        <ReactMarkdown>{blog.content}</ReactMarkdown>
        </div>
       <div className="DetailCardMeta">
        
       <div className="AuthorInfo">
        <div>
          <p className="AuthorName">
            {blog.author}
          </p>
          <p className="AuthorDept">{blog.department} • {blog.batch}</p>
            <div className="AuthorSocials">
             <a href="https://linkedin.com/in/authorusername" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <i className="fab fa-linkedin"></i>
             </a>
             <a href="https://instagram.com/authorusername" target="_blank" rel="noopener noreferrer" title="Instagram">
                <i className="fab fa-instagram"></i>
             </a>
            </div>
          </div>
        </div>

        <button 
          className="LikeButton" 
            onClick={toggleLikeStatus}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
             className={`heartIcon ${likeStatus == true ? 'liked' : ''}`}
              >
           <path
             d="M12 21.35l-1.45-1.32C5.4 15.36 
                2 12.28 2 8.5 
                 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 
                  4.5 2.09C13.09 3.81 14.76 3 
                16.5 3 19.58 3 22 5.42 
                22 8.5c0 3.78-3.4 
                6.86-8.55 11.54L12 21.35z"
            />
            </svg>
           {likeStatus == true ? `Liked`: "Like"}
         </button>
        </div>
    </div>
  );
};

export default JournalDetail;
