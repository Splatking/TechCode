import { Fragment, useState, useEffect } from "react";
import VERSION from "../../Scripts/SiteSettings.tsx";
import TechCode_Logo from "../../Images/TechCode_Logo.jpg";
import Buttons from "../MenuButtons/MenuButtons.tsx";
import "./style.css";
import { Setters, HideScreens } from "../../Scripts/ScreenHandler";

const RenderMenuBar: React.FC<Setters> = ({ stateSetterFunctions }) => {
    //variable
    const LoggedInText = document.getElementById("LoginText");
    const LoginButton = document.getElementById("LoginButton");

    const [loggedInUser, setLoggedInUser] = useState(sessionStorage.getItem("TechName") || "-");

    const LoadHomeScreen = () => {
        HideScreens(stateSetterFunctions);
        stateSetterFunctions.setHomePageVisible(true);
    };

    const LoadLoginScreen = () => {
        stateSetterFunctions.setMenuBarVisible(prevState => !prevState);
        HideScreens(stateSetterFunctions);
        stateSetterFunctions.setLoginScreenVisible(true);
    };

    const LoadLoginName = () => {
        if(LoggedInText && LoginButton){
            if(sessionStorage.getItem("TechName") == null){
                LoggedInText.innerHTML = `Logged in as: -`;
                LoginButton.innerHTML = "Login";
            } else {
                LoggedInText.innerHTML = `Logged in as: ${sessionStorage.getItem("TechName")}`;
                LoginButton.innerHTML = "Account settings";
            }
        }
    }

    useEffect(() => {
        const loggedInUser = sessionStorage.getItem("TechName") || "-";
        setLoggedInUser(loggedInUser);
        LoadLoginName();
    }, []);

    return (
        <Fragment>
            <input type="image" src={TechCode_Logo} alt="TechCode Logo" id="TechCodeLogo" onClick={LoadHomeScreen}/>
            <h1>TechCode</h1>
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