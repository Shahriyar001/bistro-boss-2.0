import { NavLink, Outlet } from "react-router-dom";

const DashBoard = () => {
  return (
    <div className="flex">
      <div className="w-64 min-h-full">
        <ul className="menu">
          <li>
            <NavLink to="/dashboard/cart"></NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default DashBoard;
