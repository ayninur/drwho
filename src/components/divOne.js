import React from 'react';
import DivTwo from "./divTwo";

const DivOne = (props) => {
    return (
        <DivTwo tardis={props.tardis} />
    )
}

export default DivOne;