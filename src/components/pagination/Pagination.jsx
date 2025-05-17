import "./Pagination.css";

export default function Pagination({
  currentPage,
  setCurrentPage,
  totalResults,
}) {
  const pageSize = 6;
  const totalPages = Math.ceil(totalResults / pageSize);

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }
  const handlepageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="pagination">
      <button
        className="prev-btn"
        disabled={currentPage === 1}
        onClick={() => currentPage > 1 && handlepageClick(currentPage - 1)}
      >
        Prev
      </button>

      <ul className="page-numbers">
        {pageNumbers.map((pageNumber) => (
          <li
            key={pageNumber}
            className={`page-number ${
              pageNumber === currentPage ? "active" : ""
            }`}
            onClick={() => handlepageClick(pageNumber)}
          >
            {pageNumber}
          </li>
        ))}
      </ul>
      <button
        className="next-btn"
        disabled={currentPage === totalPages}
        onClick={() =>
          currentPage < totalPages && handlepageClick(currentPage + 1)
        }
      >
        Next
      </button>
    </div>
  );
}
