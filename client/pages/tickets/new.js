import { useState } from 'react';
import Title from '../../components/title';
import { fetcher } from '../../api/fetcher';

const Sell = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');

  const validate = !!title && !!price;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate) {
      return;
    }

    // save ticket
    await fetcher.post('/api/tickets', { title, price });
  };

  return (
    <>
      <Title>Create a ticket</Title>
      <form onSubmit={handleSubmit} className="ui form">
        <div className="field">
          <label>Title</label>
          <input
            type="text"
            placeholder="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="field">
          <label>Price</label>
          <input
            type="text"
            placeholder="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <button
          className={`ui button ${validate ? '' : 'disabled'}`}
          type="submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default Sell;
