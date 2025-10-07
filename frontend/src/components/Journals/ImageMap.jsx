import React from "react";
import techImg from "../../assets/journalCovers/technology.jpg";
import careerImg from "../../assets/journalCovers/career.jpeg";
import productivityImg from "../../assets/journalCovers/productivity.png";
import defaultImg from "../../assets/journalCovers/default.webp";
import featuredImg from "../../assets/journalCovers/featured.jpg"

const ImageMap = ({ tag, alt = "cover image", loading = "lazy", className }) => {
  const normalizedTag = tag?.toLowerCase();
  const imageMap = {
    technology: techImg,
    career: careerImg,
    productivity: productivityImg,
    featured: featuredImg,
  };

  const imageSrc = imageMap[normalizedTag] || defaultImg;

  const imgProps = {
    src: imageSrc,
    alt,
    className,
  };

  // Add lazy loading only if enabled
  if (loading && loading !== "none" && loading !== false) {
    imgProps.loading = "lazy";
  }

  return <img {...imgProps} />;
};

export default ImageMap;
