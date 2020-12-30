import React from "react";

const DivThree = (props) => {

    const [who, setWho] = React.useState(props.tardis);

    const changeIt = () => {
        if (who.tardis.caps) {
            setWho({
                tardis: {
                    name: who.tardis.name.toLowerCase(),
                    caps: false
                }
            });
        } else {
            setWho({
                tardis: {
                    name: who.tardis.name.toUpperCase(),
                    caps: true
                }
            });
        }
    };

    return (
        <div>
            <h3 onClick={changeIt}>{who.tardis.name}</h3>
        </div>
    );
};

export default DivThree;