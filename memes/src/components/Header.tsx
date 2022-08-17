import "../stylesheets/header.css";
import logo from "../../public/img/logo.png";

const Header = () => {
  return (
    <header className="header">
      <img src={logo} className="header--image" alt="page-logo" />
      <h2 className="header--title">Memes Generator</h2>
      <h4 className="header--project">Created by: "D'Angelo Diego"</h4>
    </header>
  );
};

export default Header;
