import { Fragment } from "react/jsx-runtime";
import "./style.css";
import Table from "../../../ComponentsParts/AccountTable/Table";
import WorkersTable from "../../../ComponentsParts/AllAccountsInformation/AccountLoader";


function RenderMainScreen(){
    return (
        <Fragment>
            <div className="WorkerDashboardGUI">
                <div className="LeftGUI">
                    <div className="CustomerGUI">
                        <h1>Accounts</h1>
                        <WorkersTable />
                    </div>
                </div>
                <div className="RightGUI">
                    <div className="UsefullLinks">
                        <h1>Useful links</h1>
                        <div className="Links">
                            <p>No links in here yet!</p>
                        </div>
                    </div>
                    <div className="AccountInformation">
                        <h1>My account information</h1>
                        <Table />
                    </div>  
                </div>        
            </div>
        </Fragment>
    );
}

export default RenderMainScreen;