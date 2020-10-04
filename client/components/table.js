const Table = ({ titles, children }) => {
  return (
    <table className="ui celled table">
      <thead>
        <tr>
          {titles.map((title) => (
            <th key={title}>{title}</th>
          ))}
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
};

export default Table;
