import "./AddFriend.css";
import { AxiosInstance } from "./api/api";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const AddFriend = ({ name, setName, email, setEmail }) => {
  const history = useHistory();

  const newFriend = { name, email };

  const handleAdd = (e) => {
    e.preventDefault();

    AxiosInstance.post("/api/friends", newFriend)
      .then((res) => {
        console.log("Yeni arkadas eklendi!", res.data);
        history.push("/friends");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="add-friend">
      <h1>ADD FRIEND</h1>
      <div className="form">
        <form onSubmit={handleAdd}>
          <label>
            FRIEND NAME
            <br />
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            ></input>
          </label>
          <br />
          <label>
            FRIEND EMAIL
            <br />
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></input>
          </label>
          <br />
          <button type="submit">SUBMIT</button>
        </form>
      </div>
    </div>
  );
};

export default AddFriend;
