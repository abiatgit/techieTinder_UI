import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { store } from "../../utils/store";

function Navbar() {
  const user = useSelector((store) => store.user);

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1 mx-5">
        <a className="btn btn-ghost text-xl text-green-800">techie❤️Tinder</a>
      </div>
    {user &&  <div className="flex-none gap-2">
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
            <a className="justify-between">
              Profile
              <span className="badge">New</span>
            </a>
          </li>
          <li>
            <a>Settings</a>
          </li>
          <li>
            <a>Logout</a>
          </li>
        </ul>
      </div>
    </div>}
    </div>
  );
}

export default Navbar;
