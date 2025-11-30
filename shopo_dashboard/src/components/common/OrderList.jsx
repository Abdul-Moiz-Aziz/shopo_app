import React, { useEffect, useState } from "react";
import { FaBoxOpen } from "react-icons/fa";
import { Link } from "react-router";

const OrderList = ({ order }) => {
  const [statusColor, setStatusColor] = useState("bg-red-600");
  let dateObject = new Date(Date.now());

  // Example of formatting to a human-readable string
  let formattedDate = dateObject.toLocaleString();
  // console.log(formattedDate);
  useEffect(() => {
    // Determine the status color based on the order status
    switch (order.status) {
      case "pending":
        setStatusColor(" bg-yellow-400");
        break;
      case "shipped":
        setStatusColor(" bg-green-700");
        break;
      case "canceled":
        setStatusColor("bg-black");
        break;
      case "unshipped":
        setStatusColor("bg-red-600");
        break;
      default:
        setStatusColor(" bg-red-600");
    }
  }, []);

  return (
    <div
      className={`grid ${
        order.status === "unshipped" ? "grid-cols-6" : "grid-cols-5"
      } gap-4 h-[120px] border-b border-b-[#E2E7F1] py-2 text-[#5a5a5a] hover:bg-white pt-5 transition duration-75`}
    >
      <span>
        <div>{formattedDate}</div>
      </span>
      <span>
        <Link className="mb-1 text-[#0000FF] font-bold visited:text-[#800080] clicked:text-[#FF0000]">
          {order.po}
        </Link>
        <div>{order.name}</div>
      </span>
      <span>
        <div>
          <img
            className="h-14 w-14 object-cover"
            src="https://images.unsplash.com/photo-1603252110481-7ba873bf42ab?w=100"
            alt=""
          />
        </div>
      </span>
      <span>
        <div>
          <Link to={"/"} className="text-[#fc8d0e] underline">
            {order.title}
          </Link>
          <p className="text-sm font-medium mt-2">Quantity: {order.quantity}</p>
        </div>
      </span>
      <span
        className={`text-white text-sm capitalize h-fit w-fit px-2 rounded-sm ${statusColor}`}
      >
        {order.status}
      </span>
      {order.status === "unshipped" && (
        <span className="text-sm h-fit w-fit bg-black text-white ">
          <button className="px-5 py-2 capitalize cursor-pointer">
            confirm shipment
          </button>
        </span>
      )}
    </div>
  );
};

export default OrderList;
