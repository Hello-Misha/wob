"use client";
import { useTranslation } from "next-i18next";

import { useState } from "react";
import { fetcher } from "../../services/fetcher";
import { setToken } from "../../services/auth";
import { useUser } from "../../services/authContext";
const Login = () => {
  const { t } = useTranslation("mission");

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
    <section>
      <h1 className="h1-title lipstick">Login</h1>
      {!loading && !user ? (
        <form onSubmit={handleSubmit} className="form-inline">
          <input
            type="text"
            name="identifier"
            onChange={handleChange}
            placeholder="email"
            className="md:p-2 form-input py-2 rounded mx-2"
            required
          />
          <input
            type="password"
            name="password"
            onChange={handleChange}
            placeholder="Password"
            className="md:p-2 form-input py-2 rounded mx-2"
            required
          />

          <button
            className="md:p-2 rounded py-2 text-black bg-purple-200 p-2"
            type="submit"
          >
            Login
          </button>
        </form>
      ) : (
        ""
      )}
    </section>
  );
};

export default Login;
