const SignUp = () => {
  return (
    <div>
      <form action="sign-up" method="post">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" required></input>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required></input>
        <label for="confirm-password">Confirm Password:</label>
        <input type="password" id="confirm-password" name="confirm-password" required></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignUp;
