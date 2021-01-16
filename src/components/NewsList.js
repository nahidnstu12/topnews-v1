import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import { News } from './NewsItem';

const useStyles = makeStyles((theme) => ({
  CountNews: {
    display: 'flex',
    justifyContent: 'space-between',
    color: '#564c4c',
  },
}));
export const NewsList = ({ articles, totalNews,pageSize,currentPage }) => {
  // console.log(articles[1])
  return (
    <Grid>
      {articles ? (
        <>
          <CountNews totalNews={totalNews}  pageSize={pageSize} currentPage={currentPage} />

          {articles.map((newsItem, index) => (
            <News
              key={index}
              img={newsItem.urlToImage ? newsItem.urlToImage : ''}
              title={newsItem.title}
              url={newsItem.url}
              description={newsItem.description}
              published={newsItem.publishedAt}
              content={newsItem.content}
              author={newsItem.author ? newsItem.author : 'Unknown'}
            />
          ))}
        </>
      ) : (
        <>
          <h3>No Data Found</h3>
          <p>Please,try later</p>
        </>
      )}
    </Grid>
  );
};

const CountNews = ({ totalNews,pageSize,currentPage }) => {
  const classes = useStyles();
  const totalPages = Math.ceil(totalNews / pageSize);

  return (
    <Grid className={classes.CountNews}>
      <p>Found {totalNews} Results</p>
      <p>{currentPage} of {totalPages} pages</p>
    </Grid>
  );
};
