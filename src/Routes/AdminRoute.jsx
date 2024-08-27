// import { Navigate, useLocation } from "react-router-dom";
// import useAdmin from "../hooks/useAdmin";
// import useAuth from "../hooks/useAuth";

import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAdmin from "../hooks/useAdmin";

// const AdminRoute = (children) => {
//   const [user, loading] = useAuth();
//   const [isAdmin, isAdminloading] = useAdmin();
//   const location = useLocation();

//   if (loading || isAdminloading) {
//     return <progress className="progress w-56"></progress>;
//   }

//   if (user && isAdmin) {
//     return children;
//   }
//   return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
// };

// export default AdminRoute;

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [isAdmin, isAdminloading] = useAdmin();
  const location = useLocation();

  if (loading || isAdminloading) {
    return <progress className="progress w-56"></progress>;
  }

  if (user && isAdmin) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default AdminRoute;
