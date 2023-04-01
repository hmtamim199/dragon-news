import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewSummaryCart from '../../Shared/NewSummaryCart/NewSummaryCart';

const Category = () => {
  const categoryNews = useLoaderData()
  return (
    <div>
      <h2>this is category has {categoryNews.length}</h2>
      {
        categoryNews.map(news => <NewSummaryCart
          key={news._id}
          news={news}

        ></NewSummaryCart>)
      }

    </div>
  );
};

export default Category;