import React from "react";
import { useAuth } from "../contexts/AuthProvider";

const Home = () => {
  const { isValidToken, user } = useAuth();
  return (
    <div>
      <h1>Home</h1>
      <h3>{isValidToken ? <p>Token</p> : <p>No tok</p>}</h3>
      <h1>{user.username}</h1>
    </div>
  );
};

export default Home;
