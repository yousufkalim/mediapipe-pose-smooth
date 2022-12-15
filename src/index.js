/**
 * This will remove the jitter and smooth the landmarks given by Mediapipe
 * @author Yousuf Kalim
 */

let frameSets = [];
let smoothFrame = [];

/**
 * smoothLandmarks
 * @param {Object} results This should be coming directly from Mediapipe
 * @param {Function} onResults Optional: If you want to call other function instead of getting return
 * @returns {Void}
 */
const smoothLandmarks = (results, onResults) => {
  // Pushing frame at the end of frameSet array
  if (results.poseLandmarks) {
    frameSets.push(results.poseLandmarks);
  }

  if (frameSets.length === 8) {
    // This loop will run 33 time to make average of each joint
    for (let i = 0; i < 33; i++) {
      // Making an array of each joint coordinates
      let x = frameSets.map((a) => a[i].x);
      let y = frameSets.map((a) => a[i].y);
      let z = frameSets.map((a) => a[i].z);
      let visibility = frameSets.map((a) => a[i].visibility);

      // Sorting the array into ascending order
      x = x.sort((a, b) => a - b);
      y = y.sort((a, b) => a - b);
      z = z.sort((a, b) => a - b);
      visibility = visibility.sort((a, b) => a - b);

      // Dropping 2 min and 2 max coordinates
      x = x.slice(2, 6);
      y = y.slice(2, 6);
      z = z.slice(2, 6);
      visibility = visibility.slice(2, 6);

      // Making the average of 4 remaining coordinates
      smoothFrame[i] = {
        x: x.reduce((a, b) => a + b, 0) / x.length,
        y: y.reduce((a, b) => a + b, 0) / y.length,
        z: z.reduce((a, b) => a + b, 0) / z.length,
        visibility: visibility.reduce((a, b) => a + b, 0) / visibility.length,
      };
    }

    // Removing the first frame from frameSet
    frameSets.shift();
  }

  // after first 8 frames we have averaged coordinates, So now updating the poseLandmarks with averaged coordinates
  if (smoothFrame.length > 0) {
    results.poseLandmarks = smoothFrame;
  }

  return onResults ? onResults(results) : results;
};

export default smoothLandmarks;
