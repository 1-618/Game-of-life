import React, {useCallback, useRef, useState} from 'react';
import produce from 'immer'
import {Container, Button, ButtonGroup} from '@mui/material';
import styles from "../App.module.css";

const numRows = 25;
const numCols = 50;

//Locations of neighboring cells relative to the target cell
const operations = [
    [0, 1],
    [0, -1],
    [1, -1],
    [-1, 1],
    [1, 1],
    [-1, -1],
    [1, 0],
    [-1, 0]
];

const generateEmptyGrid =  () => {
  const rows = [];
  //Loop through the rows
  for (let i = 0; i < numRows; i++) {
    //push a column into each row (A column is an array)//we do this by copying an array with 50 cols into every row//each array holds avalue of 0
    rows.push(Array.from(Array(numCols), () => 0));
  }
  return rows;
}

const Play:React.FC = () => {
  //Initializing the grid using useState hook and setting it to a function
  const [grid, setGrid] = useState(() => {
    return generateEmptyGrid();
  });
  //Set our initial running state to false
  const [running, setRunning] = useState(false);

  //Setting a useRef on the running state to ensure that we always use current data
  const runningRef = useRef(running);
  runningRef.current = running;

  //Simulation using a useCallback hook with an empty dependency array so it is only created once
  const runSimulation = useCallback(() => {
    if(!runningRef.current) {
      return;
    }
    //Updating the values in the grid according to the simulations rules
    setGrid(g => {
      //Using immer's produce method to set a copy of our grid state so we can  mutate it instead
      return produce(g, gridCopy => {
        //double for-loop in order to go through every cell in our grid
        for (let x = 0; x < numRows; x++) {
          for (let y = 0; y < numCols; y++) {
            //Finding out the number of neighbors a cell has and determining what to do based on that
            let neighbors = 0;
            operations.forEach(([a, b]) => {
              const newX = x + a;
              const newY = y + b;
              //Making sure we doing go outside the grids bounds
              if (newX >= 0 && newX < numRows && newY >= 0 && newY < numCols) {
                neighbors += g[newX][newY];
              }
            });
            //If the cell has less than 2 neighbors, or more than 3 neighbors, the cell dies ie- set its value to 0
            if (neighbors < 2 || neighbors > 3) {
              gridCopy[x][y] = 0;
              //If a dead cell has 3 live neighbors, it lives again, we set its value to 1
            } else if (g[x][y] === 0 && neighbors === 3) {
              gridCopy[x][y] = 1;
            }
          }
        }
      });
    });

    //simulate
    setTimeout(runSimulation, 800)
  },[]);


  return (
      <Container style={{paddingTop: '80px', height: '100vh'}}>
        {/*Starting simulation */}
        <ButtonGroup variant='outlined'
                     style={{ display: 'flex',
                              justifyContent: 'center',
                              paddingBottom: '25px',
                              paddingTop: '25px' }}>
      <Button style={{fontWeight: 'bold'}}
         onClick={() => {
            setRunning(!running);
            if (!running) {
              runningRef.current = true;
              runSimulation();
            }
         }}
        >  {running ? 'stop' : 'start'}
      </Button>
        {/*Generating random simulations */}
        <Button style={{fontWeight: 'bold'}}
            onClick={() => {
          const rows = [];
          //Loop through the rows
          for (let i = 0; i < numRows; i++) {
            //push a column into each row (A column is an array)//we do this by copying an array with 50 cols into every row//each array holds avalue of 0
            rows.push(Array.from(Array(numCols), () => (Math.random() > 0.7 ? 1 : 0))
            );
          }
          setGrid(rows)
        }}
        >
          random
        </Button>
        {/*Clearing the grid */}
        <Button style={{fontWeight: 'bold'}}
            onClick={() => { setGrid(generateEmptyGrid());
        }}
        >
          clear
        </Button>
        </ButtonGroup>
      <div
          style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${numCols}, 16.8px)`
      }}
      >
        {
          //go through the rows in our grid, and for each row, go through its columns
          grid.map((rows, x) =>
           rows.map((col, y) => (
                   <div className={styles.node}
                       key={`${x}-${y}`}
                       //We avoid mutating the sate directly by using immer's produce method
                       onClick={() => {
                          const newGrid = produce(grid, gridCopy => {
                            gridCopy[x][y] = grid[x][y] ? 0 : 1;
                         })
                         setGrid(newGrid)
                       }}
                       style={{
                         //conditionally set this according to the value of the column
                         backgroundColor: grid[x][y] ? '#94bbe9' : undefined,
                         width: '15px',
                         height: '15px',
                         borderRadius: '4px',
                         border: 'solid 0.7px white'
                       }}
                    />
               ))
          )}
      </div>
      </Container>
  );
}
export default Play;
