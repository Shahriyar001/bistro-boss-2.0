import {
  FaAd,
  FaCalendar,
  FaHome,
  FaList,
  FaShoppingCart,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const DashBoard = () => {
  return (
    <div className="flex">
      {/* dashboard side bar */}
      <div className="w-64 min-h-screen bg-orange-400">
        <ul className="menu p-4">
          <li>
            <NavLink to="/dashboard/userHome">
              <FaHome /> User Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/reserverVation">
              <FaCalendar /> Reservation
            </NavLink>
          </li>
          <li>
            <NavLink className="bg-blue-600" to="/dashboard/cart">
              <FaShoppingCart /> My cart
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/review">
              <FaAd /> Add a Review
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/bookings">
              <FaList /> My Bookings
            </NavLink>
          </li>
        </ul>
      </div>
      {/* dashboard side bar  */}
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default DashBoard;
