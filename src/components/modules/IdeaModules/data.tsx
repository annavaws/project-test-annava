import React, { useEffect, useState } from "react";
import axios from "axios";
import FilterPagination from "@/components/modules/IdeaModules/filterPagination";
import ArticleCard from "@/components/modules/IdeaModules/articleCard";

interface Idea {
  id: number;
  title: string;
  small_image: string;
  medium_image: string;
  published_at: string;
}

const IndexPage: React.FC = () => {
  const [ideas, setIdeas] = useState<Idea[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(10);
  const [sortOrder, setSortOrder] = useState<string>("-published_at");
  const [totalItems, setTotalItems] = useState<number>(0);

  useEffect(() => {
    const savedCurrentPage = parseInt(
      localStorage.getItem("currentPage") || "1"
    );
    const savedPageSize = parseInt(localStorage.getItem("pageSize") || "10");
    const savedSortOrder = localStorage.getItem("sortOrder") || "-published_at";

    setCurrentPage(savedCurrentPage);
    setPageSize(savedPageSize);
    setSortOrder(savedSortOrder);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/ideas", {
          params: {
            "page[number]": currentPage,
            "page[size]": pageSize,
            append: ["small_image", "medium_image"],
            sort: sortOrder,
          },
        });
        setIdeas(response.data.data);
        setTotalItems(response.data.meta.total);
        console.log("idead", ideas);
        console.log("total items", totalItems);
      } catch (error) {
        console.error("Error fetching ideas:", error);
      }
    };

    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, pageSize, sortOrder]);

  const handleFilterChange = ({
    pageSize,
    sortOrder,
  }: {
    pageSize?: number;
    sortOrder?: string;
  }) => {
    if (pageSize) {
      setPageSize(pageSize);
      localStorage.setItem("pageSize", pageSize.toString());
    }
    if (sortOrder) {
      setSortOrder(sortOrder);
      localStorage.setItem("sortOrder", sortOrder);
    }
    setCurrentPage(1); // reset to first page when filters change
    localStorage.setItem("currentPage", "1");
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    localStorage.setItem("currentPage", page.toString());
  };

  return (
    <div className="container mx-auto px-4">
      <FilterPagination
        onFilterChange={handleFilterChange}
        totalItems={totalItems}
        currentPage={currentPage}
        pageSize={pageSize}
        sortOrder={sortOrder}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-4">
        {ideas.map((idea) => (
          <ArticleCard key={idea.id} article={idea} />
        ))}
      </div>
      <div className="flex justify-center mt-4">
        {Array.from({ length: Math.ceil(totalItems / pageSize) }, (_, i) => (
          <button
            key={i}
            onClick={() => handlePageChange(i + 1)}
            disabled={currentPage === i + 1}
            className={`mx-1 px-3 py-1 rounded ${
              currentPage === i + 1 ? "bg-blue-500 text-white" : "bg-gray-300"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default IndexPage;
