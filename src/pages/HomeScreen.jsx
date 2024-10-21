import bannerImg from "../assets/bannerImg.png";
import studentsImg from "../assets/image-4.png";
import teacherImg from "../assets/image-3.png";
import { useNavigate } from "react-router-dom";

const HomeScreen = () => {

    const navigate=useNavigate()
    
    const handleStudentSignup =() =>{
        navigate("/students/signup")
    }

    const handleTeacherSignup =() =>{
        navigate("/teachers/signup")
    }

  return (
    <div className="w-[65%]  h-[70%] rounded-[30px] bg-[#19253f] flex">
      <div className=" w-[40%] h-full relative">
        <img
          src={bannerImg}
          alt=""
          className="w-[90%] h-[28rem] absolute bottom-0 left-4"
        />
      </div>
      <div className="w-[60%] h-full flex items-start justify-center flex-col pl-7 mt-8">
        <h1 className="text-[33px] text-white ">
          Organize Your Learning with <br /> Easy Booking
        </h1>
        <p className="text-white text-[13px] mt-3">
          Easily schedule appointments with your teachers and manage your <br />
          academic progress with our intuitive booking system. Stay organized{" "}
          <br />
          and make the most of your learning time.
        </p>
        <div className="w-full flex flex-col gap-5 mt-9">
          <p className="text-white text-[18px]">Choose Who you are :</p>
          <div className="flex gap-8">
            <div>
              <div onClick={handleStudentSignup} className="cursor-pointer w-[100px] h-[100px] rounded-full bg-[#859ad7] border-none hover:scale-110 transform transition duration-500 ease-in-out relative overflow-hidden">
                <img
                  src={studentsImg}
                  alt=""
                  className="absolute bottom-0 w-[180px] h-[80px] object-cover"
                />
              </div>
              <p className="text-white text-center mt-2">Student</p>
            </div>
            <div>
              <div onClick={handleTeacherSignup} className="cursor-pointer w-[100px] h-[100px] rounded-full bg-[#859ad7] border-none hover:scale-110 transform transition duration-500 ease-in-out relative overflow-hidden flex items-center justify-center">
                <img
                  src={teacherImg}
                  alt=""
                  className="absolute bottom-0 w-[50px] h-[100px] object-cover "
                />
              </div>
              <p className="text-white text-center mt-2">Teacher</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
