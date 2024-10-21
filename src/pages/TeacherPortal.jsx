import { useEffect, useState } from "react";
import { auth, db } from "./FireBase";
import { toast } from "react-toastify";
import { collection, getDocs } from "firebase/firestore";

const TeacherPortal = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "appointments"));
        const appointmentsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setAppointments(appointmentsData);
      } catch (error) {
        toast.error(error.message, { position: "top-center" });
      } finally {
        setLoading(false);
      }
    };
    fetchAppointments();
  }, []);

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
    <div className="w-full h-screen flex flex-col items-center justify-center bg-[#54b398] relative ">
      <button
        onClick={handleLogout}
        className="bg-[#247159] px-14 py-3 text-white rounded-xl text-[13px] absolute right-0 top-0 mt-5 mr-5"
      >
        Logout
      </button>
      <h1 className="text-[33px] text-white mb-6 ">Manage your Appointment</h1>
      {loading ? (
        <p className="text-white">Loading Appointments...</p>
      ) : appointments.length > 0 ? (
        <div className="overflow-x-auto w-[80%] ">
          <table className="min-w-full bg-white border-[#000] border-2 ">
            <thead>
              <tr className="border-[#000] border-2">
                <th className="px-4 py-2 border-[#000] border-2 bg-[#1e5142] text-white font-medium ">
                  Name
                </th>
                <th className="px-4 py-2 border-[#000] border-2 bg-[#1e5142] text-white font-medium ">
                  Email
                </th>
                <th className="px-4 py-2 border-[#000] border-2 bg-[#1e5142] text-white font-medium ">
                  Number
                </th>
                <th className="px-4 py-2 border-[#000] border-2 bg-[#1e5142] text-white font-medium ">
                  Date
                </th>
                <th className="px-4 py-2 border-[#000] border-2 bg-[#1e5142] text-white font-medium ">
                  Message
                </th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appointment) => (
                <tr className="border-black border-2 " key={appointment.id}>
                  <td className="px-4 py-2 border-black border-2 text-center ">
                    {appointment.name}
                  </td>
                  <td className="px-4 py-2 border-black border-2 text-center ">
                    {appointment.email}
                  </td>
                  <td className="px-4 py-2 border-black border-2 text-center ">
                    {appointment.number}
                  </td>
                  <td className="px-4 py-2 border-black border-2 text-center ">
                    {appointment.date}
                  </td>
                  <td className="px-4 py-2 border-black border-2 text-center ">
                    {appointment.message}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-white ">No Appointments found</p>
      )}
    </div>
  );
};

export default TeacherPortal;
