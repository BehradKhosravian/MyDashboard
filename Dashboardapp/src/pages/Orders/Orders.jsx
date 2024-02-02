import Order from "./Order/Order";
function Orders() {
  return (
    <div className="orders-container px-6 w-full   ">
      <div className=" border p-6  border-[#E6EDFF] rounded-xl ">
        <div className="orders-header border-b-2 border-[#E6EDFF]">
          <h1 className="font-semibold text-lg mb-10">Order List</h1>
          <div className="orders-header-list flex justify-around mb-3">
            <h1>No</h1>
            <h1>ID</h1>
            <h1>Date</h1>
            <h1>Customer Name</h1>
            <h1>Location</h1>
            <h1>Amount</h1>
            <h1>Status Order</h1>
            <h1>Action</h1>
          </div>
          <Order />
        </div>
      </div>
    </div>
  );
}

export default Orders;
