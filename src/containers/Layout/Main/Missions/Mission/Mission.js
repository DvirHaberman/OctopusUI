import React from "react";
import classes from './Mission.module.css';
import MissionControls from '../../../../../components/UI/MissionControls/MissionControls';
import MissionStatus from "../../../../../components/UI/MissionStatus/MissionStatus";
const mission = props => {
    return (
        <li className={classes.li}>
            <h1>Mission XYZ</h1>
            <MissionStatus/>
            <MissionControls/>
        </li>
    );
}

export default mission;