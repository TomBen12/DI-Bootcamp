import { Link } from "react-router";
const Header = () => {
  return (
    <header>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/dash'>Dashboard</Link>
        <Link to='/shop'>Shop</Link>
      </nav>
    </header>
  );
};
export default Header;
