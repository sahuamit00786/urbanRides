import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';
import Header from './components/Header';
import Profile from './pages/Profile';
import Ride from './pages/Ride';
import Pricing from './pages/Pricing';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/ride" element={<Ride />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
