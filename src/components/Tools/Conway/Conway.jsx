import React, { useState, useCallback, useRef } from 'react';
import styled from 'styled-components';
import produce from 'immer';
import { Button } from '../../common/Button';

const numRows = 50;
const numCols = 50;

const operations = [
  [-1, 1],
  [0, 1],
  [1, 1],
  [-1, 0],
  [1, 0],
  [-1, -1],
  [0, -1],
  [1, -1]
];

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Conway = () => {
  // Function for generating empty grid, also used to reset
  const generateEmptyGrid = () => {
    const rows = [];
    for (let i = 0; i < numCols; i++) {
      rows.push(Array.from(Array(numCols), () => 0));
    }
    return rows;
  };

  // Initialize grid with zeros
  const [grid, setGrid] = useState(() => {
    return generateEmptyGrid();
  });
  // State of simulation
  const [running, setRunning] = useState(false);
  const runningRef = useRef();
  runningRef.current = running;

  // Toggling individual cell
  const toggleCell = (i, ii) => {
    const newGrid = produce(grid, (gridCopy) => {
      gridCopy[i][ii] = gridCopy[i][ii] ? 0 : 1;
    });
    setGrid(newGrid);
  };

  // Actual simulation function
  const runSimulation = useCallback(() => {
    // Exit simulation if no cells are being born or destroyed
    if (!runningRef.current) {
      return;
    }

    // Set grid values based on the number of neighbors for each cell
    setGrid(currentGrid => {
      // Create new copy of grid for setGrid
      return produce(currentGrid, gridCopy => {
        // Iterate over rows and columns
        for (let i = 0; i < numRows; i++) {
          for (let ii = 0; ii < numCols; ii++) {
            let neighbors = 0;
            // Check neighbors of cell
            operations.forEach(([x, y]) => {
              const newI = i + x;
              const newII = ii + y;
              if (newI >= 0 && newI < numRows && newII >= 0 && newII < numCols) {
                neighbors += currentGrid[newI][newII];
              }
            })

            // Set cell state based on neighbors
            if (neighbors < 2 || neighbors > 3) {
              gridCopy[i][ii] = 0;
            } else if (currentGrid[i][ii] === 0 && neighbors === 3) {
              gridCopy[i][ii] = 1;
            }
          }
        }
      });
    });

    // Repeat every half a second
    setTimeout(runSimulation, 300);
  }, [])

  // Randomize grid. Tweak the Math.random() probability for denser or sparser distribution
  const randomizeGrid = () => {
    const rows = [];
    for (let i = 0; i < numCols; i++) {
      rows.push(Array.from(Array(numCols), () => Math.random() > 0.8 ? 1 : 0));
    }
    setGrid(rows);
  };

  // Render the grid
  const renderContent = () => (
    <Container>
      <ButtonWrapper>
        <Button
          label={running ? "Stop" : "Start"}
          handleClick={() => {
            setRunning(!running);
            if (!running) {
              runningRef.current = true;
              runSimulation();
            }
          }}
          className="button"
        />
        <Button
          label="Clear"
          handleClick={() => {
            setGrid(generateEmptyGrid());
          }}
          className="button"
        />
        <Button
          label="Randomize"
          handleClick={() => randomizeGrid()}
          className="button"
        />
      </ButtonWrapper>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${numCols}, 15px)`,
        }}
      >
        {grid.map((rows, i) =>
          rows.map((col, ii) => (
            <div
              key={`${i}-${ii}`}
              onClick={() => toggleCell(i, ii)}
              style={{
                width: 15,
                height: 15,
                backgroundColor: grid[i][ii] ? "rgb(80, 80, 80)" : "white",
                border: "1px dotted lightgrey",
              }}
            />
          ))
        )}
      </div>
    </Container>
  );

  return renderContent();
}

export default Conway;