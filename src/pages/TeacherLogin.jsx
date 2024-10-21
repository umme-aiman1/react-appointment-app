import { useState } from "react";
import TeacherMale from "../assets/teacher-2-Photoroom.png";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "./FireBase";

const TeacherLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleTeacherSignup = () => {
    navigate("/teachers/signup");
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Student Logged in successfully");
      toast.success("Logged in successfully", { position: "top-center" });
      setTimeout(() => {
        window.location.href = "/teachers/portal";
      }, 2000);
    } catch (error) {
      console.log(error.message);
      toast.error(error.message, { position: "top-center" });
    }
  };
  return (
    <div className="w-full h-full flex justify-center items-center bg-[#a3d9ca]">
      <div className="w-[65%]  h-[70%] rounded-[30px] bg-[#29ad87] flex">
        <div className=" w-[40%] h-full relative">
          <img
            src={TeacherMale}
            alt=""
            className="w-[90%] h-[28rem] absolute bottom-0 left-4 "
          />
        </div>
        <div className="w-[60%] h-full flex items-start justify-center flex-col pl-7 mt-7">
          <h1 className="text-[33px] text-white ">Teacher Login Portal</h1>
          <p className="text-white text-[13px] mt-3">
            Sign in to your teacher account to easily manage student <br />{" "}
            appointments and stay organized.
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
                className="bg-[#247159] px-14 py-3 text-white rounded-xl text-[13px] mt-5"
              >
                Sign in
              </button>
              <p
                onClick={handleTeacherSignup}
                className="text-white text-sm cursor-pointer"
              >
                Create an Account!!
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TeacherLogin;
