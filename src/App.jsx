import HomeScreen from "./pages/HomeScreen"
import { Route, Routes } from "react-router-dom"
import StudentSignUp from "./pages/StudentSignUp"
import TeacherSignUp from "./pages/TeacherSignUp"
import StudentLogin from "./pages/StudentLogin"
import TeacherLogin from "./pages/TeacherLogin"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import StudentPortal from "./pages/StudentPortal"
import TeacherPortal from "./pages/TeacherPortal"

const App = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-[#bfbce7]">
    <Routes>
      <Route path="/" element={<HomeScreen/>}/>
      <Route path="/students/signup" element={<StudentSignUp/>}/>
      <Route path="/teachers/signup" element={<TeacherSignUp/>}/>
      <Route path="/students/login" element={<StudentLogin/>}/>
      <Route path="/teachers/login" element={<TeacherLogin/>}/>
      <Route path="/students/portal" element={<StudentPortal/>}/>
      <Route path="/teachers/portal" element={<TeacherPortal/>}/>
    </Routes>
    <ToastContainer/>
    </div>
  )
}

export default App
