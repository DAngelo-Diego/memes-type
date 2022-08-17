import "../stylesheets/header.css";

const Header = () => {
  return (
    <header className="header">
      <img src="../../public/img/logo.png " className="header--image" />
      <h2 className="header--title">Memes Generator</h2>
      <h4 className="header--project">Created by: "D'Angelo Diego"</h4>
    </header>
  );
};

export default Header;
