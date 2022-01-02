import React from "react";
import Home from "../src/components/Home";
import Landing from "../src/components/Landing";
import useCurrentUser from "../src/hooks/useCurrentUser";
const IndexPage = () => {
  const user = useCurrentUser();

  return user._id ? <Home user={user} /> : <Landing />;
};

export default IndexPage;
