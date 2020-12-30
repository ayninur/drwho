import React from "react";
import DivThree from "./divThree"

const DivTwo = (props) => {
    return (
        <div>
            <DivThree tardis={props.tardis} />
            <DivThree tardis={props.tardis} />
        </div>
    );
};

export default DivTwo;
