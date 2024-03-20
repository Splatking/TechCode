import { Fragment, useEffect } from "react";
import "./style.css";
import FontysLogo from "../../Images/Fontys_Logo.png";
import DeltaLogo from "../../Images/Delta_Logo.png";
import TechCodeLogo from "../../Images/TechCode_Logo.jpg";

//interfaces
interface HomeScreenProps {
    stateSetterFunctions: {
      setMenuBarVisible: React.Dispatch<React.SetStateAction<boolean>>;
      setHomePageVisible: React.Dispatch<React.SetStateAction<boolean>>;
      setProductPageVisible: React.Dispatch<React.SetStateAction<boolean>>;
      setAccountScreenVisible: React.Dispatch<React.SetStateAction<boolean>>;
      setLoginScreenVisible: React.Dispatch<React.SetStateAction<boolean>>;
      setCreateScreenVisible: React.Dispatch<React.SetStateAction<boolean>>;
      setWorkingByScreenVisible: React.Dispatch<React.SetStateAction<boolean>>;
      setTeamScreenVisible: React.Dispatch<React.SetStateAction<boolean>>;
      setJipVossVisible: React.Dispatch<React.SetStateAction<boolean>>;
    };
}

const RenderMainScreen: React.FC<HomeScreenProps> = ({ stateSetterFunctions }) => {
    //functions
    function HideScreens(){
        stateSetterFunctions.setHomePageVisible(false);
        stateSetterFunctions.setProductPageVisible(false);
        stateSetterFunctions.setAccountScreenVisible(false);
    }

    function Reload(){
        window.location.reload();
    }

    function LoadTechAccountPage(){
        HideScreens();
        stateSetterFunctions.setAccountScreenVisible(true);
    }

    function LoadProductPage(){
        HideScreens();
        stateSetterFunctions.setAccountScreenVisible(true);
    }

    function LoadWorkingBy(){
        HideScreens();
        stateSetterFunctions.setAccountScreenVisible(true);
    }

    function LoadFontys(){
        window.open("https://www.fontys.nl/")
    }

    function LoadDelta(){
        window.open("https://deltafhict.nl/")
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
                <h1>Welcome by TechCode</h1>
                <p>Your go-to online shop for games and other types of gaming accessoires</p>
            </div>
            <div className="LineItem">
                <div className="ScreenItem" id="LatestProduct">
                    <h1>Latest product</h1>
                </div>
                <div className="ScreenItem" id="QuickMenu">
                    <h1>Quick menu</h1>
                    <p id="QuickMenuButtonHolder">
                        Within the TechCode website, there is a lot to explore. Here we've a short list for you what you can do and view within the side.<br/><br/>
                        With the next button you're able to go to your own account:<br/>
                        <button onClick={LoadTechAccountPage} className="QuickMenuButton">Tech Account</button><br/><br/>
                        Ever wondered what we've to offer? Explore our product page or select the filtered category in the menubar:<br/>
                        <button onClick={LoadProductPage} className="QuickMenuButton">Products</button><br/><br/>
                        So your on the site to get a job by us? That's possible press the next button:<br/>
                        <button onClick={LoadWorkingBy} className="QuickMenuButton">Working by TechCode</button><br/><br/>
                    </p>
                </div>
            </div>
            <div className="ScreenItem" id="PossibleBy">
                <h1>Made possible by</h1>
                <div className="Companies">
                    <ul className="tag-list Companies__inner">
                        <li><input type="image" src={FontysLogo} onClick={LoadFontys} className="CompanyLogo" id="FontysLogo"/></li>
                        <li><input type="image" src={DeltaLogo} onClick={LoadDelta} className="CompanyLogo" id="DeltaLogo"/></li>
                        <li><input type="image" src={TechCodeLogo} onClick={Reload} className="CompanyLogo" id="TechCodeLogoInput"/></li>
                    </ul>
                </div>
            </div>
        </Fragment>
    );
}

export default RenderMainScreen;