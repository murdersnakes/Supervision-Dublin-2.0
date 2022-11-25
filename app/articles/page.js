import React from "react";
import articles from "../../utils/articles";
import ArticleCard from "./ArticleCard";

export default function page() {
  return (
    <div>
      <div className="absolute bottom-0 right-0 w-2/3 h-3/5 bg-gray-100 -z-10"></div>
      <div className="cont">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              Articles
            </p>
          </div>
          <h2 className="h1 leading-normal">
            Lorem ipsum dolor <span className="underline italic font-light underline-offset-4">sit amet</span> consectetur.
          </h2>
          <p className="p mt-4 text-center text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
            repudiandae eveniet accusamus deserunt reiciendis tempora
            voluptatibus eligendi. 
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {articles.map((article) => {
            return (
              <ArticleCard article={article} key={article.slug}></ArticleCard>
            );
          })}
        </div>
      </div>
    </div>
  );
}
