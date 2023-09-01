import Layout from "../components/global/Layout";
import "bootstrap/dist/css/bootstrap.css";

import { appWithTranslation } from "next-i18next";

import "../styles/index.scss";

const App = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default appWithTranslation(App);
