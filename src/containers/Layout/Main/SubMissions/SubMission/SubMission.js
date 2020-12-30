import React from "react";
import SubMissionRun from "./SubMissionRun/SubMissionRun";
import SubMissionGenerate from './SubMissionGenerate/SubMissionGenerate';
import SubMissionAnalyze from './SubMissionAnalyze/SubMissionAnalyze'
import classes from "./SubMission.module.css";
// import SubMission from "./SubMission/SubMission";
          
const SubMission = props => {
    
    return (
        <div className={classes.SubMission}>
            <SubMissionGenerate/>
            <SubMissionRun/>
            <SubMissionAnalyze/>
        </div>
    );


}    
        
export default SubMission;