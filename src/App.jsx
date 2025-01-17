import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./components/Body";
import Navbar from "./components/NavBar";
import Login from "./components/Login";
import Feed from "./components/Feed";
import Connection from "./components/Connection";
import Profile from "./components/Profile"
import  Request from "./components/Request"
import SignUp from "./components/Signup"


function App() {
  return (
    <div>
      <BrowserRouter basename="/">
        <Navbar />
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/" element={<Feed />} />
            <Route path="profile" element={<Profile/>}/>
            <Route path="connection" element={<Connection/>} />
            <Route path="login" element={<Login/>} />
            <Route path="request" element={<Request/>} />
            <Route path="signup" element={<SignUp/>}/>
          </Route>
          <Route path="*" element={<h2>404 Not Found</h2>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
