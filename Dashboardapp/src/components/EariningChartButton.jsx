function EarningChartButton() {
  return (
    <div className="absolute top-12 right-3 bg-[#f3f4f6] shadow-2xl w-1/3 h-28 mt-3 p-2 z-10">
      <ul className="w-full">
        <button className=" w-full border-b-2 text-[#7C8DB5] transition ease-in-out delay-75 hover:text-black ">
          <li>Sample1</li>
        </button>
        <button className=" w-full border-b-2 text-[#7C8DB5] transition ease-in-out delay-75 hover:text-black ">
          <li>Sample2</li>
        </button>
        <button className=" w-full border-b-2 text-[#7C8DB5] transition ease-in-out delay-75 hover:text-black ">
          <li>Sample3</li>
        </button>
        <button className=" w-full text-[#7C8DB5] transition ease-in-out delay-75 hover:text-black ">
          <li>Sample4</li>
        </button>
      </ul>
    </div>
  );
}

export default EarningChartButton;
