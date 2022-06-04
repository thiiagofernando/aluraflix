import React from "react";
import Logo from "../../assets/img/LogoMain.png";
import Button from "../Button";
import "./Menu.css";

function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="LogoMain" src={Logo} alt="AluraFlix" />
      </a>
      <Button as="a" className="ButtonLink" href="/">
        Novo Vídeo
      </Button>
    </nav>
  );
}

export default Menu;
