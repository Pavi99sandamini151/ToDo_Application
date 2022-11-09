import React from 'react';


function Greeter(props: { first: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) {

    return (
        <>

            <h1>Greeter {props.first}</h1>

        </>
    );
}

export default Greeter;
