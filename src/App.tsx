import MainPage from "./components/mainpage/mainPage";
import CompanyDetails from "./components/company/companyDetails";
import Login from "./components/login/login";
import Registration from "./components/registration/registration";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/main" element={<MainPage />} />
        <Route path="/companydetails/:companyid" element={<CompanyDetails />} />
        <Route path="/" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </div>
  );
}

export default App;
