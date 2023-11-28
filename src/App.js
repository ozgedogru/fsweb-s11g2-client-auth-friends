import Header from "./components/Header";
import LoginPage from "./components/LoginPage";

import "./App.css";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import FriendsList from "./components/FriendsList";

function App() {
  return (
    <div className="App">
      <Header />
      <Route path="/" exact>
        <LoginPage />
      </Route>
      <Route path="/friends">
        <FriendsList />
      </Route>
    </div>
  );
}

export default App;
