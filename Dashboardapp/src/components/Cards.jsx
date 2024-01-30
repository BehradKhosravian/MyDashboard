import Card from "./Card";
function Cards() {
  return (
    <>
      <div className=" px-6 h-32">
        <div className="px-5 py-4 border  border-[#E6EDFF] rounded-xl h-full flex space-x-10">
          <Card
            number={89935}
            title={"users"}
            amount={10.2}
            percentage={+1.01}
          ></Card>
          <Card
            number={23283.5}
            title={"products"}
            amount={3.1}
            percentage={+1.01}
          ></Card>
          <Card
            number={46827}
            title={"checked"}
            amount={2.56}
            percentage={-1.01}
          ></Card>
          <Card
            number={124854}
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
