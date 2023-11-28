import { Redirect, useLocation } from "react-router-dom";

const ProtectedPage = ({ children }) => {
  const { pathname } = useLocation();

  console.log("şu anki path: ", pathname);

  return localStorage.getItem("token") ? (
    children
  ) : (
    <Redirect
      to={{
        pathname: "/",
        state: { referrer: pathname },
      }}
    />
  );
};

export default ProtectedPage;
