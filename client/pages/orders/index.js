import Title from '../../components/title';
import { fetcher } from '../../api/fetcher';
import Order from '../../components/order';

const Orders = ({ orders }) => {
  return (
    <>
      <Title>Orders</Title>
      {orders.map((order, idx) => (
        <Order key={order._id} {...order} idx={idx + 1} />
      ))}
    </>
  );
};

export const getStaticProps = async () => {
  const { data } = await fetcher.get('/api/orders');

  return { props: { orders: data } };
};

export default Orders;
