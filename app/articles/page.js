
import React from "react";
import articles from "../../utils/articles";
import ArticleCard from "./ArticleCard";

export default function page() {
  return (
    <div>
      <div className="cont">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {articles.map((article)=>{
            return(
                <ArticleCard article={article} key={article.slug}></ArticleCard>
            )
          })}
        </div>
      </div>
    </div>
  );
}
