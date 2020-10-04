import Link from 'next/link';
import Title from '../../components/title';
import Table from '../../components/table';
import { fetcher } from '../../api/fetcher';

const Orders = ({ orders }) => {
  return (
    <>
      <Title>Orders</Title>
      <Table titles={['title', 'price', 'status']}>
        {orders.map((order) => (
          <tr key={order._id}>
            <td>{order.ticket.title}</td>
            <td>${order.ticket.price.toFixed(2)}</td>
            <td>
              {order.completed ? (
                'completed'
              ) : (
                <Link href="/orders/[id]" as={`/orders/${order._id}`}>
                  <a style={{ color: 'black' }}>
                    <i className="credit card icon"></i>
                  </a>
                </Link>
              )}
            </td>
          </tr>
        ))}
      </Table>
    </>
  );
};

export const getStaticProps = async () => {
  const { data } = await fetcher.get('/api/orders');

  return { props: { orders: data } };
};

export default Orders;
