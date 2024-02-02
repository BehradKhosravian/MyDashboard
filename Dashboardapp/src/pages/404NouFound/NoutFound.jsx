import sadFace from "../../assets/icon/sad-face.svg";

function NoutFound() {
  return (
    <div className=" flex flex-col justify-center h-1/2 items-center">
      <img src={sadFace} alt="Sad Face For 404" />
      <h1 className="text-9xl">404 Not Found</h1>
    </div>
  );
}

export default NoutFound;
