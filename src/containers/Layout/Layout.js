import React from 'react';
import classes from './Layout.module.css';
import Kpis from "./Kpis/Kpis";
import BarChart from "../../components/views/BarChart";
import Main from "./Main/Main";
const layout = props => {
    return (
        <div className={classes.Layout}>
                <BarChart/>
                <Kpis/>
                <Main/>
        </div>
    );
}

export default layout;