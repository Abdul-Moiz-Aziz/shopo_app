import OrderList from "../../components/common/OrderList";


const Unshipped = ({orders}) => {
  return (
    <div>
      {/* Order List */}
      {orders.map((order) => (
        <OrderList key={order.id} order={order} />
      ))}
    </div>
  );
};

export default Unshipped;
