import React, { useState } from "react";

interface FilterPaginationProps {
  onFilterChange: ({
    pageSize,
    sortOrder,
  }: {
    pageSize?: number;
    sortOrder?: string;
  }) => void;
  totalItems: number;
  currentPage: number;
  pageSize: number;
  sortOrder: string;
}

const FilterPagination: React.FC<FilterPaginationProps> = ({
  onFilterChange,
  totalItems,
  currentPage,
  pageSize,
  sortOrder,
}) => {
  const [pageSizes] = useState([10, 20, 50]);
  const [sortOptions] = useState([
    { label: "Newest", value: "-published_at" },
    { label: "Oldest", value: "published_at" },
  ]);

  const handlePageSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onFilterChange({ pageSize: parseInt(e.target.value, 10) });
  };

  const handleSortOrderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onFilterChange({ sortOrder: e.target.value });
  };

  return (
    <div className="flex flex-col lg:flex-row justify-between items-center mb-4">
      <div className="mb-6 text-center lg:mb-0">
        Showing {currentPage * pageSize - pageSize + 1}-
        {Math.min(currentPage * pageSize, totalItems)} of {totalItems}
      </div>
      <div className="flex space-x-12 flex-col gap-4 md:gap-0 md:flex-row">
        <label className="flex items-center">
          Show per page:
          <select
            value={pageSize}
            onChange={handlePageSizeChange}
            className="ml-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-tango focus:border-tango block px-4 py-2 pr-10"
          >
            {pageSizes.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </label>
        <label className="flex items-center">
          Sort by:
          <select
            value={sortOrder}
            onChange={handleSortOrderChange}
            className="ml-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-tango focus:border-tango block px-4 py-2 pr-10"
            // className="ml-2 border rounded-full px-4 py-2 text-left pr-10"
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value} className="">
                {option.label}
              </option>
            ))}
          </select>
        </label>
      </div>
    </div>
  );
};

export default FilterPagination;
