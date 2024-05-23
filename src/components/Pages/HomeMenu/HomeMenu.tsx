import { Fragment, useEffect } from "react";
import "./style.css";
import FontysLogo from "../../Images/Fontys_Logo.png";
import DeltaLogo from "../../Images/Delta_Logo.png";
import TechCodeLogoWhite from "../../Images/TechCode_Logo2.0_White.png";
import DiscordLogo from "../../Images/Discord_Logo.png";
import SitePreview from "../../Images/SitePreview.png";
import JipVoss from "../../Images/JipVoss.png";
import { Setters, HideScreens } from "../../Scripts/ScreenHandler";

//languages Logo
import HTMLLogo from "../../Images/HTMLLogo.png";
import JavaLogo from "../../Images/JavaLogo.png";
import JavaScriptLogo from "../../Images/JSLogo.png";
import LUALogo from "../../Images/LUALogo.png";
import CSSLogo from "../../Images/CSSLogo.png";
import PHPLogo from "../../Images/PHPLogo.png";
import CSLogo from "../../Images/CSLogo.png";
import CPPLogo from "../../Images/CPPLogo.png";
import ViteLogo from "../../Images/ViteLogo.png";

//Socials
import InstagramIcon from "../../Images/Instagram_Logo.png";
import LinkedInIcon from "../../Images/LinkedIn_Logo.png";
import EmailIcon from "../../Images/EmailImage.jpg";

