import { useState } from "react";
import StudentImg from "../assets/image-4.png";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "./FireBase";

const StudentLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleStudentSignup = () => {
    navigate("/students/signup");
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Student Logged in successfully");
      toast.success("Logged in successfully", { position: "top-center" });
      setTimeout(() => {
        window.location.href = "/students/portal";
      }, 2000);
    } catch (error) {
      console.log(error.message);
      toast.error(error.message, { position: "top-center" });
    }
  };
  return (
    <div className="w-[65%]  h-[70%] rounded-[30px] bg-[#19253f] flex">
      <div className=" w-[40%] h-full relative">
        <img
          src={StudentImg}
          alt=""
          className="w-[90%] h-[28rem] absolute bottom-0 left-10 object-cover"
        />
      </div>
      <div className="w-[60%] h-full flex items-start justify-center flex-col pl-7 mt-7">
        <h1 className="text-[33px] text-white ">Student Login Portal</h1>
        <p className="text-white text-[13px] mt-3">
          Log in to book appointments with your teachers and manage your <br />{" "}
          schedule effortlessly.
        </p>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="text-[14px] font-medium my-7 w-[370px] h-[40px] rounded-xl bg-[#e2dee4] outline-none border-none px-6"
          />
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="text-[14px] font-medium  w-[370px] h-[40px] rounded-xl bg-[#e2dee4] outline-none border-none px-6"
          />

          <div className="flex gap-24 items-center">
            <button
              type="submit"
              className="bg-[#586095] px-14 py-3 text-white rounded-xl text-[13px] mt-5"
            >
              Sign in
            </button>
            <p
              onClick={handleStudentSignup}
              className="text-white text-sm cursor-pointer"
            >
              Create an Account!!
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StudentLogin;
