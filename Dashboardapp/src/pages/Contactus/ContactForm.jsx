import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ContactForm() {
  const [name, setName] = useState();
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    if (!name) return;
    navigate("/order");
    setName("");
  }
  return (
    <form className="mt-14" onSubmit={handleSubmit}>
      <input
        className="pl-8  py-3 w-3/6 outline	outline-1 outline-black rounded-xl block"
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="pl-8  py-3 my-12 outline outline-1 outline-black w-3/6 rounded-xl block
          "
        type="text"
        placeholder="Enter your email"
      />
      <textarea
        className="px-8 py-3 outline outline-1 outline-black rounded-xl w-5/6 h-2/6 resize-none"
        name=""
        id=""
        cols="30"
        rows="5"
        placeholder="Type your message here"
      ></textarea>
    </form>
  );
}

export default ContactForm;
