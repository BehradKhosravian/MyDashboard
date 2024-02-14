import { NavLink } from "react-router-dom";

function Pagination({ prePage, numbers, changePage, nextPage }) {
  return (
    <div className="mt-4">
      <div className="mt-3 mb-12  flex justify-center">
        <ul className="flex justify-center space-x-4 text-xs md:text-lg md:space-x-10">
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
