import Sidebar from './Admin/Dashboard/Sidebar';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Dashboard from './Admin/Dashboard/Dashboard';
import Users from './Admin/ManageUsers/Users';
import Pricing from './Admin/PricingPlans/Pricing';
import Coupons from './Admin/Coupons/Coupons';
import Notification from './Admin/Notification/Notification';

function App() {
  return (

    <div className="App">

      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/manage-users" element={<Users />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/coupons" element={<Coupons />} />
        <Route path="/notifications" element={<Notification />} />


      </Routes>


    </div>
  );
}

export default App;
