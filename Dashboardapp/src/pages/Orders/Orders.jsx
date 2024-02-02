import Order from "./Order/Order";
function Orders() {
  return (
    <div className="orders-container px-6 w-full   ">
      <div className=" border p-6  border-[#E6EDFF] rounded-xl ">
        <div className="orders-header ">
          <h1 className="font-semibold text-2xl mb-10">Order List</h1>
          <div className="orders-header-list border-b-2 border-[#E6EDFF] flex justify-around pb-4">
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
