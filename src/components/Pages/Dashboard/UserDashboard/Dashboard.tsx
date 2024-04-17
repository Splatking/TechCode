import { Fragment } from "react/jsx-runtime";
import "./Dashboard.css";
import Table from "../../../ComponentsParts/AccountTable/Table";

function RenderMainScreen(){
    return (
        <Fragment>
            <div className="DashboardGUI">
                <h1>Account information</h1>
                <p id="WelcomesMessage">Hey {sessionStorage.getItem("Username")}, what good to see that you've created an TechAccount! Here is all the data you need and which your able to change.</p>
                <Table />
            </div>
        </Fragment>
    );
}

export default RenderMainScreen;