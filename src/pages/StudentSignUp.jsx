import { useState } from "react";
import StudentImg2 from "../assets/image-2.png";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./FireBase";
import { toast } from "react-toastify";

const StudentSignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleStudentLogin = () => {
    navigate("/students/login");
  };

  const handleRegister = async (e) => {
    e.preventDefault()
    try {
        await createUserWithEmailAndPassword(auth,email,password)
        const user = auth.currentUser;
        console.log(user)
        console.log("User is Registered Successfully")
        toast.success("User Registered successfully",{position:"top-center"})
        setTimeout(()=>{
           window.location.href="/students/portal"
        },2000)
    } catch (error) {
        console.log(error.message)
        toast.error(error.message,{position:"top-center"})
    }
  };

  return (
    <div className="w-[65%]  h-[70%] rounded-[30px] bg-[#19253f] flex">
      <div className=" w-[40%] h-full relative">
        <img
          src={StudentImg2}
          alt=""
          className="w-[95%] h-[28rem] absolute bottom-0 left-4"
        />
      </div>
      <div className="w-[60%] h-full flex items-start justify-center flex-col pl-7 mt-7">
        <h1 className="text-[33px] text-white ">Student Signup Portal</h1>
        <p className="text-white text-[13px] mt-3">
          Create an account to start booking appointments and stay <br />{" "}
          connected with your teachers
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
              className="bg-[#586095] px-14 py-3 text-white rounded-xl text-[13px] mt-5"
            >
              Sign Up
            </button>
            <p
              onClick={handleStudentLogin}
              className="text-white text-sm cursor-pointer"
            >
              Already have an Account?
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StudentSignUp;
