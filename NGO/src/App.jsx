import NavBar from "./components/NavBar"
import HomePage from "./components/HomePage"
import AboutUs from "./components/AboutUs"
import BlogsNews from "./components/BlogsNews"
import Contact from "./components/Contact"
import Events from "./components/Events"
import Projects from "./components/Projects"
import Volunteer from "./components/Volunteer"
import Footer from "./components/Footer"
import ProjectDetails from "./components/ProjectDetails"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import EventDetails from "./components/EventDetails"


function App() {

  return ( 
    <Router>
        <NavBar />
        <Routes>
            <Route path={"/"} element = {<HomePage />} />
            <Route path={"/about"} element = {<AboutUs />} />
            <Route path={"/contact"} element = {<Contact />} />
            <Route path={"/events"} element = {<Events />} />
            <Route path={"/blog"} element = {<BlogsNews />} />
            <Route path={"/volunteer"} element = {<Volunteer />} />
            <Route path={"/projects"} element = {<Projects />} />
            <Route path={"/project/:id"} element={<ProjectDetails />} />
            <Route path={"/event/:id"} element={<EventDetails />} />
      </Routes>
        <Footer />
    </Router>
   );
}

export default App
