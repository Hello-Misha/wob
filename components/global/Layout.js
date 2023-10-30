import Header from "./Header";
import Footer from "./Footer";
import { UserProvider } from "../../services/authContext";

const Layout = ({ user, loading = false, children }) => (
  <UserProvider value={(user, loading)}>
    <Header />
    {children}
    <Footer />
  </UserProvider>
);

export default Layout;
