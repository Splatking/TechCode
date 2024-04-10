import { Fragment, useState, useEffect } from "react";
import VERSION from "../../Scripts/SiteSettings.tsx";
import TechCode_Logo from "../../Images/TechCode_Logo.jpg";
import Buttons from "../MenuButtons/MenuButtons.tsx";
import "./style.css";
import { Setters, HideScreens } from "../../Scripts/ScreenHandler";

const RenderMenuBar: React.FC<Setters> = ({ stateSetterFunctions }) => {
    //variable
    const LoginButton = document.getElementById("LoginButton");

    const [loggedInUser, setLoggedInUser] = useState(sessionStorage.getItem("TechName") || "-");

    const LoadHomeScreen = () => {
        HideScreens(stateSetterFunctions);
        stateSetterFunctions.setHomePageVisible(true);
    };

    const LoadLoginScreen = () => {
        if(LoginButton?.innerHTML == "Login"){
            stateSetterFunctions.setMenuBarVisible(prevState => !prevState);
            HideScreens(stateSetterFunctions);
            stateSetterFunctions.setLoginScreenVisible(true);
        } else {
            sessionStorage.clear();
            stateSetterFunctions.setMenuBarVisible(prevState => !prevState);
            HideScreens(stateSetterFunctions);
            stateSetterFunctions.setLoginScreenVisible(true);
        }
    };

    const LoadLoginName = () => {
        if(LoginButton){
            if(sessionStorage.getItem("Username") == null){
                LoginButton.innerHTML = "Login";
            } else {
                LoginButton.innerHTML = "Logout";
            }
        }
    }

    useEffect(() => {
        const loggedInUser = sessionStorage.getItem("Username") || "-";
        setLoggedInUser(loggedInUser);
        LoadLoginName();
    }, []);

    return (
        <Fragment>
            <div className="CompanyItems">
                <input type="image" src={TechCode_Logo} alt="TechCode Logo" id="TechCodeLogo" onClick={LoadHomeScreen}/>
                <h1 id="TechName">TechCode</h1>
            </div>
            <Buttons stateSetterFunctions={stateSetterFunctions}/>
            <div className="AccountItems">
                <p id="LoginText">Logged in as: {loggedInUser}</p>
                <button type="button" onClick={LoadLoginScreen} id="LoginButton"><span>Login </span></button>
                <p id="VERSION">Version: {VERSION}</p>
            </div>
        </Fragment>
    );
}

export default RenderMenuBar;