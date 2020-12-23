import React from "react";
import classes from './Main.module.css';
import Missions from "./Missions/Missions";

const main = props=>{
    return (
        <div className={classes.Main}>
            <Missions />
            <Missions />
        </div>
    );
}

export default main;