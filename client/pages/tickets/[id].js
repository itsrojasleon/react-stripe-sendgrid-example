import Title from '../../components/title';
import { fetcher } from '../../api/fetcher';

const Ticket = ({ ticket }) => {
  const order = async () => {
    await fetcher.post('/api/orders', { ticketId: ticket._id });
  };

  return (
    <>
      <Title>
        {ticket.title} - {ticket.price}
      </Title>
      <div className="ui vertical animated button" tabIndex="0" onClick={order}>
        <div className="hidden content">Shop</div>
        <div className="visible content">
          <i className="shop icon"></i>
        </div>
      </div>
    </>
  );
};

export const getStaticPaths = async () => {
  const { data } = await fetcher('/api/tickets');

  const paths = data.map((ticket) => ({
    params: { id: ticket._id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const { data } = await fetcher.get(`/api/tickets/${params.id}`);

  return { props: { ticket: data } };
};

export default Ticket;
