import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./components/Body";
import About from "./components/About";
import Navbar from "./components/NavBar";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <BrowserRouter basename="/">
        <Navbar />
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="" element={<h1>Home</h1>} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Route>
          <Route path="*" element={<h2>404 Not Found</h2>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
