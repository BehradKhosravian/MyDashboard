import Card from "./Card";
function Cards() {
  return (
    <>
      <div className=" px-6 h-fit">
        <div className="px-5 py-4 md:border md:flex md:border-[#E6EDFF] rounded-xl h-full  ">
          <Card
            number={"89,935"}
            title={"users"}
            amount={10.2}
            percentage={+1.01}
          ></Card>
          <Card
            number={"23,283.5"}
            title={"products"}
            amount={3.1}
            percentage={+1.01}
          ></Card>
          <Card
            number={"46,827"}
            title={"checked"}
            amount={2.56}
            percentage={-1.01}
          ></Card>
          <Card
            number={"124,854"}
            title={"Refunded"}
            amount={7.2}
            percentage={+1.01}
          ></Card>
        </div>
      </div>
    </>
  );
}

export default Cards;
