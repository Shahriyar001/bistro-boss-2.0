import {
  FaAd,
  FaCalendar,
  FaEnvelope,
  FaHome,
  FaList,
  FaSearch,
  FaShoppingCart,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";

const DashBoard = () => {
  const [cart] = useCart();

  const isAdmin = true;

  return (
    <div className="flex">
      {/* dashboard side bar */}
      <div className="w-64 min-h-screen ">
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
              <FaShoppingCart /> My cart ({cart.length})
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
          {/* shared nav link  */}
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome /> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/salad">
              <FaSearch /> Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/contant">
              <FaEnvelope /> Contant
            </NavLink>
          </li>
        </ul>
      </div>
      {/* dashboard side bar  */}
      <div className="flex-1 p-8">
        {" "}
        <Outlet />
      </div>
    </div>
  );
};

export default DashBoard;
