import React from 'react';
import classes from './MissionControls.module.css';

const missionControls = props => {
    return (
        <div className={classes.Container}>
            <i className={classes.MissionControl + " fas fa-play"}></i>
            <i className={classes.MissionControl + " fas fa-pause"}></i>
            <i className={classes.MissionControl + " fas fa-redo-alt"}></i>
            <i className={classes.MissionControl + " fas fa-skull-crossbones"}></i>
        </div>
    );
}

export default missionControls;