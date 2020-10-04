const Ticket = ({ price, title }) => {
  return (
    <div className="item">
      {title} - {price}
    </div>
  );
};

export default Ticket;
