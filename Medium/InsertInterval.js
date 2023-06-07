// You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval.

// Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).

// Return intervals after the insertion.

// Example 1:

// Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
// Output: [[1,5],[6,9]]
// Example 2:

// Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
// Output: [[1,2],[3,10],[12,16]]
// Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].

// Constraints:

// 0 <= intervals.length <= 104
// intervals[i].length == 2
// 0 <= starti <= endi <= 105
// intervals is sorted by starti in ascending order.
// newInterval.length == 2
// 0 <= start <= end <= 105

// Main Solution
var insert = function (intervals, newInterval) {
  if (!intervals.length) {
    return [newInterval];
  }

  if (newInterval[1] < intervals[0][0]) {
    intervals.unshift(newInterval);
    return intervals;
  }

  if (newInterval[0] > intervals[intervals.length - 1][1]) {
    intervals.push(newInterval);
    return intervals;
  }

  let indexBeg = -1;
  let indexEnd = -1;
  let beg = 0;
  let end = 0;

  for (let i = 0; i < intervals.length; i++) {
    if (intervals[i][1] >= newInterval[0]) {
      indexBeg = i;
      beg = Math.min(newInterval[0], intervals[i][0]);
      break;
    }
  }

  for (let i = indexBeg; i < intervals.length; i++) {
    if (intervals[i][0] > newInterval[1]) {
      indexEnd = i - 1;
      end = Math.max(newInterval[1], intervals[i - 1][1]);
      break;
    }
  }

  if (indexEnd === -1) {
    indexEnd = intervals.length - 1;
    end = Math.max(newInterval[1], intervals[intervals.length - 1][1]);
  }

  intervals.splice(indexBeg, indexEnd - indexBeg + 1, [beg, end]);
  return intervals;
};



// Alternative Solution
var insert = function(intervals, newInterval) {
    let i = 0; // pointer to iterate through intervals
    const ans = []; // array to store our answer
    const start = 0; // index of the start of an interval
    const end = 1; // index of the end of an interval

    // 1. add all intervals that end before the start of newInterval
    while(i < intervals.length && intervals[i][end] < newInterval[start]){
        ans.push(intervals[i]);
        i++;
    }

    // 2. merge intervals that overlap with newInterval
    while(i < intervals.length && intervals[i][start] <= newInterval[end] ){
        // merge the two and update newInterval
        newInterval[start] = Math.min(intervals[i][start], newInterval[start]);
        newInterval[end] = Math.max(intervals[i][end], newInterval[end]);
        i++;
    }
    ans.push(newInterval);

    // 3. add the rest of the intervals
    while(i < intervals.length){
        ans.push(intervals[i]);
        i++;
    }
    return ans;
};


//Explanation
// 1. If the intervals array is empty, return the newInterval
// 2. If the newInterval is smaller than the first interval, add it to the beginning of the array
// 3. If the newInterval is larger than the last interval, add it to the end of the array
// 4. Loop through the intervals array and find the index where the newInterval should be inserted
// 5. Loop through the intervals array and find the index where the newInterval should end
// 6. If the indexEnd is -1, it means that the newInterval is larger than all the intervals in the array, so we set the indexEnd to the last index of the array
// 7. Splice the array from indexBeg to indexEnd and replace it with the newInterval


//Failed Solution
// var insert = function (intervals, newInterval) {
//   if (!intervals.length) {
//     return [newInterval];
//   }

//   if (newInterval[1] < intervals[0][0]) {
//     intervals.unshift(newInterval);
//     return intervals;
//   }

//   if (newInterval[0] > intervals[intervals.length - 1][1]) {
//     intervals.push(newInterval);
//     return intervals;
//   }

//   indexBeg = 0;
//   indexEnd = 0;
//   beg = 0;
//   end = 0;

//   for (let i = 0; i < intervals.length; i++) {
//     if (
//       intervals[i][0] <= newInterval[0] &&
//       intervals[i][0] >= newInterval[0]
//     ) {
//       indexBeg = i;
//       beg = intervals[i][0];
//       break;
//     }

//     if (intervals[i][0] > newInterval[0]) {
//       indexBeg = i;
//       beg = newInterval[0];
//       break;
//     }
//   }

//   for (let i = 0; i < intervals.length; i++) {
//     if (
//       intervals[i][0] <= newInterval[1] &&
//       intervals[i][0] >= newInterval[1]
//     ) {
//       indexEnd = i;
//       end = intervals[i][1];
//       break;
//     }

//     if (intervals[i][0] > newInterval[1]) {
//       indexEnd = i;
//       end = newInterval[1];
//       break;
//     }
//   }
//   const intervalsDeleted = indexEnd - indexBeg + 1;
//   intervals.splice(indexBeg, intervalsDeleted, [beg, end]);
//   return intervals;
// };