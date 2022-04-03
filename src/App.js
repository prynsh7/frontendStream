import Sidebar from './components/Admin/Dashboard/Sidebar';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Dashboard from './components/Admin/Dashboard/Dashboard';
import Users from './components/Admin/ManageUsers/Users';
import Pricing from './components/Admin/PricingPlans/Pricing';
import Coupons from './components/Admin/Coupons/Coupons';
import Notification from './components/Admin/Notification/Notification';
// import Auth from './components/User/Signup/Auth';
import Home from './Pages/Home';
import Auth from './Pages/Auth';
import Signin from './Pages/SignIn';




function App() {
  return (

    <div className="App">

      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/manage-users" element={<Users />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/coupons" element={<Coupons />} />
        <Route path="/notifications" element={<Notification />} />
        <Route path="/signup" element={<Auth />} />
        <Route path="/signin" element={<Signin />} />

        <Route path="/" element={<Home />} />



      </Routes>


    </div>
  );
}

export default App;
