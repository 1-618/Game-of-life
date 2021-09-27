import React from 'react';
import Play from "../components/Play";
import Menu from "../components/Menu";

const Game = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Menu/>
            <Play/>
        </div>
    );
};

export default Game;
