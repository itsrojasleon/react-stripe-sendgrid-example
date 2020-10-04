import Title from '../components/title';
import Ticket from '../components/ticket';
import { fetcher } from '../api/fetcher';

const Home = ({ tickets }) => {
  return (
    <div>
      <Title>Ticket List</Title>
      <div className="ui list">
        {tickets.map(({ price, title }) => (
          <Ticket key={title} price={price} title={title} />
        ))}
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const { data } = await fetcher.get('/api/tickets');

  return { props: { tickets: data } };
};

export default Home;
