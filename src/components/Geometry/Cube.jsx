import { Html, Css, Javascript, GitHub, Cloud } from "@mui/icons-material"; // Import des icônes MUI
import linuxImage from "../../Assets/Icons/Linux-icon-design-on-transparent-background-PNG-removebg-preview.png"; // Import de l'image PNG
import cisco from "../../Assets/Icons/cisco-removebg-preview.png";
import python from "../../Assets/Icons/py-removebg-preview.png";
import palo from "../../Assets/Icons/palo-removebg-preview.png";
import ansible from "../../Assets/Icons/5bc49f1fd8330-removebg-preview.png";
import react from "../../Assets/Icons/685-6854994_react-logo-no-background-hd-png-download-removebg-preview.png";

export const Cube = () => {
  return (
    <div className="stage-cube-cont">
      <div className="cubespinner">
        <div className="face1">
          <img src={linuxImage} alt="Linux" style={{ width: "125px", height: "125px" }} /> {/* Remplacement par une image PNG */}
        </div>
        <div className="face2">
        <img src={cisco} alt="cisco" style={{ width: "205px", height: "100px" }} />{/* HTML5 icon */}
        </div>
        <div className="face3">
        <img src={python} alt="Linux" style={{ width: "125px", height: "125px" }} />
        </div>
        <div className="face4">
        <img src={palo} alt="Linux" style={{ width: "205px", height: "125px" }} />
        </div>
        <div className="face5">
        <img src={ansible} alt="Linux" style={{ width: "300px", height: "125px" }} />
        </div>
        <div className="face6">
        <img src={react} alt="Linux" style={{ width: "125px", height: "125px" }} />
        </div>
      </div>
    </div>
  );
};
