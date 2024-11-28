import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { BaseURL } from "../../utils/constant";
import { removeUser } from "../../utils/userSlice";


function Navbar() {
  const user = useSelector((store) => store.user);
 
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      const response = await axios.post(
        BaseURL + "/logout",
        {},
        { withCredentials: true }
      );

      dispatch(removeUser());
  
      return navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1 mx-5">
        <Link to="" className="btn btn-ghost text-xl text-green-800">
          techie❤️Tinder
        </Link>
      </div>
      {user && (
        <div className="flex-none gap-2">
          <p>Welcome {user.data.firstName}</p>

          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src={user.data.photoUrl}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="profile" className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li>
                <Link to="connection">Connection</Link>
              </li>
              <li>
                <button onClick={handleLogOut}>logout</button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
