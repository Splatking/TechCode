import "./Team.css";

function RenderTeamScreen() {
    return (
        <div>
            <h1 id="TitleTeam">Our team</h1>
            <div className="LineItem">
                <div className="TableOfRanks">
                    <h1 id="TableOfRanksTitle">Table of ranking</h1>
                    <table className="RankingTable">
                        <tr>
                            <th>Rank</th>
                            <th>Department</th>
                            <th>Level</th>
                        </tr>
                        <tr>
                            <td>[HOM]Head Of Managers</td>
                            <td>Directors</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>[HOD]Head Of Developers</td>
                            <td>Supervision</td>
                            <td>3</td>
                        </tr>
                        <tr>
                            <td>[HDS]Head of Designers</td>
                            <td>Supervision</td>
                            <td>3</td>
                        </tr>
                        <tr>
                            <td>[HMP]Head of Music Producers</td>
                            <td>Supervision</td>
                            <td>3</td>
                        </tr>
                        <tr>
                            <td>[HTR]Head of Translators</td>
                            <td>Supervision</td>
                            <td>3</td>
                        </tr>
                        <tr>
                            <td>[HCE]Head of Community Engagment</td>
                            <td>Supervision</td>
                            <td>3</td>
                        </tr>
                        <tr>
                            <td>[PRA]People Relationship Advisors</td>
                            <td>HR</td>
                            <td>2</td>
                        </tr>
                        <tr>
                            <td>[D]Developers</td>
                            <td>Development</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>[DS]Designers</td>
                            <td>Design</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>[MP]Music Producers</td>
                            <td>Music Production</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>[TR]Translators</td>
                            <td>Translating</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td id="LastItemL">[T]Testers</td>
                            <td>Testing</td>
                            <td id="LastItem">1</td>
                        </tr>
                    </table>
                </div>
                <div className="IntroductionGUI">
                    <p>
                        The TechCode community is devided in different department, in which each department needs to work with eachother to create a final product! On the left you can see which ranks there are and how those ranks are devided within the departments.<br/><br/>
                        Even though this table shows your level, we don't like to call it like that within the company. Each person is unique and everyone can bring in their own specialities within the company. It's important that we all can work on the way we would to do and discover your own talents!<br/><br/>
                        The TechCode community is ready to take your challenges on! But we're also ready to see what you can bring onto the table, show us your work and the team will be happy to welcome you!
                    </p>
                </div>
            </div>
        </div>
    );
}

export default RenderTeamScreen;