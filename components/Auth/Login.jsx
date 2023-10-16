"use client";
import { useTranslation } from "next-i18next";
import { Container, Row, Col } from "react-bootstrap";

import { useState } from "react";
import { fetcher } from "../../services/fetcher";
import { setToken } from "../../services/auth";
import { useUser } from "../../services/authContext";
const Login = () => {
  const { t } = useTranslation("auth");

  const [data, setData] = useState({
    identifier: "",
    password: "",
  });

  const { user, loading } = useUser();

  const handleSubmit = async (e) => {
    e.preventDefault();

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
                <button
                  style={{ backgroundColor: "#981b46" }}
                  className="text-white text py-3 px-5 rounded mx-auto"
                  type="submit"
                >
                  {t("login.form.submit")}
                </button>
              </form>
            ) : (
              ""
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Login;
