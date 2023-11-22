import "./NavBar.css";
import Water from "./imgs/water_full.svg";
import Acai from "./imgs/peça_açaí.svg";

export const NavBar = () => {
  return (
    <nav className="nav-bar">
      <img src={Water} />
      <img src={Acai} />
    </nav>
  );
};
