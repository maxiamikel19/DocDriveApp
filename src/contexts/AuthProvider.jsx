import { createContext, useContext, useEffect, useState } from "react";

const StateContext = createContext({
  currentUser: null,
  token: null,
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [token, _setToken] = useState(localStorage.getItem("ACCESS_TOKEN"));
  const [isValidToken, setIsValidToken] = useState();

  const setToken = (token) => {
    _setToken(token);
    if (token) {
      localStorage.setItem("ACCESS_TOKEN", token);
    } else {
      localStorage.removeItem("ACCESS_TOKEN");
    }
  };

  const isTokenValid = () => {
    if (!token) {
      setIsValidToken(false);
      localStorage.removeItem("ACCESS_TOKEN");
      return false;
    }

    try {
      const payload = JSON.parse(atob(token.split(".")[1]));
      const now = Math.floor(Date.now() / 1000);
      const isValid = payload.exp > now;

      setIsValidToken(isValid);

      if (!isValid) {
        _setToken(null);
        localStorage.removeItem("ACCESS_TOKEN");
      }

      return isValid;
    } catch (e) {
      setIsValidToken(false);
      _setToken(null);
      localStorage.removeItem("ACCESS_TOKEN");
      return false;
    }
  };

  const getUsernameFromToken = () => {
    if (token) {
      try {
        const payload = JSON.parse(atob(token.split(".")[1]));
        setUser({ id: payload.sub, username: payload.username });
      } catch (error) {
        logout();
      }
    }
  };

  const logout = () => {
    _setToken(null);
    setUser({});
    setIsValidToken(false);
    localStorage.removeItem("ACCESS_TOKEN");
    navigate("/login");
  };

  useEffect(() => {
    isTokenValid();
    getUsernameFromToken();
  }, [token]);

  return (
    <StateContext.Provider
      value={{ isValidToken, user, token, setUser, setToken, logout }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useAuth = () => useContext(StateContext);
