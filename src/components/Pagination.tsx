import React from "react";
import "../styles/pagination.css";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  return (
    <div className="pagination">
      <button
        className={`page-number ${currentPage === 1 ? "disabled" : ""}`}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      {pageNumbers.map((number) => (
        <span
          key={number}
          className={`page-number ${currentPage === number ? "active" : ""}`}
          onClick={() => onPageChange(number)}
        >
          {number}
        </span>
      ))}
      <button
        className={`page-number ${
          currentPage === totalPages ? "disabled" : ""
        }`}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
