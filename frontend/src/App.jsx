import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import Home from './pages/Home';
import './App.css';
import Header from './components/Header';
import Profile from './pages/Profile';
import Ride from './pages/Ride';
import Pricing from './pages/Pricing';
import Footer from './components/Footer';
import SignIn from './pages/auth/SignIn';
import Signup from './pages/auth/Signup';
import ForgotPassword from './pages/auth/ForgotPassword';
import Rentals from './pages/Rentals';
import Help from './pages/Help';
import About from './pages/About';
import RideSelection from './pages/RideSelection';
import Auth from './ProtectedRoute/Auth';
import AdminDashboard from './pages/admin/AdminDashboard';
import FoundNot from './pages/FountNot';

function App() {
  const location = useLocation();
  const noHeaderFooterRoutes = [
    '/sign-in',
    '/sign-up',
    '/reset-password',
    '/admin',
  ];

  return (
    <>
      {/* Conditionally render Header and Footer based on the current route */}
      {!noHeaderFooterRoutes.includes(location.pathname) && <Header />}

      <Routes>
        <Route path="/" element={<Home />} />

        <Route element={<Auth />}>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/reset-password" element={<ForgotPassword />} />
        </Route>

        <Route path="/profile" element={<Profile />} />
        <Route path="/rent" element={<Rentals />} />
        <Route path="/ride" element={<Ride />} />
        <Route path="/help" element={<Help />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<About />} />
        <Route path="/rideSelection" element={<RideSelection />} />

        <Route path="/admin" element={<AdminDashboard />} />

        <Route path="*" element={<FoundNot />} />
      </Routes>

      {!noHeaderFooterRoutes.includes(location.pathname) && <Footer />}
    </>
  );
}

function AppWithRouter() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWithRouter;
