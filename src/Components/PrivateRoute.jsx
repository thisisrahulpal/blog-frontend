import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Menu from "./Feed/Menu"

const PrivateRoute = () => {
  const { userInfo } = useSelector((state) => state.auth);
  return (
    <>
      {userInfo ? (
        <div>
          <Outlet />
          <Menu />
        </div>
      ) : (
        <Navigate to="/" replace />
      )}
    </>
  );
};
export default PrivateRoute;
