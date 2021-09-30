import React from 'react';
import Menu from "../components/Menu";
import ExampleComponent from "../components/ExampleComponent";

const Examples = () => {
    return (
        <div style={{display: 'flex', justifyContent: 'center', margin: '0 auto'}}>
            <Menu/>
            <ExampleComponent/>
        </div>
    );
}

export default Examples;
