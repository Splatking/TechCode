import { useState, useEffect, Fragment, ChangeEvent } from "react";
import TerminationIcon from "../../../components/Icons/delete_forever_24dp_FILL0_wght400_GRAD0_opsz24.png";
import "./style.css";

function ExportTable() {
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        loadData();
    }, []);

    function loadData() {
        fetch('http://localhost/TechCodeDatabase/Api/ServerWorkersConnection.php', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            setTableData(data);
        })
        .catch(error => {
            console.error('Error:', error);
            alert("An error occurred while loading data");
        });
    }

    function UpdateRole(event: ChangeEvent<HTMLSelectElement>, techId: any, Gebruikersnaam: any, Email: any) {
        const newRole = event.target.value;
        fetch('http://localhost/TechCodeDatabase/Api/ServerRoleUpdate.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ techId, newRole, Gebruikersnaam, Email }),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert("An error occurred while updating role");
        });
    }

    function AccountTermination(techId: any, Gebruikersnaam: any, Email: any) {
        fetch('http://localhost/TechCodeDatabase/Api/ServerAccountTermination.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ techId, Gebruikersnaam, Email }),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert("An error occurred while terminating account");
        });
    }

    return (
        <Fragment>
            <table id="AccountsTable">
                <thead>
                    <tr>
                        <th>Tech_ID</th>
                        <th>Gebruikersnaam</th>
                        <th>Voornaam</th>
                        <th>Achternaam</th>
                        <th>Geboortedatum</th>
                        <th>Email</th>
                        <th>Werkmail</th>
                        <th>Rol</th>
                        <th>Account termination</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map(row => (
                        <tr key={row.Tech_ID}>
                            <td>{row.Tech_ID}</td>
                            <td>{row.Gebruikersnaam}</td>
                            <td>{row.Voornaam}</td>
                            <td>{row.Achternaam}</td>
                            <td>{row.Geboortedatum}</td>
                            <td>{row.Email}</td>
                            <td>{row.Werkmail}</td>
                            <td>
                                {sessionStorage.getItem("Rol") === "[HOM]Head Of Managers" ? (
                                    <select value={row.Rol} onChange={(event) => UpdateRole(event, row.Tech_ID, row.Gebruikersnaam, row.Email)} name="RoleSelection" id="RoleSelection">
                                        <optgroup label="H-roles">
                                            <option value="[HOM]Head Of Managers">[HOM]Head Of Managers</option>
                                            <option value="[HOD]Head Of Developers">[HOD]Head Of Developers</option>
                                            <option value="[HDS]Head of Designers">[HDS]Head of Designers</option>
                                            <option value="[HMP]Head of Music Producers">[HMP]Head of Music Producers</option>
                                            <option value="[HTR]Head of Translators">[HTR]Head of Translators</option>
                                            <option value="[HOT]Head Of Testers">[HOT]Head Of Testers</option>
                                            <option value="[HCE]Head of Community Engagement">[HCE]Head of Community Engagement</option>
                                        </optgroup>
                                        <optgroup label="Supervision roles">
                                            <option value="[PRA]People Relationship Advisor">[PRA]People Relationship Advisor</option>
                                        </optgroup>
                                        <optgroup label="Development roles">
                                            <option value="[D]Developer">[D]Developer</option>
                                            <option value="[DS]Designer">[DS]Designer</option>
                                            <option value="[MP]Music Producer">[MP]Music Producer</option>
                                            <option value="[TR]Translator">[TR]Translator</option>
                                            <option value="[T]Tester">[T]Tester</option>
                                        </optgroup>
                                        <optgroup label="Customer roles">
                                            <option value="[TC]TechCoder">[TC]TechCoder</option>
                                            <option value="[G]Guest">[G]Guest</option>
                                        </optgroup>
                                    </select>
                                ) : (
                                    row.Rol
                                )}
                            </td>
                            <td><input type="image" onClick={() => AccountTermination(row.Tech_ID, row.Gebruikersnaam, row.Email)} src={TerminationIcon} id="TerminationButton"/></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Fragment>
    );
}

export default ExportTable;
