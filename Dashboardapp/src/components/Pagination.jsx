import { NavLink } from "react-router-dom";

function Pagination({ prePage, numbers, changePage, nextPage }) {
  return (
    <div>
      <div className="mt-3 mb-12 ">
        <ul className="flex justify-center">
          <li>
            <NavLink to="" onClick={() => prePage()}>
              Prev
            </NavLink>
          </li>
          {numbers.map((number, i) => (
            <li key={i}>
              <NavLink to="" onClick={() => changePage(number)}>
                {number}
              </NavLink>
            </li>
          ))}
          <li>
            <NavLink to="" onClick={() => nextPage()}>
              Next
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Pagination;
