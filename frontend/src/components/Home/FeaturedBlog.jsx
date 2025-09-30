import React, { useEffect, useState } from 'react'
import "./FeaturedBlog.css"
import { Link } from "react-router-dom"
import axios from "axios"

const FeaturedBlog = () => {
  const [featured, setFeatured] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const fetchFeatured = async () => {
      try {
        setLoading(true);
        const res = await axios.get("http://127.0.0.1:8000/journals/api/featured/", {
          signal: controller.signal,
        });
        setFeatured(res.data);
      } catch (err) {
        if (err.name !== "CanceledError" && err.name !== "AbortError") {
          console.error("Error fetching featured blog:", err);
        }
      } finally {
        setLoading(false);
      }
    };
    fetchFeatured();
    return () => controller.abort();
  }, []);

  if (loading) return <p>Loading featured post...</p>;

  // image problem still persists
  // const imageSrc = `https://drive.google.com/uc?export=view&id=1AfeqMBTq04g8dbCkTCMw9wrtZXZngLOd`

  return (
    <div className="featuredBlogContainer">
      <p className="featuredLabel">FEATURED POST</p>
      <div className="blogCard">
        <img
         src={
          // featured.cover_image_url
          // ? `https://drive.google.com/uc?export=view&id=${featured.cover_image_url}`
          // : 
          "/featured.jpg"
            }
          alt="Featured Blog"
          className="blogPic"
          loading="lazy"
          onError={(e)=>{
            e.currentTarget.src="/featured.jpg";
          }}
        />

        {/* <img src={imageSrc} alt="Featured Blog Pic" className="blogPic" /> */}

        <div className="blogContent">
          <div className="blogMeta">
            <p className="blogAuthor">{featured?.author || "Admin"}</p>
            <p className="blogDate">
               {"Sep 21, 2025"} <span className="dot">•</span> {featured?.read_time || "1 min read"}
            </p>
          </div>
          <div className="content">
            <Link
            to={featured ? `/journals/${featured.slug}` : "#"}
            state={{ fetchDetailedJournal: true}}
            className="blogLink"
          >
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
