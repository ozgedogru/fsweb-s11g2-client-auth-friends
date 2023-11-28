import { useEffect, useState } from "react";
import "./FriendsList.css";
import { AxiosInstance } from "./api/api";

const FriendsList = () => {
  const [list, setList] = useState([]);

  const getFriends = () => {
    AxiosInstance.get("/api/friends")
      .then((res) => {
        console.log(res.data);
        setList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getFriends();
  }, []);

  return (
    <div className="friends">
      <h1>FRIENDS LIST</h1>
      <ul>
        {list.map((char) => (
          <li key={char.id}>
            {" "}
            - {char.name} - {char.email}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default FriendsList;
