// components/common/Pagination.jsx
const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  // if (totalPages <= 1) return null;

  return (
    <div className="mt-4 flex gap-2 justify-end">
      {pages.map((num) => (
        <button
          key={num}
          onClick={() => onPageChange(num)}
          className={`px-3 py-1 border rounded ${
            num === currentPage
              ? "bg-blue-500 text-white"
              : "bg-white text-blue-500 border-blue-500"
          }`}
        >
          {num}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
