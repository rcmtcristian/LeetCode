// Given an m x n binary matrix mat, return the distance of the nearest 0 for each cell.

// The distance between two adjacent cells is 1.

// Example 1:


// Input: mat = [[0,0,0],[0,1,0],[0,0,0]]
// Output: [[0,0,0],[0,1,0],[0,0,0]]
// Example 2:

// Input: mat = [[0,0,0],[0,1,0],[1,1,1]]
// Output: [[0,0,0],[0,1,0],[1,2,1]]

// main solution
/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
const m = mat.length;
  const n = mat[0].length;

  const queue = [];
  const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

  // Create a distance matrix with initial values
  const distances = new Array(m).fill().map(() => new Array(n).fill(Infinity));

  // Enqueue the positions of cells with 0
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (mat[i][j] === 0) {
        queue.push([i, j]);
        distances[i][j] = 0;
      }
    }
  }

  while (queue.length > 0) {
    const [row, col] = queue.shift();

    for (const [dx, dy] of directions) {
      const newRow = row + dx;
      const newCol = col + dy;

      if (
        newRow >= 0 &&
        newRow < m &&
        newCol >= 0 &&
        newCol < n &&
        distances[newRow][newCol] > distances[row][col] + 1
      ) {
        distances[newRow][newCol] = distances[row][col] + 1;
        queue.push([newRow, newCol]);
      }
    }
  }

  return distances;
};


// Alternate solution

var updateMatrix = function(matrix) {
    // General approach is: Loop over the full matrix to find all zeroes first.
    // Add those to a queue and start a classic BFS, writing down a number +1 
    // of the position we find in the Q. That way, all the neigbors of the zeroes will become 1's
    // all their neighbors 2's etc.
    // As we're looking for the initial set of zeroes, mark the others, mark as infinity
    // because we don't want to get confused with future 1s we want to write down.
    let queue = [];        
    // Find all zeroes in the matrix
    for (let i = 0, numRows = matrix.length; i < numRows; i++) { 
        for (let j = 0, numCols = matrix[0].length; j < numCols; j++) {   
            if (matrix[i][j] === 0) {
                // Note the third param here, a zero to keep track of which "level" we're at. 
                // The zeroes are obviously at zero. 
                // Later in the BFS, we will increase this for each unvisited neighbor
                queue.push([i, j, 0]);
            } else {
                matrix[i][j] = Infinity;
            }  
        } 
    }
    // A helper array to find neighbors in a quick forEach loop.
    let directions = [[1, 0], [0, 1], [-1, 0], [0, -1]];
    // Start BFS. BFS is the right choice so we minimize attempted double visits
    // BFS is like a stain that spreads, while DFS is like tendrils reaching out.
    while (queue.length) {
        let position = queue.shift();
        // Write value if we find it's lower than current (like those infinities)
        if (matrix[position[0]][position[1]] > position[2]) {
            matrix[position[0]][position[1]] = position[2];
        }
        // Look at all neighbor positions. Are they on the board? Are they not yet visited?
        // If yes to both, add to the queue, with an increased "level" param at position[2]
        directions.forEach(function(direction) {
            let nextRow = position[0] + direction[0];
            let nextCol = position[1] + direction[1];
            let nextLevel = position[2] + 1;
            // Valid next coordinates?
            if (nextRow >= 0 && nextRow < matrix.length && nextCol >= 0 && nextCol < matrix[0].length) {
                // Not yet marked?
                if (matrix[nextRow][nextCol] === Infinity) {
                    // Add to queue, but with increased index, which we stored at position[2]
                    queue.push([nextRow, nextCol, nextLevel]);
                }
            }
        });
    }
    return matrix;
};