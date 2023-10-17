import Layout from "../components/global/Layout";
import "bootstrap/dist/css/bootstrap.css";

import { appWithTranslation } from "next-i18next";

import "styles/index.scss";

import { useFetchUser } from "services/authContext";

const App = ({ Component, pageProps }) => {
  const { user } = useFetchUser();
  return (
    <Layout user={user}>
      <Component {...pageProps} />
    </Layout>
  );
};

export default appWithTranslation(App);
