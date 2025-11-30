import OrderList from "../../components/common/OrderList";


const Pending = ({orders}) => {
  return (
    <div>
      {/* Order List */}
      {orders.map((order) => (
        <OrderList key={order.id} order={order} />
      ))}
    </div>
  );
};
export default Pending;
