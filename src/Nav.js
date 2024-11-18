import './App.css';

function Nav() {
    return (
    <>
      <nav>
        <img src="./logo.svg" alt="logo" />
        <ul className="nav-list">
          <li><a href="/home">HOME</a></li>
          <li><a href="/about">ABOUT</a></li>
          <li><a href="/menu">MENU</a></li>
          <li><a href="/reservations">RESERVATIONS</a></li>
          <li><a href="/order-online">ORDER ONLINE</a></li>
          <li><a href="/login">LOGIN</a></li>
        </ul>
      </nav>
    </>
  );
}
  export default Nav;