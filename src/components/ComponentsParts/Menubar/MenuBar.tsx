import { Fragment, useState, useEffect } from "react";
import VERSION from "../../../main.tsx";
import TechCode_Logo from "../../Images/TechCode_Logo.jpg";
import Buttons from "../MenuButtons/MenuButtons.tsx";
import "./style.css";

//interfaces
interface MenubarProps {
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
    };
}

const RenderMenuBar: React.FC<MenubarProps> = ({ stateSetterFunctions }) => {
    //functions
    function HideScreens(){
        stateSetterFunctions.setHomePageVisible(false);
        stateSetterFunctions.setProductPageVisible(false);
        stateSetterFunctions.setAccountScreenVisible(false);
        stateSetterFunctions.setDashboardScreenVisible(false);
        stateSetterFunctions.setWorkingByScreenVisible(false);
        stateSetterFunctions.setTeamScreenVisible(false);
    }

    //variable
    const LoggedInText = document.getElementById("LoginText");
    const LoginButton = document.getElementById("LoginButton");

    const [loggedInUser, setLoggedInUser] = useState(sessionStorage.getItem("TechName") || "-");

    useEffect(() => {
        const loggedInUser = sessionStorage.getItem("TechName") || "-";
        setLoggedInUser(loggedInUser);
    }, []);

    const LoadHomeScreen = () => {
        HideScreens();
        stateSetterFunctions.setHomePageVisible(true);
    };

    const LoadLoginScreen = () => {
        stateSetterFunctions.setMenuBarVisible(prevState => !prevState);
        HideScreens();
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

    LoadLoginName();
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