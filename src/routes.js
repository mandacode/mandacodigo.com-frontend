import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/Register';
import Home from './pages/Home';
import Navbar from './navbar'

const AppRoutes = () => {
//   const { isAuthenticated } = useAuth(); // Custom hook to check if user is authenticated

  return (
    <Router>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<SignUp />} />
        </Routes>
    </Router>
  );
};

export default AppRoutes;
