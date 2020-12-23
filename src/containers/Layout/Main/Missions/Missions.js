import React from 'react';
import classes from './Missions.module.css';
import Mission from "./Mission/Mission";
const missions = props => {
    return (
        <ul className={classes.ul}>
            <Mission/>
            <Mission/>
            <Mission/>
            <Mission/>
            <Mission/>
            <Mission/>
        </ul>
    );
}

export default missions;