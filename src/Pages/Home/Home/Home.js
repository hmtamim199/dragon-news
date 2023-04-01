import React from "react";
import { useLoaderData } from "react-router-dom";
import NewSummaryCart from "../../Shared/NewSummaryCart/NewSummaryCart";

const Home = () => {
  const allNews = useLoaderData()
  return (
    <div>
      <h2>this is home components it has:{allNews.length}</h2>
      {
        allNews.map(news => <NewSummaryCart
          key={news._id}
          news={news}
        ></NewSummaryCart>)
      }
    </div>
  );
};

export default Home;
