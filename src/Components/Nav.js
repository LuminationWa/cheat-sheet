const Nav = (props) => {
  return (
    <nav>
      <div>
        <a href="/">Home</a>
      </div>
      <div className="navR-container">
        {props.user ? (
          <>
            <a href="/manage">Manage</a>
            <a href="/log-out">Log out</a>
          </>
        ) : (
          <>
            <a href="/sign-up">Sign up</a>
            <a href="/log-in">Log in</a>
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
