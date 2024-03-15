import ContactusLogo from "../../assets/icon/ContactusLogo.svg";
import PhoneIcon from "../../assets/icon/phoneIcon.svg";
import emailIconContact from "../../assets/icon/emailIconContact.svg";
import locationIcon from "../../assets/icon/locationIcon.svg";
import ContactForm from "./ContactForm";
function Contactus() {
  return (
    <div className=" px-6 mb-20">
      <div className="border rounded-xl border-[#E6EDFF] md:flex ">
        <div className=" flex flex-col items-center w-2/3 border-r-2 border-[#E6EDFF] rounded-3xl contactus-Logo-container p-6 leftSide">
          <img className="size-80" src={ContactusLogo} alt="" />
          <div className="flex flex-col justify-center content-center">
            <div>
              <p className="">
                <img className="inline px-3 size-14 " src={PhoneIcon} alt="" />
                +1 254 8547 956
              </p>
            </div>
            <div>
              <p>
                <img
                  className="inline px-3 size-14"
                  src={emailIconContact}
                  alt=""
                />
                abcdabvd@bebebe.ir
              </p>
            </div>
            <div>
              <p>
                <img
                  className="inline px-3 size-14"
                  src={locationIcon}
                  alt=""
                />
                1111 streetJon Dr.down,Square
              </p>
            </div>
          </div>
        </div>
        <div className=" w-full   rightSide">
          <div className="ml-10 mt-10">
            <div className="">
              <h1
                className="
          text-[#0000FF] text-5xl font-semibold tracking-wide "
              >
                Get in Touch
              </h1>
              <p className="pt-4 font-semibold">
                Any question or remarks? Let us know!
              </p>
            </div>
            <ContactForm />
            <div className="flex justify-center py-5">
              <button className=" bg-[#3E3BEE] text-white py-2 rounded-2xl w-32 text-xl">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contactus;
