import React, { useState, useCallback, useRef } from 'react';
import styled from 'styled-components';
import produce from 'immer';
import { isMobile } from 'react-device-detect';
import { Button } from '../../common/Button';

const numRows = isMobile ? 30 : 50;
const numCols = isMobile ? 30 : 50;

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
  justify-content: flex-start;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const Instructions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  max-width: 750px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(${numCols}, 15px);
  overflow-x: scroll 
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
    setTimeout(runSimulation, 100);
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
      <Instructions>
        <h1>Conway's game of life</h1>
        <p>Click on any number of cells and then click START. You can also use the Randomize function to populate the grid randomly. Once you start the simulation, the grid will begin populating based on a couple of rules:</p>
        <ul>
          <li>Any live cell with fewer than two live neighbours dies, as if by underpopulation.</li>
          <li>Any live cell with two or three live neighbours lives on to the next generation.</li>
          <li>Any live cell with more than three live neighbours dies, as if by overpopulation.</li>
          <li>Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.</li>
        </ul>
      </Instructions>
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
      <Grid>
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
      </Grid>
    </Container>
  );

  return renderContent();
}

export default Conway;
