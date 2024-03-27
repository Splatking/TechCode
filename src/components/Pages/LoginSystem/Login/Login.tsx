import React, { Fragment, useState } from "react";
import "./style.css";
import { Setters } from "../../../Scripts/ScreenHandler";

const RenderLoginScreen: React.FC<Setters> = ({ stateSetterFunctions }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };
    
    //functions
    function Login(){
        if(username != "" && password != ""){
            sessionStorage.setItem("TechName", username);
            stateSetterFunctions.setLoginScreenVisible(false);
            stateSetterFunctions.setHomePageVisible(true);
            stateSetterFunctions.setMenuBarVisible(true);
        } else {
            alert("The values for username or password is empty!");
        }
    }

    function LoadCreateScreen(){
        stateSetterFunctions.setLoginScreenVisible(false);
        stateSetterFunctions.setCreateScreenVisible(true);
    }

    return (
        <Fragment>
            <div className="LoginGUI">
                <div className="ItemHolderLogin">
                    <h1>Login</h1>
                    <p id="LoginText">Username: <input type="text" value={username} onChange={handleUsernameChange} className="UserInput" id="UsernameValue" name="UsernameValue"/><br/>Password: <input type="password" value={password} onChange={handlePasswordChange} className="UserInput" id="PasswordValue" name="PasswordValue"/><br/><br/>Don't you've a TechAccount yet? Click <button onClick={LoadCreateScreen} id="CreationButton">here</button> to create one!</p>
                    <button onClick={Login} id="SystemLoginButton">Login</button>
                </div>
            </div>
            <script type="application/javascript" src="../../../Scripts/DatabaseConnection.js"></script>
        </Fragment>
    );
}

export default RenderLoginScreen;