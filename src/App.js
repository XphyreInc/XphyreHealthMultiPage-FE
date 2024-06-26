import { Route, Routes, useLocation } from 'react-router-dom';
import Layout from './Layout';
import Home from './Pages/Home';
import About from './Pages/About';
import CredentialingAndContractingServices from './Pages/CredentialingAndContractingServices';
import Appointments from './Pages/Appointments';
import Departments from './Pages/Departments';
import DepartmentDetails from './Pages/DepartmentDetails';
import PricingPlan from './Pages/PricingPlan';
import Gallery from './Pages/Gallery';
import Timetable from './Pages/Timetable';
import Contact from './Pages/Contact';
import { useEffect } from 'react';
import ErrorPage from './Pages/ErrorPage';

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="C&C" element={<CredentialingAndContractingServices />} />
        <Route path="appointments" element={<Appointments />} />
        <Route path="departments" element={<Departments />} />
        <Route
          path="departments/:departmentId"
          element={<DepartmentDetails />}
        />
        <Route path="pricing-plan" element={<PricingPlan />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="timetable" element={<Timetable />} />
        <Route path="contact" element={<Contact />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
