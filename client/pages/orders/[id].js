import StripeCheckout from 'react-stripe-checkout';
import Title from '../../components/title';
import { fetcher } from '../../api/fetcher';

const Order = ({ order }) => {
  return (
    <>
      <Title>Complete your order</Title>
      <h3>
        {order.ticket.title} - ${order.ticket.price.toFixed(2)}
      </h3>
      <StripeCheckout
        token={({ id }) =>
          fetcher.post('/api/payments', {
            orderId: order._id,
            token: id,
          })
        }
        stripeKey="pk_test_8erx4Kna0PkEURXDsmPxRRc0"
        amount={order.ticket.price * 100}
        email="rojasleon.dev@gmail.com"
      />

      {/* <button
        onClick={() => {
          fetcher.post('/api/mails', {
            to: 'rojasleon.dev@gmail.com',
            subject: 'Thank you for your purchase',
            text: `You just bought a ticket ${order.ticket.title} - ${order.ticket.price} and here's the id: ${order._id}`,
          });
        }}>
        Send Email
      </button> */}
    </>
  );
};

export const getStaticPaths = async () => {
  const { data } = await fetcher('/api/orders');

  const paths = data.map((order) => ({
    params: { id: order._id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const { data } = await fetcher.get(`/api/orders/${params.id}`);

  return { props: { order: data } };
};

export default Order;
