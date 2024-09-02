import useAuth from "../../../hooks/useAuth";

const AdminHome = () => {
  const { user } = useAuth();
  return (
    <div>
      <h2>
        <span>hi walcome </span>
        {user?.displayName ? user.displayName : "Back"}
      </h2>
    </div>
  );
};

export default AdminHome;
