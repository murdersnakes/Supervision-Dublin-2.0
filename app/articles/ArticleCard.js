import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ArticleCard({ article }) {
  return (
    <div className="overflow-hidden box bg-gray-50">
      <Image
        src={article.image}
        className="object-cover w-full h-64"
        alt={article.name}
        width={500}
        height={500}
      />
      <div className="p-5 border border-t-0">
        <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
          {article.author}
          <span className="text-gray-600">— {article.date}</span>
        </p>
        <h2 className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700">
          {article.name}
        </h2>

        <p className="mb-5 text-gray-700">{article.p1.split("").slice(0, 70).join("")}...</p>
        <Link
          href={`/articles/${article.slug}`}
          aria-label=""
          className="btn"
        >
          Read more
        </Link>
      </div>
    </div>
  );
}
