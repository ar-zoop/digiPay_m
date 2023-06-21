// import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css'
// import Navbar from './components/Navbar/Navbar';
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import OtpVerification from './pages/OtpVerification/OtpVerification';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import Transaction from './pages/Transaction/Transaction';
import VoucherPage from './pages/VoucherPage/VoucherPage';
import VoucherID from './pages/VoucherID/VoucherID';
import Profile from '././pages/Profile/Profile';
import GenerateQR from './components/GenerateQR';
import Reward from './pages/Rewards/Reward';
import merchant from './pages/Merchant/Merchant';
import Merchant from './pages/Merchant/Merchant';
import Analysis from './pages/Analysis/Analysis'
import Roles from './pages/Roles/Roles';
import Merchant_Dashboard from './pages/Merchant_Dashboard/Merchant_Dashboard';
import Company_Dashboard from './pages/CompanyDashboard/CompanyDashboard';
import GovernmentDashboard from './pages/GovermentDashboard/GovernmentDashboard';

// import OTPModal from './models/otpModel/OTPModal';

function App() {
    // const [count, setCount] = useState(0)

    return (
        <BrowserRouter>
            {/* <Navbar /> */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/otpverification" element={<OtpVerification />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/voucherPage" element={<VoucherPage />} />
                <Route path="/voucherID" element={<VoucherID />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/transaction" element={<Transaction />} />
                <Route path="/generateQR" element={<GenerateQR />} />
                <Route path="/rewards" element={<Reward />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/merchant" element={<Merchant />} />
                <Route path="/analysis" element={<Analysis />} />
                <Route path="/roles" element={<Roles />} />
                <Route path="/merchant-dashboard" element={<Merchant_Dashboard />} />
                <Route path="/company-Dashboard" element={<Company_Dashboard />} />
                <Route path="/government-Dashboard" element={<GovernmentDashboard />} />

                


            </Routes>
        </BrowserRouter>
    )
}

export default App;
