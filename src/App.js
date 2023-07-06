import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Components/Home";
import { NavigationBar } from "./Components/NavigationBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import { CCNA } from "./Components/CCNA";
import { SoftWareTesting } from "./Components/SoftwareTesting";
import { SignUp } from "./Components/SignUp";
import { SignIn } from "./Components/SignIn";
import { Jobs } from "./Components/Jobs";
// import { Payment } from "./Components/PayOnline";
import { NXCAD } from "./Components/NXCAD";
import { AutocadCivil } from "./Components/AutocadCivil";
import { AutoCADElectrical } from "./Components/AutoCADElectrical";
import { AutoCADMechanical } from "./Components/AutoCADMechanical";
import { Catia } from "./Components/CATIA";
import { ETabs } from "./Components/ETABS";
import { StudentPortal } from "./Components/StudentPortal";
import { ViewCourses } from "./Components/ViewCourses";
import { AboutUs } from './Components/AboutUs';
import { Beinstructor } from "./Components/Beinstructor";
import { Footer } from "./Components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavigationBar></NavigationBar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about-us" element={<AboutUs></AboutUs>}></Route>
          <Route path="/it-ccna" element={<CCNA></CCNA>}></Route>
          <Route path="/it-testing" element={<SoftWareTesting></SoftWareTesting>}></Route>
          {/* <Route path="/placement" element={<Placement></Placement>}></Route> */}
          <Route path="/jobs" element={<Jobs></Jobs>}></Route>
          <Route path="/signup" element={<SignUp></SignUp>}></Route>
          <Route path="/sign-in" element={<SignIn></SignIn>}></Route>
          {/* <Route path="/payonline" element={<Payment></Payment>}></Route> */}
          <Route path="/electrical-nxcad" element={<NXCAD></NXCAD>}></Route>
          <Route path="civil-autocad" element={<AutocadCivil></AutocadCivil>}></Route>
          <Route path="/electrical-autocad" element={<AutoCADElectrical></AutoCADElectrical>}></Route>
          <Route path="/mech-autocad" element={<AutoCADMechanical></AutoCADMechanical>}></Route>
          <Route path="/mech-catia" element={<Catia></Catia>}></Route>
          <Route path="/civil-etabs" element={<ETabs></ETabs>}></Route>
          <Route path="/student-portal" element={<StudentPortal></StudentPortal>}></Route>
          <Route path="/view-courses" element={<ViewCourses></ViewCourses>}></Route>
          <Route path="/instructor" element={<Beinstructor></Beinstructor>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
      
    </>
  );
}

export default App;
