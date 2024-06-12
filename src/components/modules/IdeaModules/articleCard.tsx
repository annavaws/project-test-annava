import React from "react";

interface Article {
  id: number;
  title: string;
  small_image: string;
  // Add other article fields as needed
}

interface ArticleCardProps {
  article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <div className="border rounded shadow p-4">
      <img src={article.small_image} alt={article.title} className="w-full h-48 object-cover rounded mb-4" />
      <h3 className="text-xl font-semibold">{article.title}</h3>
      {/* Add other article details */}
    </div>
  );
};

export default ArticleCard;
