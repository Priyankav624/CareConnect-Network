import React, { useState } from 'react';
import NavBar from "./components/HomePages/NavBar.jsx"
import HomePage from "./components/MainPage"
import AboutUs from "./components/AboutUS/AboutUs"
import Contact from "./components/UsersPage/Contact"
import Events from "./components/EventPages/Events.jsx"
import Projects from "./components/ProjectPages/Projects.jsx"
import Volunteer from "./components/VolunteerPages/Volunteer.jsx"
import Footer from "./components/HomePages/Footer.jsx"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter as Router, Routes, Navigate, useLocation } from "react-router-dom"
import EventDetails from "./components/EventPages/EventDetails.jsx"
import ScrollToTop from "./components/HomePages/ScrollToTop.jsx"
import Login from "./components/Auth/Login.jsx"
import Signup from "./components/Auth/Signup.jsx"
import RegisteredEvents from './components/EventPages/RegisteredEvents.jsx';
import { ToastProvider } from './context/ToastContext';
import Wishlist from './components/EventPages/Wishlist.jsx';
import UserDashboard from "./components/UsersPage/UserDashboard.jsx";


export const AuthContext = React.createContext();

const RequireAuth = ({ children }) => {
  const { user } = React.useContext(AuthContext);
  const location = useLocation();
  return user ? children : <Navigate to="/login" state={{ from: location }} replace />;
};

function App() {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

  const login = userObj => {
    localStorage.setItem('user', JSON.stringify(userObj));
    setUser(userObj);
  };
  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };


  return ( 
    <AuthContext.Provider value={{ user, login, logout }}>
      <ToastProvider >
    <Router>
        <NavBar />
        <ScrollToTop />
        <Routes>
            <Route path={"/"} element = {<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={ <RequireAuth><UserDashboard /> </RequireAuth>} />
            <Route path={"/about"} element = {<AboutUs />} />
            <Route path={"/contact"} element = {<Contact />} />
            <Route path={"/events"} element = {<Events />} />
            <Route path={"/event/:id"} element={<EventDetails />} />
            <Route path="/registered" element={<RegisteredEvents />} />
            <Route path={"/wishlist"} element = {<Wishlist />} />
            <Route path={"/volunteer"} element = {<Volunteer />} />
            <Route path={"/projects"} element = {<Projects />} />
      </Routes>
        <Footer />
    </Router>
    </ToastProvider>
    </AuthContext.Provider>
   );
}

export default App
