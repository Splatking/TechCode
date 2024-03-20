//imports
import React from "react";
import "./style.css";
import { Setters, HideScreens } from "../../Scripts/ScreenHandler";

const Buttons: React.FC<Setters> = ({ stateSetterFunctions }) => {
    function LoadDashboard(){
        HideScreens(stateSetterFunctions);
        if(sessionStorage.getItem("TechName") == null){
            stateSetterFunctions.setMenuBarVisible(false);
            stateSetterFunctions.setLoginScreenVisible(true);
        } else {
            stateSetterFunctions.setDashboardScreenVisible(true);
        }
    };

    function LoadProductPage(){
        HideScreens(stateSetterFunctions);
        stateSetterFunctions.setProductPageVisible(true);
    }

    function LoadOurTeam(){
        HideScreens(stateSetterFunctions);
        stateSetterFunctions.setTeamScreenVisible(true);
    }

    function LoadJipVoss(){
        HideScreens(stateSetterFunctions);
        stateSetterFunctions.setJipVossVisible(true);
    }

    function LoadWorkingByTechCode(){
        HideScreens(stateSetterFunctions);
        stateSetterFunctions.setWorkingByScreenVisible(true);
    }

    function LoadOurPolicies(){
        HideScreens(stateSetterFunctions);
        stateSetterFunctions.setProductPageVisible(true);
    }

    function LoadVacancies(){
        HideScreens(stateSetterFunctions);
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