import React, { useEffect, useState } from "react";
import Link from "next/link";

const ArticlesList = ({ blogs }) => {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    setArticles([...blogs])
  }, [])
  console.log(articles)
  return (
    <div className="articles-list">
      <div className="navigation">
        <p>All Articles</p>
        <div className="categories">
          <Link
            href="/submit"
            className="options"
            style={{
              color: "black",
              fontSize: "1.25rem",
              border: "1px solid red",
            }}
          >
            Submit New Blog

          </Link>

        </div>
      </div>
      <div className="grid">
        {articles.map((article, key) => (
          <div className="article" key={key}>
            <img src={article.image} />
            <div className="grid-info">
              <div className="left">
                <p className="date">{article.createdAt}</p>
              </div>
            </div>
            <div className="detail">
              <a >{article.title}</a>
              <p className="description">{article.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticlesList;
