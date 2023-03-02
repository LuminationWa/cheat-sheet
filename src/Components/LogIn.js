const LogIn = () => {
    return (
      <div>
        <form action="log-in" method="post">
          <label for="username">Username:</label>
          <input type="text" id="username" name="username" required></input>
          <label for="password">Password:</label>
          <input type="password" id="password" name="password" required></input>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  };
  
  export default LogIn;