import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./components/Body";
import About from "./components/About";
import Navbar from "./components/NavBar";
import Contact from "./components/Contact";
import Login from "./components/Login"
import Feed from "./components/Feed";

function App() {
  return (
    <div>
      <BrowserRouter basename="/">
        <Navbar />
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="" element={< Feed/>} />
            <Route path="about" element={<About />} />
            <Route path="login" element={<Login />} />
            <Route path="contact" element={<Contact />} />
          </Route>
          <Route path="*" element={<h2>404 Not Found</h2>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
