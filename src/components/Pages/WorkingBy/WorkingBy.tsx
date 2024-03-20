import { Fragment } from "react/jsx-runtime";
import "./style.css";
import WorkingImage from "../../Images/Working_Image.png"

interface WorkingByProps {
    stateSetterFunctions: {
      setMenuBarVisible: React.Dispatch<React.SetStateAction<boolean>>;
      setHomePageVisible: React.Dispatch<React.SetStateAction<boolean>>;
      setProductPageVisible: React.Dispatch<React.SetStateAction<boolean>>;
      setAccountScreenVisible: React.Dispatch<React.SetStateAction<boolean>>;
      setLoginScreenVisible: React.Dispatch<React.SetStateAction<boolean>>;
      setCreateScreenVisible: React.Dispatch<React.SetStateAction<boolean>>;
      setWorkingByScreenVisible: React.Dispatch<React.SetStateAction<boolean>>;
      setTeamScreenVisible: React.Dispatch<React.SetStateAction<boolean>>;
      setJipVossVisible: React.Dispatch<React.SetStateAction<boolean>>;
    };
}

const WorkingByScreen: React.FC<WorkingByProps> = ({ stateSetterFunctions }) => {
    //functions
    function HideScreens(){
        stateSetterFunctions.setHomePageVisible(false);
        stateSetterFunctions.setProductPageVisible(false);
        stateSetterFunctions.setAccountScreenVisible(false);
        stateSetterFunctions.setWorkingByScreenVisible(false);
    }

    function LoadVacancies(){
        HideScreens();
        stateSetterFunctions.setHomePageVisible(true);
    }

    return (
        <Fragment>
            <h1 id="PageTitle" className="LetterOnBlack">Working by TechCode! Your dreams, our reality!!!</h1>
            <div className="Onliner">
                <img id="WorkingImage" src={WorkingImage} alt="Working people"/>
                <p className="LetterOnBlack" id="WhyToWorkText">
                    Working by TechCode, how would it look like? I'm going to explain you!<br/><br/>
                    TechCode is an company created by a few friends within highschool!<br/>
                    We're aiming for the future of Technology and ICT. What this means is that we want to innovate and be a step ahead of our competitors.<br/>
                    We think that creating stuff in your own way gives you and after all us as well oppertunities to grow and be as innovative as we want to be.<br/>
                    Therefor we've a few nice touches to work!:
                    <ul>
                        <li>Working in diversity teams</li>
                        <li>Being paid 13 times a year</li>
                        <li>Bonussen</li>
                        <li>minimal 21 vacationdays + holidays</li>
                        <li>Free food</li>
                        <li>Sales on games and other intern items</li>
                        <li>Growing oppertunities within the company</li>
                        <li>Teambuilding activities</li>
                        <li>Access to cool channels within our discord group and our own dashboard</li>
                    </ul><br/>

                    Sounds nice and all. But how is the working flow within TechCode? By TechCode we work with the scrum method. You and a team will be assigned to an project, which you will tackle using scrum.<br/>
                    Delivering within different sprints and using this method allows us to see your progression and give you points within the point system.<br/>
                    Points will be assigned to every employee of TechCode based on the work they deliver. Points also can be added for coming in at time, taking over some shifts and helping others. This so we can create a teamspirit within the compay. Because teams are very important for our company otherwise we can't make sure things are happening.<br/><br/>
                </p>
            </div>
            <p className="LetterOnBlack" id="CoreValuesText">
                Here are some core values of TechCode, in these values we describe for type of person we're looking for and where to watch out for while applying at TechCode:
                <ul>
                    <li>Be yourself</li>
                    <li>Have respect for others</li>
                    <li>Have a teamspirit</li>
                    <li>Working for growth</li>
                    <li>Being able to solve problems</li>
                    <li>Working means also learning, making mistakes</li>
                </ul><br/>
                Did we gain your interest? Go to our vacancies to find out what we've to offer for you!
            </p>
            <div className="Oppertunity_Choser">
                <p>Looking for a new job oppertunity within TechCode? Let's go and see what fits you the best!</p>
                <button type="button" onClick={LoadVacancies} className="QuickMenuButton">Load all vacancies</button>
            </div>
        </Fragment>
    );
}

export default WorkingByScreen;