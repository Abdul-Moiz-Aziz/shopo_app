import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";

import Pending from "./Pending";
import Canceled from "./Canceled";
import Shipped from "./Shipped";
import Unshipped from "./UnShipped";
import { useURLSearchParams } from "../../utils/pagination";
import OrderDetailsHeader from "../../components/common/OrderDetailsHeader";
import Pagination from "../../components/common/Pagination";

import {
  setOrders,
  filterByStatus,
  applySearch,
} from "../../store/orders/ordersSlice";

// You should eventually fetch from API or Redux

const Orders = () => {
  const SAMPLE_DATA = [
    {
      id: "1",
      sku: "SKU123",
      itemId: "ITEM123",
      po: "ORD123",
      name: "Ali Raza",
      quantity: 3,
      date: "2025-06-20",
      status: "shipped",
      img: "https://images.unsplash.com/photo-1603252110481-7ba873bf42ab?w=100",
      total: 150,
      title: "Wireless Headphones",
    },
    {
      id: "2",
      sku: "SKU456",
      itemId: "ITEM456",
      po: "ORD456",
      name: "Sara Khan",
      quantity: 2,
      date: "2025-06-19",
      status: "pending",
      total: 220,
      title: "Bluetooth Speakers",
    },
    {
      id: "3",
      sku: "SKU789",
      itemId: "ITEM789",
      po: "ORD789",
      name: "Usman Tariq",
      quantity: 1,
      date: "2025-06-18",
      status: "unshipped",
      total: 99,
      title: "Smart Watch",
    },
    {
      id: "4",
      sku: "SKU1112",
      itemId: "ITEM789",
      po: "ORD789",
      name: "Tari",
      quantity: 1,
      date: "2025-06-20",
      status: "canceled",
      total: 200,
      title: "Smart Watch",
    },
    {
      id: "4",
      sku: "SKU300",
      itemId: "ITEM78",
      po: "ORD78",
      name: "Tari",
      quantity: 1,
      date: "2025-06-20",
      status: "canceled",
      total: 200,
      title: "Smart Watch",
    },
    {
      id: "4",
      sku: "SKU789",
      itemId: "ITEM789",
      po: "ORD789",
      name: "Tari",
      quantity: 1,
      date: "2025-06-20",
      status: "canceled",
      total: 200,
      title: "Smart Watch",
    },
    {
      id: "4",
      sku: "SKU300",
      itemId: "ITEM78",
      po: "ORD78",
      name: "Tari",
      quantity: 1,
      date: "2025-06-20",
      status: "canceled",
      total: 200,
      title: "Smart Watch",
    },
    {
      id: "4",
      sku: "SKU789",
      itemId: "ITEM789",
      po: "ORD789",
      name: "Tari",
      quantity: 1,
      date: "2025-06-20",
      status: "canceled",
      total: 200,
      title: "Smart Watch",
    },
    {
      id: "4",
      sku: "SKU300",
      itemId: "ITEM78",
      po: "ORD78",
      name: "Tari",
      quantity: 1,
      date: "2025-06-20",
      status: "canceled",
      total: 200,
      title: "Smart Watch",
    },
  ];
  const dispatch = useDispatch();
  const { status } = useParams();
  const { searchParams, setSearchParams } = useURLSearchParams();

  const [searchType, setSearchType] = useState("sku");
  const [searchValue, setSearchValue] = useState("");

  const currentPage = parseInt(searchParams.get("page")) || 1;
  const itemsPerPage = parseInt(searchParams.get("length")) || 5;

  const orders = useSelector((state) => state.orders.sorted);

  // INITIAL LOAD: Inject static or fetched data
  useEffect(() => {
    dispatch(setOrders(SAMPLE_DATA));
  }, [dispatch]);

  // SEARCH + FILTERS + STATUS
  useEffect(() => {
    dispatch(filterByStatus(status));

    const sku = searchParams.get("sku");
    const itemId = searchParams.get("itemId");
    const po = searchParams.get("po");
    setSearchValue((prev) => prev = sku || itemId || po || "");

    if (sku) dispatch(applySearch({ type: "sku", value: sku }));
    if (itemId) dispatch(applySearch({ type: "itemId", value: itemId }));
    if (po) dispatch(applySearch({ type: "po", value: po }));

  }, [dispatch, status, searchParams]);

  const handlePageChange = (newPage) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("page", newPage);
    setSearchParams(newParams);
  };

  const handleLengthChange = (newLength) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("length", newLength);
    newParams.set("page", 1);
    setSearchParams(newParams);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();

    const newParams = new URLSearchParams(searchParams);
    dispatch(applySearch({ type: searchType, value: searchValue }));
    newParams.set("page", 1);

    newParams.delete("sku");
    newParams.delete("itemId");
    newParams.delete("po");

    if (searchValue.trim() !== "") {
      newParams.set(searchType, searchValue.trim());
    }

    setSearchParams(newParams);
  };

  const paginatedOrders = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return orders.slice(start, start + itemsPerPage);
  }, [orders, currentPage, itemsPerPage]);

  return (
    <div className="mt-[30px] px-4">
      {/* Search and Filter UI */}
      <form
        onSubmit={handleSearchSubmit}
        className="flex flex-wrap items-center gap-3 mb-5"
      >
        <select
          value={searchType}
          onChange={(e) => setSearchType(e.target.value)}
          className="border px-2 py-1 rounded"
        >
          <option value="sku">SKU</option>
          <option value="itemId">Item ID</option>
          <option value="po">PO</option>
        </select>

        <input
          type="text"
          placeholder={`Search by ${searchType.toUpperCase()}`}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className="border px-3 py-1 rounded w-64"
        />

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-1 rounded"
        >
          Search
        </button>

        <select
          value={itemsPerPage}
          onChange={(e) => handleLengthChange(e.target.value)}
          className="border px-2 py-1 rounded ml-auto"
        >
          <option value="5">5 per page</option>
          <option value="10">10 per page</option>
          <option value="20">20 per page</option>
        </select>
      </form>

      <OrderDetailsHeader status={status} />

      {/* Conditional Rendering by status */}
      {status === "pending" && <Pending orders={paginatedOrders} />}
      {status === "unshipped" && <Unshipped orders={paginatedOrders} />}
      {status === "canceled" && <Canceled orders={paginatedOrders} />}
      {status === "shipped" && <Shipped orders={paginatedOrders} />}

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(orders.length / itemsPerPage)}
        onPageChange={handlePageChange}
        onLengthChange={handleLengthChange}
      />
    </div>
  );
};

export default Orders;
