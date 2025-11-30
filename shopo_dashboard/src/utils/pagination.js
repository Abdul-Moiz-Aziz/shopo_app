// utils/pagination.js
import { useSearchParams } from "react-router-dom";

export const paginateData = (data, page, limit) => {
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const paginatedData = data.slice(startIndex, endIndex);
  const totalPages = Math.ceil(data.length / limit);
  return {
    data: paginatedData,
    totalPages,
    currentPage: page,
    totalItems: data.length,
  };
};

export const useURLSearchParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  return { searchParams, setSearchParams };
};
