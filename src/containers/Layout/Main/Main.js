import React from "react";
import classes from './Main.module.css';
import Missions from "./Missions/Missions";
import SubMissions from "./SubMissions/SubMissions";

const main = props=>{
    return (
        <div className={classes.Main}>
            <Missions />
            <SubMissions />
        </div>
    );
}

export default main;