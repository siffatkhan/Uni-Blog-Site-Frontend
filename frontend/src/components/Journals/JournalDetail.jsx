import React, { useState, useEffect, useContext } from "react";
import { useParams, useLocation } from "react-router-dom";
import "./JournalDetail.css";
import ReactMarkdown from "react-markdown";
import axios from "axios";
import ImageMap from "./ImageMap";
import Loader from "../Loader";
import { ErrorContext } from "../../contexts/ErrorContext";
import { JOURNALS_API } from "../../config";

const JournalDetail = () => {
  const [blog,setBlogDetail]=useState(null);
  const [loading,setLoading]=useState(false);
  const { showError } = useContext(ErrorContext);

  const { slug } = useParams();
  const location = useLocation();
  const { fetchDetailedJournal } = location.state || {};
  // // ==================================================================
  // LIKE FUNCTIONITY ADDED TO THE LOCALSTORAGE

  const [likeStatus, setLikeStatus] = useState(
    () => localStorage.getItem(`like-${slug}`) === "true"
  );

  function toggleLikeStatus() {
    const newStatus = !likeStatus;
    setLikeStatus(newStatus);
    localStorage.setItem(`like-${slug}`, newStatus);
  }

// ==================================================================
// Fetching journals from database
  useEffect(()=>{
    if(!fetchDetailedJournal) return;

    let isMounted= true;
    const controller=new AbortController();

    const fetchJournal= async() => {
      try{
        if (isMounted) setLoading(true);
        const res = await axios.get(`${JOURNALS_API}/${slug}/`,
           { signal:controller.signal}
        );
        if(isMounted) setBlogDetail(res.data);
      }
      catch(err){
        if(!(err.name==="CanceledError" || err.name==="AbortError")){
          showError("Failed to load that blog. Please try again later.")
        }
      } finally{
        if(isMounted) setLoading(false);
      }
    };
    
    fetchJournal();
    return()=>{
      isMounted=false;
      controller.abort();}
  },[fetchDetailedJournal,slug,showError])
// ==================================================================
  if (loading) { return <Loader size={100} />; }
  if (!blog) return <p>Blog not found</p>;
  
// ==================================================================
  return (
    <div className="JournelDetailCardContainer">
      <ImageMap tag={blog.tags} alt={"blog cover image"} loading={false} className={"JournelDetailCardContainerImg"}/>
      

      <div className="DetailCardContent">
        <ReactMarkdown>{blog.content}</ReactMarkdown>
      </div>

      <div className="DetailCardMeta">
       <div className="AuthorInfo">
        <div>
          <p className="AuthorName">{blog.author}</p>
          <p className="AuthorDept">{blog.department} • {blog.batch}</p>
        </div>
        </div>

        <button 
          className="LikeButton" onClick={toggleLikeStatus}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
             className={`heartIcon ${likeStatus == true ? 'liked' : ''}`} >
           <path
             d="M12 21.35l-1.45-1.32C5.4 15.36 
                2 12.28 2 8.5 
                 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 
                  4.5 2.09C13.09 3.81 14.76 3 
                16.5 3 19.58 3 22 5.42 
                22 8.5c0 3.78-3.4 
                6.86-8.55 11.54L12 21.35z"/>
            </svg>
           {likeStatus == true ? `Liked`: "Like"}
         </button>
        </div>
    </div>
  );
};

export default JournalDetail;



//       With lazy loading:
// Images below the screen load only when needed.
// This makes the page load faster, reduces data usage, and improves Core Web Vitals (SEO + performance).




  // location.state
  // <Link to={`/journals/${journal.slug}`} 
  // state={{ fetchDetailedJournal }}></Link>
  // When you navigate using <Link> or useNavigate, you can pass extra state.
  // IT gives you a pre-passed function (or data) from the previous page, 
  // so you don’t need to fetch again from scratch if you already have it.
  // This safely extracts fetchDetailedJournal if it was passed. 
  // If nothing was passed, it defaults to {} so it doesn’t crash.
  
