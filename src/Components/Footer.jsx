import Logo from "./Logo";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faDribbble } from "@fortawesome/free-brands-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

function FooterBlock({ title, Comp: component }) {
    return (
        <div className="footer_block flex column">
            <h2>{title}</h2>
            {component}
        </div>
    );
}

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
            <nav className="footer_nav">
                <ul className="flex column">{itemsList}</ul>
            </nav>
        </div>
    );
}
function InstaGrid() {
    return (
        <div className="insta">
            <div className="feed">
                <div className="feed_post"></div>
                <div className="feed_post"></div>
                <div className="feed_post"></div>
                <div className="feed_post"></div>
                <div className="feed_post"></div>
                <div className="feed_post"></div>
            </div>
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
    let Nav = (
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
    );
    let Insta = <InstaGrid />;
    return (
        <footer className="footer grid justify_center">
            <Logo />

            <FooterBlock title="Navigation" Comp={Nav} />
            <FooterBlock title="Instagram Follow" Comp={Insta} />

            <div className="copyright flex column">
                © 2023 Blue Guide. All rights reserved
                <Socials />
            </div>
        </footer>
    );
}

export default Footer;
