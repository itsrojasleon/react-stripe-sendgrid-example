import Link from 'next/link';

const Header = () => {
  const links = [
    { href: '/tickets/new', label: 'Sell Tickets' },
    { href: '/orders', label: 'My Orders' },
  ].map(({ href, label }) => (
    <Link href={href} key={label}>
      <a className="item">{label}</a>
    </Link>
  ));

  return (
    <div style={{ marginTop: '10px' }} className="ui menu">
      <div className="header item">
        <Link href="/">
          <a style={{ color: 'black' }}>Tickets</a>
        </Link>
      </div>
      <div className="right menu">{links}</div>
    </div>
  );
};

export default Header;
