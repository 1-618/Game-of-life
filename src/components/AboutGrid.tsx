import React from 'react';
import {Typography} from "@mui/material";

const AboutGrid = () => {
    return (
        <div style={{ maxWidth: '50%', padding: '60px 30px', display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>

                <div style={{padding: '10px 10px', color: '#1d77d2', textAlign: 'justify'}}>
                    <Typography align='center'>Conway's Game of Life</Typography>
                </div>
                <div style={{paddingRight: '10px', paddingLeft: '10px', color: 'whitesmoke',textAlign: 'justify'}}>
                    <Typography>The Game of Life, also known simply as Life,
                        is a cellular automaton devised by the British mathematician John Horton Conway
                        in 1970. It is a zero-player game,
                        meaning that its evolution is determined by its initial state,
                        requiring no further input.
                        One interacts with the Game of Life by creating an initial configuration
                        and observing how it evolves.</Typography>
                </div>
            <div style={{paddingRight: '10px', paddingLeft: '10px', color: '#1d77d2',textAlign: 'justify'}}>
                <Typography align='center'>Rules</Typography>
            </div>
            <div style={{paddingRight: '10px', paddingLeft: '10px', color: 'whitesmoke',textAlign: 'justify'}}>
                <Typography>The universe of the Game of Life is an infinite, two-dimensional orthogonal grid of square cells,
                    each of which is in one of two possible states,
                    live or dead, (or populated and unpopulated, respectively).
                    Every cell interacts with its eight neighbours, which are the cells that are horizontally,
                    vertically, or diagonally adjacent.
                    At each step in time, the following transitions occur:</Typography>
            </div>
                <div style={{paddingRight: '10px', paddingLeft: '10px', color: '#1d77d2',textAlign: 'justify'}}>
                    <ul>
                        <li>Any live cell with fewer than two live neighbours dies,
                            as if by underpopulation.
                        </li>
                        <li>Any live cell with two or three live neighbours lives on to the next generation.</li>
                        <li>Any live cell with more than three live neighbours dies, as if by overpopulation.</li>
                        <li>Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.</li>
                    </ul>
                </div>
        </div>
    );
}

export default AboutGrid;
