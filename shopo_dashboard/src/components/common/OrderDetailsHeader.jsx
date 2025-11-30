const OrderDetailsHeader = ({ status }) => {
  return (
    <div
      className={`grid ${
        status === "unshipped" ? "grid-cols-6" : "grid-cols-5"
      } gap-4 bg-gray-200 font-semibold text-[#222222] border-y border-y-[#E2E7F1] py-5`}
    >
      <div className="font-bold capitalize">order date</div>
      <div className="font-bold capitalize">order details</div>
      <div className="font-bold capitalize">image</div>
      <div className="font-bold capitalize">product details</div>
      <div className="font-bold capitalize">shipping status</div>
      {status === "unshipped" && (
        <div className="font-bold capitalize">confirm shipment</div>
      )}
    </div>
  );
};
export default OrderDetailsHeader;
