import { Fragment } from "react/jsx-runtime";
import "./style.css";
import JipVossImage from "../../Images/JipVoss.png";
import LinkedIn_Logo from "../../Images/LinkedIn_Logo.png";
import Instagram_Logo from "../../Images/Instagram_Logo.png";

//Loaders
import { LoadLinkedIn, LoadInstagram } from "../../Scripts/Loaders";

function JipVoss() { 
    return (
        <Fragment>
            <div className="PortofolioDIV">
                <div className="PortofolioItems">
                    <h1 className="Title" id="JipVossTitle">Jip Voss</h1>
                    <div className="InformationDIV">
                        <p className="PersonalText" id="First_Lines">
                            Let's go! One of the owners of TechCodeAlright to give you guys a better view of who I am, I will describe who I’m. So, I’m Jip Voss (that boy somewhere in the middle of this page), semester 2 student Open Learning and Delta at Fontys Hogeschool ICT. I’m 18 years old. I live in Oisterwijk and I’m working for the Albert Heijn there. Normally I’m writing in Dutch but because this learning route is in English, I will try and adapt to the English language within the writings of documentation (which can and will bring me opportunities to grow in the English language). At the Albert Heijn, I work as a self refiller. My hobbies are gaming, programming and watching/making mêmes. From one of those hobbies, I want to make my job later, you’ve probably guessed it already but that is the programming one. I’m going further into the programming hobby. I started programming around the age of 13 years, so quick math I’ve been doing it now around 5 years long. I’ve got experience in different languages, think of languages like:
                        </p>
                        <ul>
                            <li>Java(script)</li>
                            <li>LUA</li>
                            <li>PHP</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>C++</li>
                            <li>C#</li>
                            <li>MySQL</li>
                        </ul>
                        <p className="PersonalText" id="Second_Lines">
                            A wide variety of languages I would say. All languages do different types of things. Some are complexxer as others, but each language has its own difficulties, and I will adapt to those so I can use every language whenever I need to. My skills are coding, group leading, motivating others to work on projects and be a very enthusiastic person (for ICT and being a general happy human being).<br/>   
                            <img src={JipVossImage} alt="Jip Voss" id="ImageJipVoss"/><br/><br/>
                            The first semester I've done within Open Learning and Delta was this year. Within that year I've gained some new experiences!:
                        </p>
                        <ul>
                            <li>Working within VR</li>
                            <li>Using Unity</li>
                            <li>Typescript</li>
                            <li>React</li>
                            <li>Working with a framework</li>
                            <li>Working with GIT (in Github and Gitlab)</li>
                        </ul>
                        <p className="PersonalText" id="Third_Lines">
                            Besides all the ICT fun I'm also taking driving lessons at the moment. I still have a few steps to go for the pink paper, but it’s going pretty steady now.<br/><br/>
                            Oh yeah! Before I forget I also have an instagram page: <input type="image" src={Instagram_Logo} alt="Instagram Logo" onClick={LoadInstagram} className="ThirdPartyLogo" id="InstagramLogo"/> <a href="https://www.instagram.com/jipthefox/Links">Instagram page</a> (hit that follow button now gamers)!<br/>
                            You can also check me out on: <input type="image" src={LinkedIn_Logo} alt="LinkedIn Logo" onClick={LoadLinkedIn} className="ThirdPartyLogo" id="LinkedInLog"/> <a href="https://www.linkedin.com/in/jip-v-6167a22b4/">LinkedIn page</a>
                        </p>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default JipVoss;