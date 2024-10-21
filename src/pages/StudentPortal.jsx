import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { auth, db } from "./FireBase";
import { toast } from "react-toastify";

const StudentPortal = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await addDoc(collection(db, "appointments"), {
        name,
        email,
        number,
        date,
        message,
      });
      setName("");
      setEmail("");
      setNumber("");
      setDate("");
      setMessage("");

      toast.success("Appointment Booked Successfully", {
        position: "top-center",
      });
    } catch (error) {
      toast.error(error.message, { position: "top-center" });
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    try {
      auth.signOut();
      setTimeout(() => {
        window.location.href = "/";
      }, 2000);
      toast.success("Logged out successfully", { position: "top-center" });
    } catch (error) {
      toast.error(error.message, { position: "top-center" });
    }
  };

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-[#bfbce7] relative">
      <button onClick={handleLogout} className="px-8 py-3 bg-[#19253f] cursor-pointer text-white rounded-xl absolute right-0 top-0 mt-5 mr-5">
        Logout
      </button>
      <div className="w-[65%] h-[75%] rounded-[30px] flex justify-center items-center bg-[#19253f]">
        <div className="h-[80%] w-[80%] flex flex-col gap-5">
          <h1 className="text-[33px] text-white">Book your Appointment</h1>
          <p className="text-white text-[13px]">
            Provide your details and select a time to schedule your appointment{" "}
            <br /> with a teacher
          </p>
          <form onSubmit={handleSubmit}>
            <div className="flex gap-4">
              <input
                type="text"
                className="text-[14px] font-medium w-[370px] h-[40px] rounded-xl bg-[#e2dee4] outline-none border-none px-6 "
                placeholder="Enter your name "
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text"
                className="text-[14px] font-medium w-[370px] h-[40px] rounded-xl bg-[#e2dee4] outline-none border-none px-6 "
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex gap-4">
              <input
                type="number"
                className="text-[14px] font-medium w-[370px] h-[40px] rounded-xl bg-[#e2dee4] outline-none border-none px-6 my-7 "
                placeholder="Enter your phone number "
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
              <input
                type="date"
                className="text-[14px] font-medium w-[370px] h-[40px] rounded-xl bg-[#e2dee4] outline-none border-none px-6 my-7"
                placeholder="Enter your date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <textarea
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              placeholder="Enter your message"
              className="w-[94.5%] h-[100px] text-[14px] font-medium rounded-xl bg-[#e2dee4] outline-none border-none px-6 pt-3 resize-none"
            ></textarea>
            <button
              className="bg-[#586095] w-[94.5%] py-3 mt-5 text-white rounded-xl text-[13px] "
              type="submit"
            >
              {loading ? "Booking..." : "Book Appointment"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StudentPortal;
