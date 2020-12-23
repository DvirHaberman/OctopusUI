import React from "react";
import classes from './MissionStatus.module.css';
const missionStatus = props => {
    return (
        <div className={classes.Container}>
            <div className={classes.Status}>
                <div className = {classes.CircularBorder}>
                    <i className={([classes.MissionStatus, classes.PartialSuccess]).join(' ') + " fas fa-check-circle"}></i>
                </div>
                <h5>1-fails</h5>
            </div>
            <div className={classes.Status}>
                <div className = {classes.CircularBorder}>
                    <i className={([classes.MissionStatus, classes.Success]).join(' ') + " fas fa-cubes"}></i>
                </div>
                <h5>4-fails</h5>
            </div>
            <div className={classes.Status}>
                <div className = {[classes.CircularBorder, classes.CircularBorderRunIcon].join(' ')}>
                    <i className={([classes.MissionStatus, classes.NotStarted]).join(' ') + " fas fa-running"}></i>
                </div>
                <h5>0-fails</h5>
            </div>
        </div>
    );
}

export default missionStatus;