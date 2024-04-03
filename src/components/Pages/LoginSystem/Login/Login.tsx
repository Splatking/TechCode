import React, { Fragment, useState } from "react";
import "./style.css";
import { Setters } from "../../../Scripts/ScreenHandler";
import getCookie from "../../../Scripts/CookiesHandler";

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
        if (username !== "" && password !== "") {
            fetch('ServerLogin.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept' : 'application/json'
                },
                body: JSON.stringify({ username, password }),
            })
            .then(response => {
                if (response.ok) {
                    //setting up the local storage to communicate over the site
                    sessionStorage.setItem("Tech_ID", getCookie("Tech_ID"));
                    sessionStorage.setItem("Username", getCookie("Username"));
                    sessionStorage.setItem("Firstname", getCookie("Firstname"));
                    sessionStorage.setItem("Lastname", getCookie("Lastname"));
                    sessionStorage.setItem("Birthday", getCookie("Birthday"));
                    sessionStorage.setItem("Email", getCookie("Email"));
                    sessionStorage.setItem("WorkEmail", getCookie("WorkEmail"));
                    sessionStorage.setItem("Phonenumber", getCookie("Phonenumber"));
                    sessionStorage.setItem("Country", getCookie("Country"));
                    sessionStorage.setItem("Adres", getCookie("Adres"));
                    sessionStorage.setItem("DeliverCode", getCookie("DeliverCode"));
                    sessionStorage.setItem("Rol", getCookie("Rol"));

                    stateSetterFunctions.setLoginScreenVisible(false);
                    stateSetterFunctions.setHomePageVisible(true);
                    stateSetterFunctions.setMenuBarVisible(true);
                } else {
                    alert("Invalid username or password");
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert("An error occurred while logging in");
            });
        } else {
            alert("The values for username or password are empty!");
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
        </Fragment>
    );
}

export default RenderLoginScreen;