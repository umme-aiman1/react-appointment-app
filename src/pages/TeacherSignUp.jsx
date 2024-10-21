import { useState } from "react";
import TeacherImg from "../assets/ladyTeacher.png";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./FireBase";
import { toast } from "react-toastify";

const TeacherSignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleTeacherLogin = () => {
    navigate("/teachers/login");
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      console.log(user);
      console.log("User is Registered Successfully");
      toast.success("User Registered successfully", { position: "top-center" });
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
      <div className="w-[65%]  h-[70%] rounded-[30px] bg-[#29ab87] flex">
        <div className=" w-[40%] h-full relative">
          <img
            src={TeacherImg}
            alt=""
            className="w-[80%] h-[28rem] absolute bottom-0 left-6"
          />
        </div>
        <div className="w-[60%] h-full flex items-start justify-center flex-col pl-7 mt-7">
          <h1 className="text-[33px] text-white ">Teacher Signup Portal</h1>
          <p className="text-white text-[13px] mt-3">
            Create a secure teacher account to manage and view student <br />{" "}
            appointments efficiently.
          </p>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="text-[14px] font-medium my-7 w-[370px] h-[40px] rounded-xl bg-[#e2dee4] outline-none border-none px-6"
          />
          <form onSubmit={handleRegister}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="text-[14px] font-medium mb-7 w-[370px] h-[40px] rounded-xl bg-[#e2dee4] outline-none border-none px-6"
            />
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="text-[14px] font-medium  w-[370px] h-[40px] rounded-xl bg-[#e2dee4] outline-none border-none px-6"
            />

            <div className="flex gap-14 items-center">
              <button
                type="submit"
                className="bg-[#247159] px-14 py-3 text-white rounded-xl text-[13px] mt-5"
              >
                Sign Up
              </button>
              <p
                onClick={handleTeacherLogin}
                className="text-white text-sm cursor-pointer"
              >
                Already have an Account?
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TeacherSignUp;
