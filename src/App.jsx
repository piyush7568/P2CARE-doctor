import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Appointments from "./pages/Appointments";
import Login from "./pages/Login";
// import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route> */}
          <Route path="/" element={<Login />}/>
          <Route path="/doctor" element={<MainLayout />}>
            {/* <Route index element={<Dashboard />} /> */}

            <Route path="appointment" element={<Appointments />} />
            {/* <Route path="/my-patient" element={<MyPatients />} />
            <Route path="/schedule-time" element={<ScheduleTime />} />
            <Route path="/available-time" element={<AvailableTime />} />
            <Route path="/invoice" element={<Invoice />} />
            <Route path="/account" element={<Accounts />} />
            <Route path="/review" element={<Reviews />} />
            <Route path="/profile-setting" element={<ProfileSetting />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/logout" element={<Logout />} /> */}
          </Route>
        </Routes>
        {/* <Toaster /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
