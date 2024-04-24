//imports
import React from "react";
import "./style.css";
import { Setters, HideScreens } from "../../Scripts/ScreenHandler";

//images
import AccountCirlce from "../../Icons/account_circle_FILL0_wght400_GRAD0_opsz24.png";

const Buttons: React.FC<Setters> = ({ stateSetterFunctions }) => {
    function LoadDashboard(){
        HideScreens(stateSetterFunctions);
        if(sessionStorage.getItem("Username") == null){
            stateSetterFunctions.setMenuBarVisible(false);
            stateSetterFunctions.setLoginScreenVisible(true);
        } else {
            if(sessionStorage.getItem("WorkEmail") != null){
                stateSetterFunctions.setWorkersDashboardScreenVisible(true);
            } else {
                stateSetterFunctions.setDashboardScreenVisible(true);
            }
        }
    };

    function LoadProductPage(){
        HideScreens(stateSetterFunctions);
        stateSetterFunctions.setProductPageVisible(true);
    }

    function LoadContactPage(){
        HideScreens(stateSetterFunctions);
        stateSetterFunctions.setInfoVisible(true);
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
                <button type="button" onClick={LoadProductPage} id="TeamButton" className="ItemButton">Portofolio - Jip Voss</button>
                <div className="dropdown-content">
                    <button type="button" onClick={LoadJipVoss} id="FirstItem">About me</button>
                    <button type="button" onClick={LoadProductPage}>Projects</button>
                    <button type="button" onClick={LoadContactPage} id="LastItem">Contact options</button>
                </div>
            </div>

            <div className="dropdown">
                <button type="button" onClick={LoadOurTeam} id="TeamButton" className="ItemButton">Team</button>
                <div className="dropdown-content">
                    <button type="button" onClick={LoadOurTeam} id="FirstItem">Our team</button>
                    <button type="button" onClick={LoadJipVoss} id="LastItem">Jip Voss</button>
                </div>
            </div>

            <div className="dropdown">
                <button type="button" onClick={LoadWorkingByTechCode} id="WorkingByButton" className="ItemButton">Working by TechCode</button>
                <div className="dropdown-content">
                    <button type="button" onClick={LoadWorkingByTechCode} id="FirstItem">About working by TechCode</button>
                    <button type="button" onClick={LoadOurPolicies}>Our policies</button>
                    <button type="button" onClick={LoadVacancies} id="LastItem">Vacancies</button>
                </div>
            </div>

            <div className="TechAccountButtonHolder">
                <button type="button" onClick={LoadDashboard} id="MyAccountButton" className="ItemButton"><img src={AccountCirlce}/></button>
            </div>
        </div>
    );
}

export default Buttons;