import Header from "./components/Header";
import LoginPage from "./components/LoginPage";
import FriendsList from "./components/FriendsList";
import AddFriend from "./components/AddFriend";
import { useState } from "react";
import { Route } from "react-router-dom/";
import LogOutPage from "./components/LogoutPage";
import "./App.css";
import ProtectedPage from "./components/ProtectedPage";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="App">
      <Header />
      <Route path="/" exact>
        <LoginPage />
      </Route>
      <Route path="/friends" exact>
        <ProtectedPage>
          <FriendsList />
        </ProtectedPage>
      </Route>
      <Route path="/friends/add" exact>
        <ProtectedPage>
          <AddFriend
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
          />
        </ProtectedPage>
      </Route>
      <Route path="/logout" exact>
        <LogOutPage />
      </Route>
    </div>
  );
}

export default App;
