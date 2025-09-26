import React from "react";
import Header from "./Header";
import QuickLinks from "./QuickLinks";
import FeaturedBlog from "./FeaturedBlog";
import QuoteOfTheDay from "./QuoteOfTheDay";
import McqsTest from "./McqsTest";

const HomePage = () => {
  return (
    <main>

      {/* <QuickLinks /> */}

      <FeaturedBlog />
      <McqsTest/>

      {/* <QuoteOfTheDay /> */}
    </main>
  );
};

export default HomePage;