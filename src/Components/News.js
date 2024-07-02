import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import NewsItems from "./NewsItems";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const updateNews = async (pageNo) => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=117999611b5346458e17e81144b45da0&page=${pageNo}&pageSize=${props.pageSize}`;
    setLoading(true);
    try {
      const data = await fetch(url);
      if (!data.ok) {
        throw new Error("Network response was not ok " + data.statusText);
      }
      const parsedData = await data.json();
      setArticles(parsedData.articles);
      setLoading(false);
      setTotalResults(parsedData.totalResults);
    } catch (error) {
      console.error("Fetch error: ", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    updateNews(page);
    document.title = `${
      props.category.charAt(0).toUpperCase() + props.category.slice(1)
    } - NewsLord`;
  }, []);

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=117999611b5346458e17e81144b45da0&page=${
      page + 1
    }&pageSize=${props.pageSize}`;
    try {
      const data = await fetch(url);
      if (!data.ok) {
        throw new Error("Network response was not ok " + data.statusText);
      }
      const parsedData = await data.json();
      setArticles(articles.concat(parsedData.articles));
      setTotalResults(parsedData.totalResults);
      setPage(page + 1);
    } catch (error) {
      console.error("Fetch error: ", error);
      setLoading(false);
    }
  };

  return (
    <>
      <h1
        style={{ textAlign: "center", margin: "40px 0px", marginTop: "90px" }}
      >
        NewsLord - Top{" "}
        {props.category.charAt(0).toUpperCase() + props.category.slice(1)}{" "}
        Headlines
      </h1>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => (
              <div className="col-md-3" key={element.url}>
                <NewsItems
                  title={element.title}
                  description={element.description}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  publishedAt={element.publishedAt}
                  author={element.author}
                  source={element.source.name}
                />
              </div>
            ))}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

News.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string,
  pageSize: PropTypes.number,
};

export default News;
