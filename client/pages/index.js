import Link from 'next/link';
import Title from '../components/title';
import Table from '../components/table';
import { fetcher } from '../api/fetcher';

const Home = ({ tickets }) => {
  return (
    <div>
      <Title>Ticket List</Title>
      <Table titles={['title', 'price', 'visit']}>
        {tickets.map(({ price, title, _id }) => (
          <tr key={title}>
            <td>{title}</td>
            <td>${price.toFixed(2)}</td>
            <td>
              <Link href="/tickets/[id]" as={`/tickets/${_id}`}>
                <a style={{ color: 'black' }}>
                  <i className="eye icon"></i>
                </a>
              </Link>
            </td>
          </tr>
        ))}
      </Table>
    </div>
  );
};

export const getStaticProps = async () => {
  const { data } = await fetcher.get('/api/tickets');

  return { props: { tickets: data } };
};

export default Home;
