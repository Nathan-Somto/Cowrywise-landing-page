import logo from "../Images/cowrywise.svg";
import Button from "./Button";
const Navbar = () => {
  const nav = ["Plan", "Save", "Invest", "FAQ", "Learn"];
  return (
    <nav className="mainNav">
      <ul>
        <li>
          <img alt="Cowrywise_logo" src={logo}></img>
        </li>

        {nav.map((item) => {
          return <li className="navItem">{item}</li>;
        })}
      </ul>
      <div className="navButton">
        <Button version ="blueOutline" size = "lg">Sign In</Button>
        <Button version="blue"  >Register It's Free!</Button>
      </div>
      <div className="menu">
        {" "}
        <i className="fa fa-bars"></i>
      </div>
    </nav>
  );
};
export default Navbar;
