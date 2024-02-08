// import Order from "./Order/Order";
// import tableIcon from "../../assets/icon/tabelIcon.svg";
// import Order from "./Order/Order";
// import Pagination from "@mui/material/Pagination";

import { useState } from "react";
import Order from "./Order/Order";
import { orderList } from "../../Data";
// import Pagination from "../../components/Pagination";
import { NavLink } from "react-router-dom";

// border-[#E6EDFF]
function Orders() {


  return (
    <>
      <table className="w-full text-sm lg:text-lg mx-8">
        <thead>
          <tr className="border-b-2 border-[#E6EDFF]">
            <th className="px-3 py-2">No</th>
            <th className="px-3 py-2">ID</th>
            <th className="px-3 py-2">Date</th>
            <th className="px-3 py-2">Customer Name</th>
            <th className="px-3 py-2">Location</th>
            <th className="px-3 py-2">Amount</th>
            <th className="px-3 py-2">Status Order</th>
            <th className="px-3 py-2">Action</th>
          </tr>
        </thead>
        <Order />
      </table>

    </>
  );
}

export default Orders;
