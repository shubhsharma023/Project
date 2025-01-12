import { BrowserRouter, Routes, Route } from "react-router-dom"
import { SideBar } from "./components/SideBar"
import { Button } from "./components/ui/button"
import Home from "./pages/Home"
import FeedBack from "./pages/FeedBack"
import NavBar from "./components/NavBar"
import TeamPage from "./pages/TeamPage"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import Loader from "./components/Loader/Loader"
import ScrollToTop from "./components/ScrollToTop"


function App() {

  return (
    <BrowserRouter>
    <ScrollToTop />
      <div className="">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/feedbacks" element={<FeedBack />} />
          <Route path="/team" element={<TeamPage />} />
          {/* <SideBar /> */}
        </Routes>
      </div>
      <ToastContainer />
    </BrowserRouter>
  )
}

export default App
