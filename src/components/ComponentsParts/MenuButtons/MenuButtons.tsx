//imports
import React from "react";
import "./style.css";
import { Setters, HideScreens } from "../../Scripts/ScreenHandler";

const Buttons: React.FC<Setters> = ({ stateSetterFunctions }) => {
    function LoadDashboard(){
        HideScreens(stateSetterFunctions);
        if(sessionStorage.getItem("Username") == null){
            stateSetterFunctions.setMenuBarVisible(false);
            stateSetterFunctions.setLoginScreenVisible(true);
        } else {
            stateSetterFunctions.setDashboardScreenVisible(true);
        }
    };

    function LoadProductPage(Type: string){
        const ProductGUI = document.getElementById("ItemHolderProducts");

        HideScreens(stateSetterFunctions);
        stateSetterFunctions.setProductPageVisible(true);

        if(ProductGUI){
            ProductGUI.setAttribute("data-filter", Type);
        }
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
                <button type="button" onClick={() => LoadProductPage("None")} id="ProductsButton" className="ItemButton">Products</button>
                <div className="dropdown-content">
                    <button type="button" onClick={() => LoadProductPage("Software")} id="FirstItem">Software</button>
                    <button type="button" onClick={() => LoadProductPage("Hardware")}>Hardware</button>
                    <button type="button" onClick={() => LoadProductPage("Gaming")} id="LastItem">Gaming</button>
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
                <button type="button" onClick={LoadDashboard} id="MyAccountButton" className="ItemButton">Tech Account</button>
            </div>
        </div>
    );
}

export default Buttons;