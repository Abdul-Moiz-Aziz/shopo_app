// src/pages/Inventory.jsx
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import InventoryProdTemp from "../../components/common/InventoryProdTemp";
import Pagination from "../../components/common/Pagination";
import {
  setProducts,
  editProduct,
  saveChanges,
  cancelChanges,
  deleteProduct,
  copyProduct,
  applyFiltersAndSort,
} from "../../store/inventory/inventorySlice";
import { paginateData, useURLSearchParams } from "../../utils/pagination";

const Inventory = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    sorted: filteredSortedProducts,
    edited: editedProducts,
    isEdited,
    changedCount,
  } = useSelector((state) => state.inventory);

  const [showPopup, setShowPopup] = useState(false);
  const [dropdownOpenId, setDropdownOpenId] = useState(null);
  const [searchInput, setSearchInput] = useState("");

  const { searchParams, setSearchParams } = useURLSearchParams();
  const search = searchParams.get("search") || "";
  const statusFilter = searchParams.get("status") || "all";
  const sortOption = searchParams.get("sort") || "";
  const currentPage = parseInt(searchParams.get("page")) || 1;
  const itemsPerPage = parseInt(searchParams.get("length")) || 2;

  useEffect(() => {
    const initialData = [
      {
        id: 1,
        sku: "SKU123222",
        name: "Wireless Mouse",
        price: 25,
        stock: 50,
        views: 120,
        status: "active",
        image:
          "https://images.unsplash.com/photo-1603252110481-7ba873bf42ab?w=100",
      },
      {
        id: 2,
        sku: "SKU124",
        name: "Gaming Keyboard",
        price: 55,
        stock: 30,
        views: 80,
        status: "draft",
        image:
          "https://images.unsplash.com/photo-1603252110481-7ba873bf42ab?w=100",
      },
    ];
    dispatch(setProducts(initialData));
  }, [dispatch]);

  useEffect(() => {
    setSearchInput(search);
    dispatch(
      applyFiltersAndSort({ search, status: statusFilter, sort: sortOption })
    );
  }, [dispatch, search, statusFilter, sortOption, editedProducts]);

  const handleEdit = (id, field, value) => {
    dispatch(editProduct({ id, field, value }));
  };

  const handleSaveAll = () => {
    dispatch(saveChanges());
    localStorage.setItem("inventoryProducts", JSON.stringify(editedProducts));
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2000);
  };

  const handleCancelAll = () => {
    dispatch(cancelChanges());
  };

  const handleDropdownToggle = (productId) => {
    setDropdownOpenId((prev) => (prev === productId ? null : productId));
  };

  const handleDelete = (productId) => {
    dispatch(deleteProduct(productId));
    setDropdownOpenId(null);
  };

  const handleCopy = (product) => {
    dispatch(copyProduct(product));
    setDropdownOpenId(null);
  };

  const handleEditClick = (productId) => {
    navigate(`/inventory/edit-product/${productId}`);
    setDropdownOpenId(null);
  };

  const handleFilterChange = (key, value) => {
    const newParams = new URLSearchParams(searchParams);
    if (value) newParams.set(key, value);
    else newParams.delete(key);
    if (key !== "page") newParams.set("page", 1);
    setSearchParams(newParams);
  };

  const handlePageChange = (page) => {
    handleFilterChange("page", page);
  };

  const handleLengthChange = (e) => {
    handleFilterChange("length", e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    handleFilterChange("search", searchInput);
  };

  const paginationResult = paginateData(
    filteredSortedProducts,
    currentPage,
    itemsPerPage
  );
  const paginatedProducts = paginationResult.data;

  return (
    <div className="mt-[30px] relative">
      {showPopup && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-md z-50">
          Changes saved
        </div>
      )}

      {/* Filters & Controls */}
      <form
        onSubmit={handleSearchSubmit}
        className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
      >
        <div className="flex gap-2 w-full md:w-1/4">
          <input
            type="text"
            placeholder="Search products..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="px-3 py-2 border border-[#6176FE] rounded text-sm w-full"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-[#6176FE] text-white rounded hover:bg-[#4a5edc] text-sm"
          >
            Search
          </button>
        </div>

        <select
          value={statusFilter}
          onChange={(e) => handleFilterChange("status", e.target.value)}
          className="px-3 py-2 border border-[#6176FE] rounded text-sm w-full md:w-1/4"
        >
          <option value="all">All</option>
          <option value="active">Active</option>
          <option value="draft">Inactive</option>
        </select>

        <select
          value={sortOption}
          onChange={(e) => handleFilterChange("sort", e.target.value)}
          className="px-3 py-2 border border-[#6176FE] rounded text-sm w-full md:w-1/4"
        >
          <option value="">Sort By</option>
          <option value="priceLowHigh">Price: Low to High</option>
          <option value="priceHighLow">Price: High to Low</option>
          <option value="stockHighLow">Stock: High to Low</option>
        </select>

        <select
          value={itemsPerPage}
          onChange={handleLengthChange}
          className="px-3 py-2 border border-[#6176FE] rounded text-sm w-full md:w-1/6"
        >
          <option value="2">2 / page</option>
          <option value="10">10 / page</option>
          <option value="100">100 / page</option>
          <option value="250">250 / page</option>
        </select>
      </form>

      {/* Table */}
      <div className="w-full overflow-x-scroll md:overflow-x-visible">
        <table className="w-full table-auto border border-[#E2E7F1] bg-white">
          <thead className="bg-gray-100 text-left text-[#222222] text-sm border-b border-[#E2E7F1]">
            <tr>
              <th className="md:p-4 px-2">Product</th>
              <th className="md:p-4 px-2">SKU</th>
              <th className="md:p-4 px-2">Price</th>
              <th className="md:p-4 px-2">Stock</th>
              <th className="md:p-4 px-2">Page Views</th>
              <th className="md:p-4 px-2">Status</th>
              <th className="md:p-4 px-2"></th>
            </tr>
          </thead>
          <tbody className="text-sm text-[#5a5a5a]">
            {paginatedProducts.length > 0 ? (
              paginatedProducts.map((product) => (
                <InventoryProdTemp
                  key={product.id}
                  product={product}
                  onEdit={handleEdit}
                  dropdownOpenId={dropdownOpenId}
                  onToggleDropdown={handleDropdownToggle}
                  onDelete={handleDelete}
                  onCopy={handleCopy}
                  onEditClick={handleEditClick}
                />
              ))
            ) : (
              <tr>
                <td
                  colSpan="7"
                  className="p-5 text-center text-[#222222] font-semibold"
                >
                  No products found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <Pagination
        currentPage={paginationResult.currentPage}
        totalPages={paginationResult.totalPages}
        onPageChange={handlePageChange}
        onLengthChange={handleLengthChange}
      />

      {/* Save / Cancel Buttons */}
      {isEdited && (
        <div className="flex flex-col sm:flex-row sm:items-center justify-end gap-4 mt-4">
          <p className="text-sm text-gray-500">
            {changedCount} SKU{changedCount !== 1 ? "s" : ""} changed
          </p>
          <div className="flex gap-2">
            <button
              onClick={handleCancelAll}
              className="px-4 py-2 text-sm rounded border border-gray-300 hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              onClick={handleSaveAll}
              className="px-4 py-2 text-sm rounded bg-[#6176FE] text-white hover:bg-[#4a5edc]"
            >
              Save
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Inventory;
