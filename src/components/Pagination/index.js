import "./style.css";

const Pagination = ({ todosPerPage, totalTodos, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i < Math.ceil(totalTodos / todosPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li onClick={() => paginate(number)} className="page__item" key={number}>
            <a className="page__link" >{number}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
