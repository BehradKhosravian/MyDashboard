import { NavLink } from "react-router-dom";

function Pagination({ prePage, numbers, changePage, nextPage }) {
  return (
    <div className="mt-4">
      <div className="mt-3 mb-12  flex justify-center ">
        <ul className="flex justify-center space-x-3 text-xs md:text-lg md:space-x-8">
          <li>
            <NavLink
              className="border p-2 rounded-md transition-colors duration-100 hover:bg-slate-100"
              to=""
              onClick={() => prePage()}
            >
              Prev
            </NavLink>
          </li>
          {numbers.map((number, i) => (
            <li key={i}>
              <NavLink
                className="border rounded-md transition-colors duration-100 hover:bg-slate-100"
                to=""
                onClick={() => changePage(number)}
              >
                {number}
              </NavLink>
            </li>
          ))}
          <li>
            <NavLink
              className="border p-2 rounded-md transition-colors duration-100 hover:bg-slate-100"
              to=""
              onClick={() => nextPage()}
            >
              Next
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Pagination;
