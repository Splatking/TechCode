
import { Fragment } from "react/jsx-runtime";
import "./Products.css";

function ProductsScreen(){
    return <Fragment>
        <div className="ProductGUI">
            <h1 className="Title" id="ProductTitle">Projects</h1>
            <div className="ItemHolderProducts" id="ItemHolderProducts">
                <div className="AllProjects">
                    <div className="ProjectCategory" id="FromTechCode">
                        <h2 className="SubTitle" id="ProjectCategoryTitle">Projects by: TechCode</h2>
                        <div className="ProjectScroller">
                            <div className="ProjectItem" id="TechCodeAssistanceProject">
                                <h2 className="ProjectTitle">TechCode Assistance</h2>
                                <p className="ProjectDescription">TechCode Assistance is a discord bot, which does the admin stuff in the server from TechCode!</p>
                                <button className="Button" id="MoreInfoProjectButton">More info</button>
                            </div>
                        </div>
                    </div>
                    <div className="ProjectCategory" id="FromJipVoss">
                        <h2 className="SubTitle" id="ProjectCategoryTitle">Projects by: Jip Voss</h2>
                        <div className="ProjectScroller">
                            <div className="ProjectItem" id="GlowProject">
                                <h2 className="ProjectTitle">Glow</h2>
                                <p className="ProjectDescription">Cubes placed in a group which can be activated by touch!</p>
                                <button className="Button" id="MoreInfoProjectButton">More info</button>
                            </div>
                            <div className="ProjectItem" id="VRIntroductionProject">
                                <h2 className="ProjectTitle">VR Introduction</h2>
                                <p className="ProjectDescription">Creating a VR experience which trains people into VR, so they can get started with their forklift training.</p>
                                <button className="Button" id="MoreInfoProjectButton">More info</button>
                            </div>
                            <div className="ProjectItem" id="TechCodeSiteProject">
                                <h2 className="ProjectTitle">TechCode website</h2>
                                <p className="ProjectDescription">The making of the TechCode site project.</p>
                                <button className="Button" id="MoreInfoProjectButton">More info</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
}

export default ProductsScreen;