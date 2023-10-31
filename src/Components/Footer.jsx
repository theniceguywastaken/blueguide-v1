import Logo from "./Logo";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faDribbble } from "@fortawesome/free-brands-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

function FooterNav({ items }) {
    let itemsList = items.map((item, i) => {
        return <li key={i}>{item}</li>;
    });

    return (
        <ul>
            <itemList />
        </ul>
    );
}
function Socials() {
    return (
        <div className="socials">
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faDribbble} />
            <FontAwesomeIcon icon={faXTwitter} />
            <FontAwesomeIcon icon={faYoutube} />
        </div>
    );
}

function Footer() {
    return (
        <footer className="footer grid">
            <Logo />
            <nav>
                <ul>
                    <li>About</li>
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>Careers</li>
                    <li>Help</li>
                    <li>Privacy Policy</li>
                </ul>
            </nav>
            <div className="insta"></div>
            <div className="copyright">
                © 2023 Blue Guide. All rights reserved
            </div>
            <Socials />
        </footer>
    );
}

export default Footer;
