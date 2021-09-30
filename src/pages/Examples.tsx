import React from 'react';
import Menu from "../components/Menu";
import ExampleGrid from "../components/ExampleGrid";

const Examples = () => {
    return (
        <div style={{display: 'flex', justifyContent: 'center', margin: '0 auto'}}>
            <Menu/>
            <ExampleGrid/>
        </div>
    );
}

export default Examples;
