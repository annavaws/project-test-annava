import React from "react";

interface PaginationProps {
  totalItems: number;
  pageSize: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalItems,
  pageSize,
  currentPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / pageSize);

  const handleClick = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5;
    let startPage = 1;
    let endPage = totalPages;

    if (totalPages > maxPagesToShow) {
      if (currentPage <= Math.floor(maxPagesToShow / 2) + 1) {
        endPage = maxPagesToShow;
      } else if (currentPage + Math.floor(maxPagesToShow / 2) >= totalPages) {
        startPage = totalPages - maxPagesToShow + 1;
      } else {
        startPage = currentPage - Math.floor(maxPagesToShow / 2);
        endPage = currentPage + Math.floor(maxPagesToShow / 2);
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handleClick(i)}
          className={`px-3 py-1 mx-1 rounded-lg ${
            currentPage === i ? "bg-tango text-white" : "text-gray-800"
          }`}
        >
          {i}
        </button>
      );
    }

    return pageNumbers;
  };

  return (
    <div className="flex justify-center mt-4">
      <button
        onClick={() => handleClick(1)}
        disabled={currentPage === 1}
        className={`px-3 py-1 mx-1 ${
          currentPage === 1 ? "text-gray-400 cursor-not-allowed" : ""
        }`}
      >
        {"<<"}
      </button>
      <button
        onClick={() => handleClick(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-3 py-1 mx-1 ${
          currentPage === 1 ? "text-gray-400 cursor-not-allowed" : ""
        }`}
      >
        {"<"}
      </button>
      {renderPageNumbers()}
      <button
        onClick={() => handleClick(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-3 py-1 mx-1 ${
          currentPage === totalPages ? "text-gray-400 cursor-not-allowed" : ""
        }`}
      >
        {">"}
      </button>
      <button
        onClick={() => handleClick(totalPages)}
        disabled={currentPage === totalPages}
        className={`px-3 py-1 mx-1 ${
          currentPage === totalPages ? "text-gray-400 cursor-not-allowed" : ""
        }`}
      >
        {">>"}
      </button>
    </div>
  );
};

export default Pagination;
