import OrderList from "../../components/common/OrderList";



const Canceled = ({orders}) => {
  return (
    <div>
      {/* Order List */}
      {orders.map((order) => (
        <OrderList key={order.id} order={order} />
      ))}
    </div>
  );
};
export default Canceled;
