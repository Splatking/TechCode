import { Fragment } from "react/jsx-runtime";
import InstagramIcon from "../../Images/Instagram_Logo.png";
import LinkedInIcon from "../../Images/LinkedIn_Logo.png";
import DiscordIcon from "../../Images/Discord_Icon.png";
import EmailIcon from "../../Images/EmailImage.jpg";
import "./style.css";

//Loaders
import { LoadDiscord, LoadInstagram, LoadLinkedIn } from "../../Scripts/Loaders";

function RenderInfoScreen() {
    return (
        <Fragment>
            <div className="ContactDIV">
                <div className="UpperItem">
                    <h1>Contact options TechCode</h1>
                    <div className="ContactHolder">
                        <input type="image" src={DiscordIcon} onClick={LoadDiscord} className="SocialLoader" id="DiscordLoader"/>
                        <a href="mailto:techcode.development@gmail.com" target="_newtab"><img src={EmailIcon} className="SocialLoader" id="EmailLoader"/></a>
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