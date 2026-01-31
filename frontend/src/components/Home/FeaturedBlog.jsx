import React, { useEffect, useState, useContext } from "react";
import "./FeaturedBlog.css";
import { Link } from "react-router-dom";
import axios from "axios";
import Loader from "../Loader";
import { ErrorContext } from "../../contexts/ErrorContext";
import { FEATURED_BLOG_API } from "../../config";


const FeaturedBlog = () => {
  const [featured, setFeatured] = useState(null);
  const [loading, setLoading] = useState(false);
  const {showError}= useContext(ErrorContext);

  useEffect(() => {
    const controller = new AbortController();
    let isMounted=true;

    const fetchFeatured = async () => {
      try {
        if(isMounted) setLoading(true);
        const res = await axios.get(FEATURED_BLOG_API+"/", {
          signal: controller.signal}
        );
        if(isMounted) setFeatured(res.data);
      } catch (err) {
        if (!(err.name === "CanceledError" || err.name === "AbortError")) {
          showError("Failed to load featured blog.");
        }
      } finally {
       if(isMounted) setLoading(false);
      }
    };
    fetchFeatured();
    return () =>{ 
      isMounted=false;
      controller.abort();}
  }, [showError]);


  if (loading) { return <Loader size={100} />; }
// ===========================================================================
  return (
    <div className="featuredBlogContainer">
      <p className="featuredLabel">FEATURED POST</p>
      <div className="blogCard">
        <img
         src={"/featured.jpg"}
          alt="Featured Blog"
          className="blogPic"
          loading="lazy"
          onError={(e)=>{
            e.currentTarget.src="/featured.jpg";
          }}
        />


        <div className="blogContent">
          <div className="blogMeta">
            <p className="blogAuthor">{featured?.author || "Admin"}</p>
            <p className="blogDate">
               {"Sep 21, 2025"} <span className="dot">•</span> {featured?.read_time+" min read" || "1 min read"}
            </p>
          </div>
          <div className="content">
            <Link
            to={featured ? `/journals/${featured.slug}` : "#"}
            state={{ fetchDetailedJournal: true}}
            className="blogLink">

            <h1 className="blogTitle">{featured?.title || "Why  We Made This Site"}</h1>
            <p className="blogExcerpt">{featured?.excerpt || "The purpose of this website is to create a central hub for students where they can easily find blogs, past papers, and resources related to their academic journey. Aim is to save time and provide guidance."}</p>
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedBlog;
