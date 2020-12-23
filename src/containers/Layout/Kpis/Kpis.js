import React from "react";
import classes from "./Kpis.module.css";
import Kpi from "./Kpi/Kpi";

const kpis = props => {
    return (
        <div className={classes.Kpis}>
            <Kpi headline="running" num={5} total={0} estimatedTime={0}/>
            <Kpi headline="to gen" num={2} total={7} estimatedTime={0}/>
            <Kpi headline="to run" num={3} total={8} estimatedTime={20}/>
        </div>
    );
}

export default kpis;