import Logo from "./Logo";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faDribbble } from "@fortawesome/free-brands-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

function FooterNav({ items }) {
    let itemsList = items.map((item, i) => {
        return (
            <li key={i}>
                <a href="#">{item}</a>
            </li>
        );
    });

    return (
        <div className="footer_nav_container flex column">
            <h2>Navigation</h2>
            <nav className="footer_nav">
                <ul className="flex column">{itemsList}</ul>
            </nav>
        </div>
    );
}
function Socials() {
    return (
        <div className="socials flex justify_center">
            <a href="">
                <FontAwesomeIcon icon={faInstagram} className="socials_icon" />
            </a>
            <a href="">
                <FontAwesomeIcon icon={faDribbble} className="socials_icon" />
            </a>
            <a href="">
                <FontAwesomeIcon icon={faXTwitter} className="socials_icon" />
            </a>
            <a href="">
                <FontAwesomeIcon icon={faYoutube} className="socials_icon" />
            </a>
        </div>
    );
}

function Footer() {
    return (
        <footer className="footer grid justify_center">
            <Logo />
            <FooterNav
                items={[
                    "About",
                    "Features",
                    "Pricing",
                    "Careers",
                    "Help",
                    "Privacy Policy",
                ]}
            />
            <div className="insta"></div>
            <div className="copyright flex column">
                © 2023 Blue Guide. All rights reserved
                <Socials />
            </div>
        </footer>
    );
}

export default Footer;
