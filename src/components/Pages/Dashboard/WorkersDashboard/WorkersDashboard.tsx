import { Fragment } from "react/jsx-runtime";
import "./style.css";
import { useEffect } from "react";
import Table from "../../../ComponentsParts/AccountTable/Table";


function RenderMainScreen(){
    useEffect(() => {
        
    })

    return (
        <Fragment>
            <div className="WorkerDashboardGUI">
                <div className="LeftGUI">
                    <div className="CustomerGUI">
                        <h1>Accounts</h1>
                    </div>
                </div>
                <div className="RightGUI">
                    <div className="UsefullLinks">
                        <h1>Useful links</h1>
                    </div>
                    <div className="AccountInformation">
                        <h1>AccountInformation</h1>
                        <Table />
                    </div>  
                </div>        
            </div>
        </Fragment>
    );
}

export default RenderMainScreen;