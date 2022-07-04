import MainPage from "./components/mainpage/mainPage";
import CompanyDetails from "./components/company/companyDetails";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/companydetails/:companyid" element={<CompanyDetails />} />
      </Routes>
    </div>
  );
}

export default App;
