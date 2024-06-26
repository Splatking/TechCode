import { Fragment, useState } from "react";

function RenderTable(){
    const TechID = useState(sessionStorage.getItem("Tech_ID") || "-");
    const [username, setUsername] = useState(sessionStorage.getItem("Username") || "-");
    const [DiscordID, setDiscordID] = useState(sessionStorage.getItem("Discord") || "-");
    const [firstname, setFirstname] = useState(sessionStorage.getItem("Firstname") || "-");
    const [lastname, setLastname] = useState(sessionStorage.getItem("Lastname") || "-");
    const [birthday, setBirthday] = useState(sessionStorage.getItem("Birthday") || "-");
    const [email, setEmail] = useState(sessionStorage.getItem("Email") || "-");
    const [phonenumber, setPhonenumber] = useState(sessionStorage.getItem("Phonenumber") || "-");
    const [country, setCountry] = useState(sessionStorage.getItem("Country") || "-");
    const [adres, setAdress] = useState(sessionStorage.getItem("Adres") || "-");
    const [delivercode, setDelivercode] = useState(sessionStorage.getItem("DeliverCode") || "-");

    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    const handleDiscordIDChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDiscordID(event.target.value);
    };


    const handleFirstnameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFirstname(event.target.value);
    };

    const handleLastnameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLastname(event.target.value);
    };

    const handleBirthdayChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setBirthday(event.target.value);
    };

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handlePhonenumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPhonenumber(event.target.value);
    };

    const handleCountryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCountry(event.target.value);
    };

    const handleAdresChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAdress(event.target.value);
    };

    const handleDelivercodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDelivercode(event.target.value);
    };

    function UpdateUserData(){
        if(username !== "" && DiscordID !== "" && firstname !== "" && lastname !== "" && birthday !== "" && email !== "" && phonenumber !== ""){
            fetch('http://localhost/TechCodeDatabase/Api/ServerUpdateUser.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept' : 'application/json'
                           },
                body: JSON.stringify({ TechID: TechID[0], username, DiscordID, email, phonenumber, birthday, firstname, lastname, country, adres, delivercode }),
            })
            .then(response => {
                if(response.ok){
                    fetch('http://localhost/TechCodeDatabase/Api/ServerLogin.php', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Accept': 'application/json'
                        },
                        body: JSON.stringify({ TechID: TechID[0] }),
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

                        if(data.GivenDiscordID !== null && data.GivenDiscordID !== undefined){
                            sessionStorage.setItem("Discord", data.GivenDiscordID);
                        }                        
                    })
                    .catch(error => {
                        console.error('Error:', error.message);
                        alert(error.message);
                    });
                } else {
                    alert("Failed to connect with the server!");
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert("An error occurred while logging in");
            });
        } else {
            alert("You're missing one of the following items: Username, Firstname, Lastname, Birthday, Email or Phonennumber! Can you fill out this one as well? Otherwise we don't get to know you good enough!");
        }
    }

    return (
        <Fragment>
            <table className="AccountTable">
                <tr>
                    <th>Userdata: {sessionStorage.getItem("Username")}</th>
                    <th>Current information</th>
                    <th>New information</th>
                </tr>
                <tr>
                    <td>TechID:</td>
                    <td className="UserData" id="TechID">{sessionStorage.getItem("Tech_ID")}</td>
                </tr>
                <tr>
                    <td>Username:</td>
                    <td className="UserData" id="Username">{sessionStorage.getItem("Username")}</td>
                    <td><input type="text" value={username} onChange={handleUsernameChange} className="UserInput" id="UsernameValue" name="UsernameValue"/></td>
                </tr>
                <tr>
                    <td>DiscordID:</td>
                    <td className="UserData" id="DiscordID">{sessionStorage.getItem("Discord")}</td>
                    <td><input type="text" value={DiscordID} onChange={handleDiscordIDChange} className="UserInput" id="DiscordValue" name="DiscordValue"/></td>
                </tr>
                <tr>
                    <td>Firstname:</td>
                    <td className="UserData" id="Firstname">{sessionStorage.getItem("Firstname")}</td>
                    <td><input type="text" value={firstname} onChange={handleFirstnameChange} className="UserInput" id="FirstnameValue" name="FirstnameValue"/></td>
                </tr>
                <tr>
                    <td>Lastname:</td>
                    <td className="UserData" id="Lastname">{sessionStorage.getItem("Lastname")}</td>
                    <td><input type="text" value={lastname} onChange={handleLastnameChange} className="UserInput" id="LastnameValue" name="LastnameValue"/></td>
                </tr>
                <tr>
                    <td>Birthday:</td>
                    <td className="UserData" id="Birthday">{sessionStorage.getItem("Birthday")}</td>
                    <td><input type="date" value={birthday} onChange={handleBirthdayChange} className="UserInput" id="BirthdayValue" name="BirthdayValue"/></td>
                </tr>
                <tr>
                    <td>Email:</td>
                    <td className="UserData" id="Email">{sessionStorage.getItem("Email")}</td>
                    <td><input type="email" value={email} onChange={handleEmailChange} className="UserInput" id="EmailValue" name="EmailValue"/></td>
                </tr>
                <tr>
                    <td>Phonenumber:</td>
                    <td className="UserData" id="Phonenumber">{sessionStorage.getItem("Phonenumber")}</td>
                    <td><input type="text" value={phonenumber} onChange={handlePhonenumberChange} className="UserInput" id="PhonenumberValue" name="PhonenumberValue"/></td>
                </tr>
                <tr>
                    <td>Country:</td>
                    <td className="UserData" id="Country">{sessionStorage.getItem("Country")}</td>
                    <td><input type="text" value={country} onChange={handleCountryChange} className="UserInput" id="CountryValue" name="CountryValue"/></td>
                </tr>
                <tr>
                    <td>Adress:</td>
                    <td className="UserData" id="Adress">{sessionStorage.getItem("Adres")}</td>
                    <td><input type="text" value={adres} onChange={handleAdresChange} className="UserInput" id="AdresValue" name="AdresValue"/></td>
                </tr>
                <tr>
                    <td>Delivercode:</td>
                    <td className="UserData" id="Delivercode">{sessionStorage.getItem("DeliverCode")}</td>
                    <td><input type="text" value={delivercode} onChange={handleDelivercodeChange} className="UserInput" id="DelivercodeValue" name="DelivercodeValue"/></td>
                </tr>
                <tr>
                    <td>Rank:</td>
                    <td className="UserData" id="Rank">{sessionStorage.getItem("Rol")}</td>
                </tr>
            </table>
            <button onClick={UpdateUserData}>Change userdata</button>
        </Fragment>
    )
}

export default RenderTable;