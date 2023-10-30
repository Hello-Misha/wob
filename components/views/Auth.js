import Login from "../Auth/Login";
import Logout from "../Auth/Logout";
import { useFetchUser } from "../../services/authContext";

const Auth = () => {
  const { user, loading } = useFetchUser();

  return <main>{user ? <Logout /> : <Login />}</main>;
};

export default Auth;
