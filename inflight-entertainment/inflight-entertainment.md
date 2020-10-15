# InFlight Entertainment

**You've built an inflight entertainment system with on-demand movie streaming.**

Users on longer flights like to start a second movie right when their first one ends, but they complain that the plane usually lands before they can see the ending. **So you're building a feature for choosing two movies whose total runtimes will equal the exact flight length.**

Write a function that takes an integer flightLength (in minutes) and an array of integers movieLengths (in minutes) and returns a boolean indicating whether there are two numbers in movieLengths whose sum equals flightLength.

When building your function:

- Assume your users will watch *exactly* two movies
- Don't make your users watch the same movie twice
- Optimize for runtime over memory



## Solution 1 - Binary Search

One approach is to use Binary search and check the list from both ends

- **Pros:** This approach is fast
- **Cons:** Fails if the value / movie is the same.

```javascript
function canTwoMoviesFillFlight(movieLengths, flightLength) {

  // Determine if two movie runtimes add up to the flight length
  let low = 0;
  let high = movieLengths.length - 1;
  
  while (low < high) {
    const result = movieLengths[low] + movieLengths[high];
    if(result === flightLength) {
      return movieLengths[low] !== movieLengths[high] ? true : false;
    } else if (result < flightLength) {
      low++;
    } else if (result > flightLength) {
      high--;
    }
  }//end:while

  return false;
}
```

## Solution 2 - Using Sets

Using a Set to store unique values

```javascript
  function canTwoMoviesFillFlight(movieLengths, flightLength) {

  // Movie lengths we've seen so far
  const movieLengthsSeen = new Set();

  for (let i = 0; i < movieLengths.length; i++) {
    const firstMovieLength = movieLengths[i];

    const matchingSecondMovieLength = flightLength - firstMovieLength;
    if (movieLengthsSeen.has(matchingSecondMovieLength)) {
      return true;
    }

    movieLengthsSeen.add(firstMovieLength);
  }

  // We never found a match, so return false
  return false;
}
```



 