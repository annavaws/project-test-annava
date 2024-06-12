import React from "react";
import Image from "next/image";

interface Article {
  id: number;
  title: string;
  small_image: {
    url: string;
  }[];
  medium_image: string;
  published_at: string;
}

interface ArticleCardProps {
  article: Article;
}
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  const imageUrl =
    article.small_image && article.small_image.length > 0
      ? article.small_image[0].url
      : "";

  const publishedDate = new Date(article.published_at);
  const monthName = months[publishedDate.getMonth()];
  const formattedDate = `${publishedDate.getDate()} ${monthName} ${publishedDate.getFullYear()}`;

  return (
    <div className="border rounded-lg shadow-lg">
      <div className="bg-gray-200 m-0 rounded-t-lg">
        {imageUrl && (
          <Image
            src={imageUrl}
            alt={article.title}
            width={500}
            height={300}
            className="w-full h-52 object-cover mb-4"
            loading="lazy"
          />
        )}
      </div>
      <div className="p-3 pt-0">
        <div className="uppercase">{formattedDate}</div>
        <div className="text-lg font-semibold overflow-hidden text-ellipsis max-h-20 line-clamp-3">
          {article.title}
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
