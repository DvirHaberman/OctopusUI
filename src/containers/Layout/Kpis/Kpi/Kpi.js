import React, { Fragment } from "react";
import classes from "./Kpi.module.css";
const kpi = props => {

    return (
        <Fragment>
            <div class={classes.kpi}>
                <h3 className={classes.h3}>{props.headline}</h3>
                <h1 className={classes.h1}>{props.num}{props.total > 0 ? <span className={classes.span}>/{props.total}</span> : null} </h1>
                {props.estimatedTime > 0 ? <p  className={classes.p}>estimated time: {props.estimatedTime} secs</p> : null}
            </div>
            
        </Fragment>
    );
}

export default kpi;