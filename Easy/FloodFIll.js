// An image is represented by an m x n integer grid image where image[i][j] represents the pixel value of the image.

// You are also given three integers sr, sc, and color. You should perform a flood fill on the image starting from the pixel image[sr][sc].

// To perform a flood fill, consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color), and so on. Replace the color of all of the aforementioned pixels with color.

// Return the modified image after performing the flood fill.

 

// Example 1:


// Input: image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2
// Output: [[2,2,2],[2,2,0],[2,0,1]]
// Explanation: From the center of the image with position (sr, sc) = (1, 1) (i.e., the red pixel), all pixels connected by a path of the same color as the starting pixel (i.e., the blue pixels) are colored with the new color.
// Note the bottom corner is not colored 2, because it is not 4-directionally connected to the starting pixel.
// Example 2:

// Input: image = [[0,0,0],[0,0,0]], sr = 0, sc = 0, color = 0
// Output: [[0,0,0],[0,0,0]]
// Explanation: The starting pixel is already colored 0, so no changes are made to the image.

// Main Solution
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
  if (image.length < 1 || image[sr][sc] === color) {
    return image;
  }

  const startColor = image[sr][sc];

  const differenceInColor = (row, col, startColor, color, image) => {
    if (
      row < 0 ||
      row >= image.length ||
      col < 0 ||
      col >= image[0].length ||
      startColor !== image[row][col]
    ) {
      return;
    }

    image[row][col] = color;

    differenceInColor(row - 1, col, startColor, color, image);
    differenceInColor(row + 1, col, startColor, color, image);
    differenceInColor(row, col - 1, startColor, color, image);
    differenceInColor(row, col + 1, startColor, color, image);
  };

  differenceInColor(sr, sc, startColor, color, image);
  return image;
};

// Explanation
// var floodFill = function(image, sr, sc, color) {
// This line declares a function named floodFill using the var keyword. The function accepts parameters image, sr, sc, and color.

//   if (image.length < 1 || image[sr][sc] === color) {
//     return image;
//   }

// This if statement checks if the image is empty (image.length < 1) or if the starting pixel (image[sr][sc]) already has the desired color (image[sr][sc] === color). If either condition is true, the original image is returned as there is no need to perform the flood fill operation.

//   const startColor = image[sr][sc];
// This line assigns the color of the starting pixel (image[sr][sc]) to the variable startColor.

//   const differenceInColor = (row, col, startColor, color, image) => {
// This line declares a new function named differenceInColor using the const keyword. The function accepts parameters row, col, startColor, color, and image.

//     if (
//       row < 0 ||
//       row >= image.length ||
//       col < 0 ||
//       col >= image[0].length ||
//       startColor !== image[row][col]
//     ) {
//       return;
//     }
// This if statement checks if the current pixel (identified by row and col) is out of bounds (i.e., less than 0 or greater than or equal to the image dimensions) or if the color of the current pixel is different from the startColor. If any of these conditions are true, the function returns and does not perform any further operations on the current pixel.

//     image[row][col] = color;
// This line sets the color of the current pixel (image[row][col]) to the desired color.

//     differenceInColor(row - 1, col, startColor, color, image);
//     differenceInColor(row + 1, col, startColor, color, image);
//     differenceInColor(row, col - 1, startColor, color, image);
//     differenceInColor(row, col + 1, startColor, color, image);
// These lines recursively call the differenceInColor function on the neighboring pixels of the current pixel. It performs a flood fill operation by recursively updating the colors of pixels connected to the starting pixel.

//   differenceInColor(sr, sc, startColor, color, image);
//   return image;
// };

// These lines close the differenceInColor function, then call it with the starting pixel's coordinates (sr, sc), the startColor, the desired color, and the image array. Finally, the modified image is returned as the result of the floodFill function.

// Alternate Solution
function floodFill(image, sr, sc, newColor) {
        const oldColor = image[sr][sc];
        if (oldColor === newColor) return image;
        const dfs = (r, c) => {
          if (
            r < 0 ||
            r >= image.length ||
            c < 0 ||
            c >= image[0].length ||
            image[r][c] !== oldColor
          )
            return;
          image[r][c] = newColor;
          dfs(r + 1, c);
          dfs(r - 1, c);
          dfs(r, c + 1);
          dfs(r, c - 1);
        };
        dfs(sr, sc);
        return image;
      }

      
//  Jest test 
test("flood fill", () => {
  expect(
    floodFill(
      [
        [1, 1, 1],
        [1, 1, 0],
        [1, 0, 1],
      ],
      1,
      1,
      2
    )
  ).toEqual([
    [2, 2, 2],
    [2, 2, 0],
    [2, 0, 1],
  ]);
} );

test("flood fill", () => {
  expect(
    floodFill(
      [
        [0, 0, 0],
        [0, 0, 0],
      ],
      0,
      0,
      0
    )
  ).toEqual([
    [0, 0, 0],
    [0, 0, 0],
  ]);
} );

