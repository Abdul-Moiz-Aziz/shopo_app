import OrderList from "../../components/common/OrderList";

const Shipped = ({ orders }) => {
  return (
    <div>
      {orders.map((order) => (
        <OrderList key={order.id} order={order} />
      ))}
    </div>
  );
};

export default Shipped;
