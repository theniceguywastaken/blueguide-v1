import blueGuideW from "../assets/blueguidewhite.svg";
import blueGuideB from "../assets/blueguideblack.svg";

function Logo({ color }) {
    const logo = color === "white" ? blueGuideW : blueGuideB;
    return (
        <div className="logo">
            <img src={logo} alt="Blue Guide" />
        </div>
    );
}

export default Logo;
