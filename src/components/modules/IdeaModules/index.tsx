import React, { useEffect, useState } from "react";
import axios from "axios";
import FilterPagination from "@/components/modules/IdeaModules/filter";
import ArticleCard from "@/components/modules/IdeaModules/articleCard";
import Pagination from "@/components/modules/IdeaModules/pagination";

interface Idea {
  id: number;
  title: string;
  small_image: {
    url: string;
  }[];
  medium_image: string;
  published_at: string;
}

const IndexPage: React.FC = () => {
  const [ideas, setIdeas] = useState<Idea[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(10);
  const [sortOrder, setSortOrder] = useState<string>("-published_at");
  const [totalItems, setTotalItems] = useState<number>(0);
  const [initialized, setInitialized] = useState<boolean>(false);

  useEffect(() => {
    const savedCurrentPage = parseInt(
      localStorage.getItem("currentPage") || "1"
    );
    const savedPageSize = parseInt(localStorage.getItem("pageSize") || "10");
    const savedSortOrder = localStorage.getItem("sortOrder") || "-published_at";

    setCurrentPage(savedCurrentPage);
    setPageSize(savedPageSize);
    setSortOrder(savedSortOrder);
    setInitialized(true);
  }, []);

  useEffect(() => {
    if (!initialized) return;

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
      } catch (error) {
        console.error("Error fetching ideas:", error);
      }
    };

    fetchData();
  }, [currentPage, pageSize, sortOrder, initialized]);

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
    <div className="min-h-screen mt-12 mx-auto px-12 lg:px-28 pb-10 text-black">
      <FilterPagination
        onFilterChange={handleFilterChange}
        totalItems={totalItems}
        currentPage={currentPage}
        pageSize={pageSize}
        sortOrder={sortOrder}
      />
      <div className="pb-4"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 my-4">
        {ideas.map((idea) => (
          <ArticleCard key={idea.id} article={idea} />
        ))}
      </div>
      <Pagination
        totalItems={totalItems}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default IndexPage;
