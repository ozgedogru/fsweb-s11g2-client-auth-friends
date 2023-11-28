import { useEffect } from "react";
import { renewAxiosInstance } from "./api/api";
import { useHistory } from "react-router-dom";

const LogOutPage = () => {
  const history = useHistory();

  useEffect(() => {
    localStorage.removeItem("token");
    renewAxiosInstance();
  }, []);
  history.push("/");
  return (
    <div>
      <h1>CIKIS YAPILDI!</h1>
    </div>
  );
};

export default LogOutPage;
