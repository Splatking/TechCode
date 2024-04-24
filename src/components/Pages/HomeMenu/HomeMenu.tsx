import { Fragment, useEffect } from "react";
import "./style.css";
import FontysLogo from "../../Images/Fontys_Logo.png";
import DeltaLogo from "../../Images/Delta_Logo.png";
import TechCodeLogo from "../../Images/TechCode_Logo.png";
import DiscordLogo from "../../Images/Discord_Logo.png";
import SitePreview from "../../Images/SitePreview.png";

function RenderMainScreen() { 
    function Reload(){
        window.location.reload();
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
                <h1 className="Title">Welcome by TechCode</h1>
                <p>Your go-to for searching our online portofolio and view our upcoming products! The portofolio will be mainly focussed on that from Jip Voss.</p>
            </div>
            <div className="LineItem">
                <div className="ScreenItem" id="LatestProduct">
                    <h1 className="Title">Latest product</h1>
                    <h2 className="SubTitle">TechCode site</h2>
                    <img src={SitePreview} alt="Latest product preview" id="PreviewImage"/>
                    <p>The TechCode site has been created in semester 2 of Open Learning and Delta for Jip Voss at Fontys HBO-ICT. The site has been released around - and will be used as an portofolio site!</p>
                    <button onClick={LoadLatestProduct} className="QuickMenuButton">Show me more!</button>
                </div>
            </div>
            <div className="ScreenItem" id="PossibleBy">
                <h1 className="Title">Made possible by</h1>
                <div className="Companies">
                    <ul className="tag-list Companies__inner">
                        <li><input type="image" src={FontysLogo} onClick={LoadFontys} className="CompanyLogo" id="FontysLogo"/></li>
                        <li><input type="image" src={DeltaLogo} onClick={LoadDelta} className="CompanyLogo" id="DeltaLogo"/></li>
                        <li><input type="image" src={DiscordLogo} onClick={LoadDiscord} className="CompanyLogo" id="DiscordLogo"/></li>
                        <li><input type="image" src={TechCodeLogo} onClick={Reload} className="CompanyLogo" id="TechCodeLogoInput"/></li>
                    </ul>
                </div>
            </div>
        </Fragment>
    );
}

export default RenderMainScreen;