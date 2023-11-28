import "./LoginPage.css";

const LoginPage = () => {
  const handleSubmit = () => {
    console.log("Form submit edildi!");
  };
  return (
    <div className="login">
      <h1>LOGIN</h1>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <label>
            {" "}
            USERNAME
            <br />
            <input type="text"></input>
          </label>
          <br />
          <label>
            PASSWORD
            <br />
            <input type="email"></input>
          </label>
          <br />
          <button type="submit">SUBMIT</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
