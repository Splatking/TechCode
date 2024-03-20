//imports
import React from "react";
import "./style.css";

//interfaces
interface ButtonsProps {
    stateSetterFunctions: {
      setMenuBarVisible: React.Dispatch<React.SetStateAction<boolean>>;
      setHomePageVisible: React.Dispatch<React.SetStateAction<boolean>>;
      setProductPageVisible: React.Dispatch<React.SetStateAction<boolean>>;
      setAccountScreenVisible: React.Dispatch<React.SetStateAction<boolean>>;
      setLoginScreenVisible: React.Dispatch<React.SetStateAction<boolean>>;
      setCreateScreenVisible: React.Dispatch<React.SetStateAction<boolean>>;
      setDashboardScreenVisible: React.Dispatch<React.SetStateAction<boolean>>;
      setWorkingByScreenVisible: React.Dispatch<React.SetStateAction<boolean>>;
      setTeamScreenVisible: React.Dispatch<React.SetStateAction<boolean>>;
      setJipVossVisible: React.Dispatch<React.SetStateAction<boolean>>;
    };
}

const Buttons: React.FC<ButtonsProps> = ({ stateSetterFunctions }) => {
    //functions
    function HideScreens(){
        stateSetterFunctions.setHomePageVisible(false);
        stateSetterFunctions.setProductPageVisible(false);
        stateSetterFunctions.setAccountScreenVisible(false);
        stateSetterFunctions.setDashboardScreenVisible(false);
        stateSetterFunctions.setWorkingByScreenVisible(false);
        stateSetterFunctions.setTeamScreenVisible(false);
    }

    function LoadDashboard(){
        HideScreens();
        if(sessionStorage.getItem("TechName") == null){
            stateSetterFunctions.setMenuBarVisible(false);
            stateSetterFunctions.setLoginScreenVisible(true);
        } else {
            stateSetterFunctions.setDashboardScreenVisible(true);
        }
    };

    function LoadProductPage(){
        HideScreens();
        stateSetterFunctions.setProductPageVisible(true);
    }

    function LoadOurTeam(){
        HideScreens();
        stateSetterFunctions.setTeamScreenVisible(true);
    }

    function LoadJipVoss(){
        HideScreens();
        stateSetterFunctions.setProductPageVisible(true);
    }

    function LoadWorkingByTechCode(){
        HideScreens();
        stateSetterFunctions.setWorkingByScreenVisible(true);
    }

    function LoadOurPolicies(){
        HideScreens();
        stateSetterFunctions.setProductPageVisible(true);
    }

    function LoadVacancies(){
        HideScreens();
        stateSetterFunctions.setProductPageVisible(true);
    }

    return (
        <div className="Buttons">
            <div className="dropdown">
                <button type="button" onClick={LoadProductPage} id="ProductsButton" className="ItemButton"><span>Products</span></button>
                <div className="dropdown-content">
                    <button type="button" onClick={LoadProductPage} id="FirstItem">Software</button>
                    <button type="button" onClick={LoadProductPage}>Hardware</button>
                    <button type="button" onClick={LoadProductPage} id="LastItem">Gaming</button>
                </div>
            </div>

            <div className="dropdown">
                <button type="button" onClick={LoadOurTeam} id="TeamButton" className="ItemButton"><span>Team</span></button>
                <div className="dropdown-content">
                    <button type="button" onClick={LoadOurTeam} id="FirstItem">Our team</button>
                    <button type="button" onClick={LoadJipVoss} id="LastItem">Jip Voss</button>
                </div>
            </div>

            <div className="dropdown">
                <button type="button" onClick={LoadWorkingByTechCode} id="WorkingByButton" className="ItemButton"><span>Working by TechCode</span></button>
                <div className="dropdown-content">
                    <button type="button" onClick={LoadWorkingByTechCode} id="FirstItem">About working by TechCode</button>
                    <button type="button" onClick={LoadOurPolicies}>Our policies</button>
                    <button type="button" onClick={LoadVacancies} id="LastItem">Vacancies</button>
                </div>
            </div>

            <div className="TechAccountButtonHolder">
                <button type="button" onClick={LoadDashboard} id="MyAccountButton" className="ItemButton"><span>Tech Account</span></button>
            </div>
        </div>
    );
}

export default Buttons;