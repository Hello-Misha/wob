import { useState } from "react";
import { useTranslation } from "next-i18next";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import { fetcher } from "../../services/fetcher";
import { setToken } from "../../services/auth";
import { useUser } from "../../services/authContext";

const Login = () => {
  const { t } = useTranslation("auth");

  //popup
  const [showPopup, setShowPopup] = useState(false);
  const handleForgotPasswordClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const [data, setData] = useState({
    identifier: "",
    password: "",
  });
  const [error, setError] = useState(null); // Add error state

  const { user, loading } = useUser();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const responseData = await fetcher(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/auth/local`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            identifier: data.identifier,
            password: data.password,
          }),
        }
      );
      setToken(responseData);
    } catch (error) {
      setError("Invalid credentials. Please check your email and password.");
    }
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <section className="my-5">
      <Container className="my-5">
        <Row>
          <Col md="8" className="mx-auto d-flex flex-col">
            <h1 className="h1-title lipstick my-5 text-center">
              {t("login.title")}
            </h1>
            {!loading && !user ? (
              <form onSubmit={handleSubmit} className="">
                {error && <div className="text-red-600">{error}</div>}
                <div className="mb-4">
                  <label htmlFor="identifier" className="block text blue mb-2">
                    {t("login.form.labelEmail")}
                  </label>
                  <input
                    type="text"
                    name="identifier"
                    placeholder={t("login.form.placeholderEmail")}
                    onChange={handleChange}
                    className="text px-3 py-2 border rounded w-full"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="password" className="block text blue mb-2">
                    {t("login.form.labelPassword")}
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder={t("login.form.placeholderPassword")}
                    onChange={handleChange}
                    className="text px-3 py-2 border rounded w-full"
                    required
                  />
                </div>
                <div className="d-flex justify-between flex-wrap align-items-center">
                  <button
                    style={{ backgroundColor: "#981b46" }}
                    className="text-white text py-3 px-5 rounded my-5 mx-auto"
                    type="submit"
                  >
                    {t("login.form.submit")}
                  </button>
                  <button
                    style={{
                      border: "2px solid #981b46", // Add a border with the desired color
                      color: "#981b46", // Set the text color to match the border color
                    }}
                    className="lipstick text py-3 px-5 rounded mx-auto"
                    onClick={handleForgotPasswordClick}
                  >
                    Forgot the password?
                  </button>
                </div>
              </form>
            ) : (
              ""
            )}
          </Col>
        </Row>
      </Container>
      <Modal show={showPopup} onHide={handleClosePopup}>
        <Modal.Header closeButton>
          <Modal.Title>Reset Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          To reset the password, please contact the administrator{" "}
          <b>office@wob.com.ua</b>.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClosePopup}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
};

export default Login;
