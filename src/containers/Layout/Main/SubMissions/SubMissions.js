import React from "react";
import classes from "./SubMissions.module.css";
import SubMission from "./SubMission/SubMission";

const SubMissions = props => {
    
    return (
        <ul className={classes.SubMissions}>
            <li>
                <SubMission />
            </li>    
            <li>
                <SubMission />
            </li>    
            <li>
                <SubMission />
            </li>                     
        </ul>
    );
}


export default SubMissions;