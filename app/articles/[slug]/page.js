import Image from "next/image";
import React from "react";
import articles from "../../../utils/articles";
import ArticleCard from "../ArticleCard";

export default function page({ params }) {
  const article = articles.find((x) => x.slug === params.slug);

  const arrayWithoutParam = articles.filter(function (array) {
    return array.slug !== params.slug;
  });

  return (
    <div className="relative">
      <div className="absolute top-0 w-full h-[800px] bg-gray-100 -z-10"></div>
      <div className="absolute bottom-0 right-0 w-2/3 h-[700px] bg-gray-100 -z-10"></div>
      <div className="cont grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className=" md:col-span-2 prose max-w-none px-5 py-10">
          <h1 className="h1 text-center mb-3">{article.name}</h1>
          <p className="p text-gray-600 uppercase text-center">
            {article.author} - {article.date}
          </p>
          <Image
            src={article.image}
            className="object-contain w-full h-auto"
            alt={article.name}
            width={500}
            height={500}
          />
          <h2>{article.h2}</h2>
          <p>{article.p2}</p>
          <h3>{article.h3}</h3>
          <p>{article.p3}</p>
          <h4>{article.h4}</h4>
          <p>{article.p4}</p>
          <h5>{article.h5}</h5>
          <p>{article.p5}</p>
          <h6>{article.h6}</h6>
          <p>{article.p6}</p>
        </div>
        <div className="flex flex-col gap-10">
          {arrayWithoutParam.map((article) => {
            return (
              <ArticleCard article={article} key={article.slug}></ArticleCard>
            );
          })}
        </div>
      </div>
    </div>
  );
}
