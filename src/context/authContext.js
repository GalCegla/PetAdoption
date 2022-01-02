import { createContext } from "react";

const AuthContext = createContext({
  auth: {
    toekn: "",
    id: "",
  },
  setAuth: () => {},
});

export default AuthContext;
