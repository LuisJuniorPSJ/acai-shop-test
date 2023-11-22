import Stars from "./imgs/Stars.svg";
import Mobile from "./imgs/last-mobile.svg";

export const DescInfos = () => {
  return (
    <>
      <h2>Açaí Natural</h2>
      <img className="mobile-last" src={Mobile} />
      <img src={Stars} alt="Avaliações" /> <span className="note">4.5</span>{" "}
      <span className="num-note">(30+)</span>{" "}
      <a className="link" href="#">
        Ver Avaliações
      </a>
    </>
  );
};
