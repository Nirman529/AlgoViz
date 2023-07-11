import React, { useEffect, useState } from 'react'
import Node from '../Node'


const rows = 10;
const cols = 10;

const startNode = [0, 0];
const endNode = [rows - 1, cols - 1];

const Grid = () => {
    const [grid, setGrid] = useState([]);
    const [path, setPath] = useState([]);
    const [visitedNode, setVisitedNode] = useState([]);

    useEffect(() => {

        const grid = new Array(rows);
        for (let i = 0; i < rows; i++) {
            grid[i] = new Array(cols);
        }
    }, []);

    const makeNeighborForAll = (grid) => {
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                grid[i][j].addNeighbors(grid);
            }
        }
    }

    // grid with node
    const gridWithNode = (
        <div>
            {grid.map((row, rowIndex) => {
                return (
                    <div key={rowIndex} className="grid-row">
                        {row.map((col, colIndex) => {
                            const { isStartNode, isEndNode, isObstacle } = col;
                            return (
                                <Node
                                    key={colIndex}
                                    isStartNode={isStartNode}
                                    isEndNode={isEndNode}
                                    row={rowIndex}
                                    col={colIndex}
                                    isObstacle={isObstacle}
                                />
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );

    const visualizeShortestPath = (shortestPathNodes) => {
        for (let i = 0; i < shortestPathNodes.length; i++) {
            setTimeout(() => {
                const node = shortestPathNodes[i];
                console.log(node);
                document.getElementById(`node-${node.x}-${node.y}`).className = "node node-shortest-path";
            }, i * 10);
        }
    }
    const visualisePath = () => {
        for (let i = 0; i <= visitedNode.length; i++) {
            if (i === visitedNode.length) {
                setTimeout(() => {
                    visualizeShortestPath(path);
                }, i * 20);
            } else {
                setTimeout(() => {
                    const node = visitedNode[i];
                    console.log(node);
                    document.getElementById(`node-${node.x}-${node.y}`).className = "node node-visited";
                }, 20 * i);

            }
        }

    }
    console.log(path);


    return (
        <div className="Wrapper">
            <button onClick={visualisePath}>Visualise Path</button>
            {gridWithNode}
        </div>
    )
}

export default Grid