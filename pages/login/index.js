"use client";
import { useState } from "react";
import { setToken } from "../../services/auth";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const data = await loginUser(email, password); // Replace with your login function

    if (data) {
      console.log(`login successful ${data}`);
      setToken(data);
    } else {
      console.error();
    }
  };

  return (
    <main>
      <section>
        <h1 className="h1-title">Login</h1>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="btnSolid bg-lipstick" type="submit">
            Login
          </button>
        </form>
      </section>
    </main>
  );
};

export default LoginPage;
