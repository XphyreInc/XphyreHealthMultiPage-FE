import { Route, Routes, useLocation } from 'react-router-dom';
import Layout from './Layout';
import Home from './Pages/Home';
import About from './Pages/About';
import CredentialingAndContractingServices from './Pages/CredentialingAndContractingServices';
import InsuranceEligibilityVerificationServices from './Pages/InsuranceEligibilityVerificationServices';
import ChartAuditing from './Pages/ChartAuditing';
import MedicalAccountsReceivableServices from './Pages/MedicalAccountsReceivableServices';
import MedicalBillingAndCodingServices from './Pages/MedicalBillingAndCodingServices';
import MedicalITEquipmentAndServices from './Pages/MedicalITEquipmentAndServices';
import OutOfNetworkingNegotiationServices from './Pages/OutOfNetworkingNegotiationServices';
import PatientBillingServices from './Pages/PatientBillingServices';
import PriorAndRetroAuthorizationServices from './Pages/PriorAndRetroAuthorizationServices';
import Appointments from './Pages/Appointments';
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
        <Route path="IEVS" element={<InsuranceEligibilityVerificationServices />} />
        <Route path="CA" element={<ChartAuditing />} />
        <Route path="MARS" element={<MedicalAccountsReceivableServices />} />
        <Route path="MB&CS" element={<MedicalBillingAndCodingServices />} />
        <Route path="MIEAS" element={<MedicalITEquipmentAndServices />} />
        <Route path="OONNS" element={<OutOfNetworkingNegotiationServices />} />
        <Route path="PBS" element={<PatientBillingServices />} />
        <Route path="PARAS" element={<PriorAndRetroAuthorizationServices />} />
        <Route path="appointments" element={<Appointments />} />
        <Route path="contact" element={<Contact />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