const RenderMainScreen: React.FC<Setters> = ({ stateSetterFunctions }) => {
    function Reload(){
        window.location.reload();
    }

    function LoadPortofolio(){
        HideScreens(stateSetterFunctions);
        stateSetterFunctions.setProductPageVisible(true);
    }

    function LoadFontys(){
        window.open("https://www.fontys.nl/")
    }

    function LoadDelta(){
        window.open("https://deltafhict.nl/")
    }

    function LoadDiscord(){
        window.open("https://discord.gg/U7QctUSwq4")
    }

    function LoadLatestProduct(){

    }

    function LoadLinkedIn(){
        window.open("https://www.linkedin.com/in/jip-voss/");
    }

    function LoadInstagram(){
        window.open("https://www.instagram.com/jipthefox/");
    }

    //This function starts cloning of the companies logos to put in the scrolling loop
    useEffect(() => {
          const Scroller = document.querySelectorAll(".Companies");
    
          if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            Scroller.forEach((scroller) => {
              scroller.setAttribute("data-animated", "true");
    
              const scrollerInner = scroller.querySelector(".Companies__inner");
    
              if (scrollerInner) {
                const scrollerContent = Array.from(scrollerInner.children);
    
                scrollerContent.forEach((item) => {
                  if (item instanceof HTMLElement) {
                    const duplicatedItem = item.cloneNode(
                      true
                    ) as HTMLElement;
                    duplicatedItem.setAttribute("aria-hidden", "true");
                    scrollerInner.appendChild(duplicatedItem);
                  }
                });
              }
            });
          }
      }, []);

    return (
        <Fragment>
            <div className="ScreenItem" id="TechCode_Introduction">
                <div className="LeftSideWelcome">
                    <h1 className="Title">Welcome by TechCode</h1>
                    <p>
                        Your go-to for searching our online portofolio and view our upcoming products! The portofolio will be mainly focussed on that from Jip Voss.<br/><br/>
                        The portofolio contains information of who Jip is and what for ICT background he has. To make sure you can find all information about Jip they're 3 categories:<br/>
                        <ul>
                            <li>About me</li>
                            <li>Projects</li>
                            <li>Contact options</li>
                        </ul><br/>
                        Who is Jip Voss? Jip Voss is a man (18 years old) and living in the Netherlands. Where he works on ICT problems within school. He is now following the Fontys ICT study in the Delta excellence program. Working on multiple projects at the same time. Because he doesn't really like to do the same stuff together. Jip is a motivated boy who really wants to reach the end-goal of all the projects he is working on.<br/><br/>
                    </p>
                    <div className="LineItem">
                        <div className="LanguageBox">
                            <div className="LanguagesToImage">
                                <p id="InnerLanguageBox">Nice to know which languages I can write:<br/></p>
                                <div className="UpperCase">
                                    <img className="LanguageImage" src={JavaLogo} alt="Java"/>
                                    <img className="LanguageImage" src={JavaScriptLogo} alt="Java"/>
                                    <img className="LanguageImage" src={LUALogo} alt="Java"/>
                                    <img className="LanguageImage" src={HTMLLogo} alt="Java"/>
                                    <img className="LanguageImage" src={CSSLogo} alt="Java"/>
                                </div>
                                <div className="DownCase">
                                    <img className="LanguageImage" src={PHPLogo} alt="Java"/>
                                    <img className="LanguageImage" src={CSLogo} alt="Java"/>
                                    <img className="LanguageImage" src={CPPLogo} alt="Java"/>
                                    <img className="LanguageImage" src={ViteLogo} alt="Java"/>
                                </div>
                            </div>
                        </div>
                        <div className="ContactBoxHome">
                            Get in contact with Jip through:<br/>
                            <div className="ContactHolder">
                                <input type="image" src={InstagramIcon} onClick={LoadInstagram} className="SocialLoaderHome" id="InstagramLoader"/>
                                <input type="image" src={LinkedInIcon} onClick={LoadLinkedIn} className="SocialLoaderHome" id="LinkedInLoader"/>
                                <a href="mailto:jipvoss@gmail.com" target="_newtab"><img src={EmailIcon} className="SocialLoaderHome" id="EmailLoader"/></a>
                            </div>
                        </div>
                    </div><br/><br/>
                    <button onClick={LoadPortofolio} className="QuickMenuButton" id="PortofolioButton"><div><p>Open portofolio</p></div><div className="arrows-body"><div className="arrow"></div><div className="arrow"></div><div className="arrow"></div></div></button>
                </div>
                <div className="RightSideWelcome">
                    <img src={JipVoss} id="JipVossImage"/>
                </div>
            </div>
            <div className="LineItem">
                <div className="ScreenItem" id="LatestProduct">
                    <div className="LeftSideLatestProject">
                        <img src={SitePreview} alt="Latest product preview" id="PreviewImage"/>
                    </div>
                    <div className="RightSideLatestProject">
                        <h1 className="Title">Latest project</h1>
                        <h2 className="SubTitle">TechCode site</h2>
                        <p>The TechCode site has been created in semester 2 of Open Learning and Delta for Jip Voss at Fontys HBO-ICT. The site has been released around - and will be used as an portofolio site!</p><br/>
                        <button onClick={LoadLatestProduct} className="QuickMenuButton" id="LatestProjectButton"><div><p>Show me more!</p></div><div className="arrows-body"><div className="arrow"></div><div className="arrow"></div><div className="arrow"></div></div></button>
                    </div>
                </div>
            </div>
            <div className="ScreenItem" id="PossibleBy">
                <h1 className="Title">Made possible by:</h1>
                <div className="Companies">
                    <ul className="tag-list Companies__inner">
                        <li><input type="image" src={FontysLogo} onClick={LoadFontys} className="CompanyLogo" id="FontysLogo"/></li>
                        <li><input type="image" src={DeltaLogo} onClick={LoadDelta} className="CompanyLogo" id="DeltaLogo"/></li>
                        <li><input type="image" src={DiscordLogo} onClick={LoadDiscord} className="CompanyLogo" id="DiscordLogo"/></li>
                        <li><input type="image" src={TechCodeLogoWhite} onClick={Reload} className="CompanyLogo" id="TechCodeLogoInput"/></li>
                    </ul>
                </div>
            </div>
        </Fragment>
    );
}

export default RenderMainScreen;