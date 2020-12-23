import React from 'react';
import classes from './MissionControls.module.css';

const missionControls = props => {
    return (
        <div className={classes.Container}>
            <button className = {classes.MissionButton}> 
                <i className={classes.MissionControl + " fas fa-play"}></i>
            </button>
           
            <button className = {classes.MissionButton}>
                <i className={classes.MissionControl + " fas fa-pause"}></i>
            </button>

            <button className = {classes.MissionButton}>
                <i className={classes.MissionControl + " fas fa-redo-alt"}></i>
            </button>

            <button className = {classes.MissionButton}>
                 <i className={classes.MissionControl + " fas fa-skull-crossbones"}></i>
            </button>
        </div>
    );
}

export default missionControls;