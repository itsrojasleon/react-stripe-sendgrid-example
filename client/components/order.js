import Link from 'next/link';

const Order = ({ _id, ticket, idx }) => {
  return (
    <div className="item">
      <div>
        #{idx} - {ticket.title} - {ticket.price}
      </div>
      <Link href="/orders/[id]" as={`/orders/${_id}`}>
        <a>Buy</a>
      </Link>
    </div>
  );
};

export default Order;
