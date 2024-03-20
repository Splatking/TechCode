import React, { Fragment, useState } from "react";
import "./style.css";
import { Setters } from "../../../Scripts/ScreenHandler";

const RenderCreateScreen: React.FC<Setters> = ({ stateSetterFunctions }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phonenumber, setPhonenumber] = useState('');
    const [birthday, setBirthday] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const checkbox = document.getElementById('AcceptanceValue') as HTMLInputElement | null;

    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handlePhonenumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPhonenumber(event.target.value);
    };

    const handleBirthdayChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setBirthday(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handlePassword2Change = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword2(event.target.value);
    };

    //functions
    function CreateAccount(){
        if(checkbox?.checked == true){
            if(username != "" && password != ""){
                sessionStorage.setItem("TechName", username);
                stateSetterFunctions.setLoginScreenVisible(false);
                stateSetterFunctions.setHomePageVisible(true);
                stateSetterFunctions.setMenuBarVisible(true);
            } else {
                alert("The values for username or password is empty!");
            }
        } else {
            alert("You didn't agree to our policies!");
        }
    }

    function LoadLoginScreen(){
        stateSetterFunctions.setLoginScreenVisible(true);
        stateSetterFunctions.setCreateScreenVisible(false);
    }

    return (
        <Fragment>
            <div className="LoginGUI">
                <div className="ItemHolderLogin">
                    <h1>Create TechAccount</h1>
                    <p id="LoginText">Username: <input type="text" value={username} onChange={handleUsernameChange} className="UserInput" id="UsernameValue" name="UsernameValue"/><br/>E-mail: <input type="email" value={email} onChange={handleEmailChange} className="EmailInput" id="EmailValue" name="EmailValue"/><br/>Phonenumber: <input type="text" value={phonenumber} onChange={handlePhonenumberChange} className="PhonenumberInput" id="PhonenumberValue" name="PhonenumberValue"/><br/>Birthday: <input type="date" value={birthday} onChange={handleBirthdayChange} className="BirthdayInput" id="BirthdayValue" name="BirthdayValue"/><br/>Password: <input type="password" value={password} onChange={handlePasswordChange} className="PasswordInput" id="PasswordValue" name="PasswordValue"/><br/>Repeat password: <input type="password" value={password2} onChange={handlePassword2Change} className="Password2Input" id="Password2Value" name="Password2Value"/><br/>I have accept the userpolicy and privacypolicy of TechCode <input type="checkbox" className="AcceptanceInput" id="AcceptanceValue" name="AcceptanceValue"/><br/><br/>Don't you've a TechAccount yet? Click <button onClick={LoadLoginScreen} id="CreationButton">here</button> to create one!</p>
                    <button onClick={CreateAccount} id="SystemCreateButton">Create TechAccount</button>
                </div>
            </div>
        </Fragment>
    );
}

export default RenderCreateScreen;