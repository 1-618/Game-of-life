import React, {useCallback, useRef, useState} from 'react';
import './App.css';
import produce from 'immer'

const numRows = 50;
const numCols = 50;

const operations = [
  [0, 1],
  [0, 1],
  [1, -1],
  [-1, 1],
  [1, 1],
  [-1, -1],
  [1, 0],
  [-1, 0]
]

const generateEmptyGrid =  () => {
  const rows = [];
  //Loop through the rows
  for (let i = 0; i < numRows; i++) {
    //push a column into each row (A column is an array)//we do this by copying an array with 50 cols into every row//each array holds avalue of 0
    rows.push(Array.from(Array(numCols), () => 0));
  }
  return rows;
}

const App:React.FC = () => {
  //Initializing the grid using useState hook and setting it to a function
  const [grid, setGrid] = useState(() => {
    return generateEmptyGrid()
  });
  //Set our initial running state to false
  const [running, setRunning] = useState(false);

  //Setting a useRef on the running state to ensure that we always use current data
  const runningRef = useRef(running);
  runningRef.current = running

  //Simulation using a useCallback hook with an empty dependency array so it only runs once
  const runSimulation = useCallback(() => {
    if(!runningRef.current) {
      return;
    }
    setGrid(g => {
      return produce(g, gridCopy => {
        for (let i = 0; i < numRows; i++) {
          for (let k = 0; k < numCols; k++) {
            let neighbors = 0;
            operations.forEach(([x, y]) => {
              const newI = i + x;
              const newK = k + y;
              if (newI >= 0 && newI < numRows && newK >= 0 && newK < numCols) {
                neighbors += g[newI][newK];
              }
            });

            if (neighbors < 2 || neighbors > 3) {
              gridCopy[i][k] = 0;
            } else if (g[i][k] === 0 && neighbors === 3) {
              gridCopy[i][k] = 1;
            }
          }
        }
      });
    });

    //simulate
    setTimeout(runSimulation, 1000)
  },[]);


  return (
      <>
      <button
         onClick={() => {
            setRunning(!running);
            if (!running) {
              runningRef.current = true;
              runSimulation()
            }
         }}
        >  {running ? 'stop' : 'start'}
      </button>
        <button onClick={() => {
          const rows = [];
          //Loop through the rows
          for (let i = 0; i < numRows; i++) {
            //push a column into each row (A column is an array)//we do this by copying an array with 50 cols into every row//each array holds avalue of 0
            rows.push(Array.from(Array(numCols), () => (Math.random() > 0.5 ? 1 : 0))
            );
          }
          setGrid(rows)
        }}
        >
          random
        </button>

        <button onClick={() => { generateEmptyGrid()
        }}
        >
          clear
        </button>
      <div
          style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${numCols}, 20px)`
      }}
      >
        {
          //go through the rows in our grid, and for each row, go through its columns
          grid.map((rows, i) =>
           rows.map((col, k) => (
                   <div
                       key={`${i}-${k}`}
                       //We avoid mutating the sate directly by using immer's produce method
                       onClick={() => {
                          const newGrid = produce(grid, gridCopy => {
                            gridCopy[i][k] = grid[i][k] ? 0 : 1;
                         })
                         setGrid(newGrid)
                       }}
                       style={{
                         width: 20,
                         height: 20,
                         //conditionally set this according to the value of the column
                         backgroundColor: grid[i][k] ? 'pink' : undefined,
                         border: 'solid 1px black'
                       }}
                    />
               ))
          )}
      </div>
      </>
  );
};
export default App;
