import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CoursesPage from "./pages/CoursesPage";
import ContactPage from "./pages/ContactPage";
import "./styles/Pages.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import AdmissionsPage from "./pages/AdmissionsPage";
import ChatbotComponent from "./components/Chatbot/ChatbotComponent";

function App () {
  return(
    <div>
      <div className="main-layout">
        <Header/>
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/admissions" element={<AdmissionsPage />} />
          </Routes>
          <ChatbotComponent/>
        </div>
        <Footer/>
      </div>
    </div>
  );
}
export default App;