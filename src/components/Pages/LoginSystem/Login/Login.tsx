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
    function Login() {
        if (username !== "" && password !== "") {
            fetch('ServerLogin.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({ username, password }),
            })
            .then(function (response) {
                console.log(response.status);
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Invalid username or password');
                }
            })
            .then(function (data) {
                sessionStorage.setItem("Tech_ID", data.GivenID);
                sessionStorage.setItem("Username", data.GivenUsername);
                sessionStorage.setItem("Firstname", data.GivenFirstname);
                sessionStorage.setItem("Lastname", data.GivenLastname);
                sessionStorage.setItem("Birthday", data.GivenBirthday);
                sessionStorage.setItem("Email", data.GivenEmail);
                sessionStorage.setItem("WorkEmail", data.GivenWorkMail);
                sessionStorage.setItem("Phonenumber", data.GivenPhoneNumber);
                sessionStorage.setItem("Country", data.GivenLand);
                sessionStorage.setItem("Adres", data.GivenAdres);
                sessionStorage.setItem("DeliverCode", data.GivenDeliverCode);
                sessionStorage.setItem("Rol", data.GivenRol);
    
                stateSetterFunctions.setLoginScreenVisible(false);
                stateSetterFunctions.setHomePageVisible(true);
                stateSetterFunctions.setMenuBarVisible(true);
            })
            .catch(error => {
                console.error('Error:', error.message);
                alert(error.message);
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