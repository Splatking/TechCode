import { Fragment } from "react/jsx-runtime";
import InstagramIcon from "../../Images/Instagram_Logo.png";
import LinkedInIcon from "../../Images/LinkedIn_Logo.png";
import DiscordIcon from "../../Images/Discord_Icon.png";
import EmailIcon from "../../Images/EmailImage.jpg";
import "./style.css";

function RenderInfoScreen() {
    function LoadDiscord(){
        window.open("https://discord.gg/U7QctUSwq4");
    }

    function LoadLinkedIn(){
        window.open("https://www.linkedin.com/in/jip-voss/");
    }

    function LoadInstagram(){
        window.open("https://www.instagram.com/jipthefox/");
    }

    return (
        <Fragment>
            <div className="ContactDIV">
                <div className="UpperItem">
                    <h1>Contact options TechCode</h1>
                    <div className="ContactHolder">
                        <input type="image" src={DiscordIcon} onClick={LoadDiscord} className="SocialLoader" id="DiscordLoader"/>
                    </div>
                </div>
                <div className="LowerItem">
                    <h1>Contact options Jip Voss</h1>
                    <div className="ContactHolder">
                        <input type="image" src={InstagramIcon} onClick={LoadInstagram} className="SocialLoader" id="InstagramLoader"/>
                        <input type="image" src={LinkedInIcon} onClick={LoadLinkedIn} className="SocialLoader" id="LinkedInLoader"/>
                        <a href="mailto:jipvoss@gmail.com" target="_newtab"><img src={EmailIcon} className="SocialLoader" id="EmailLoader"/></a>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default RenderInfoScreen;