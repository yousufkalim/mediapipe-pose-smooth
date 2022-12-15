# Mediapipe Pose Smooth

This library removes the jitter and smooth the landmarks coming from Mediapipe.

## How it works

The library creates the average of every 8 frames to smooth the landmarks. The library is initialized with the first landmark received and then wait for the 8 more frames to start creating the average, meanwhile it returns the landmarks as it is. After the 8 frames, the library drops the 2 frames with the max values and 2 with the min values and starts to create the average from the remaining 4 frames and returns the average.


## Installation

Install mediapipe-pose-smooth with npm/yarn

```bash
  npm install mediapipe-pose-smooth // npm
  yarn add mediapipe-pose-smooth // yarn
```

## Usage/Examples

#### Import

```javascript
import smoothLandmarks from 'mediapipe-pose-smooth'; // ES6
const smoothLandmarks = require('mediapipe-pose-smooth'); // CommonJS
```

#### Example result data

```javascript
{
    poseLandmarks: [
        { x: 1, y: 1, z: 1, visibility: 1 },
        { x: 2, y: 2, z: 2, visibility: 1 },
        { x: 3, y: 3, z: 3, visibility: 1 },
        { x: 4, y: 4, z: 4, visibility: 1 },
        { x: 5, y: 5, z: 5, visibility: 1 },
        { x: 6, y: 6, z: 6, visibility: 1 },
        { x: 7, y: 7, z: 7, visibility: 1 },
        { x: 8, y: 8, z: 8, visibility: 1 },
        { x: 9, y: 9, z: 9, visibility: 1 },
        { x: 10, y: 10, z: 10, visibility: 1 },
        { x: 11, y: 11, z: 11, visibility: 1 },
        { x: 12, y: 12, z: 12, visibility: 1 },
        { x: 13, y: 13, z: 13, visibility: 1 },
        { x: 14, y: 14, z: 14, visibility: 1 },
        { x: 15, y: 15, z: 15, visibility: 1 },
        { x: 16, y: 16, z: 16, visibility: 1 },
        { x: 17, y: 17, z: 17, visibility: 1 },
        { x: 18, y: 18, z: 18, visibility: 1 },
        { x: 19, y: 19, z: 19, visibility: 1 },
        { x: 20, y: 20, z: 20, visibility: 1 },
        { x: 21, y: 21, z: 21, visibility: 1 },
        { x: 22, y: 22, z: 22, visibility: 1 },
        { x: 23, y: 23, z: 23, visibility: 1 },
        { x: 24, y: 24, z: 24, visibility: 1 },
        { x: 25, y: 25, z: 25, visibility: 1 },
        { x: 26, y: 26, z: 26, visibility: 1 },
        { x: 27, y: 27, z: 27, visibility: 1 },
        { x: 28, y: 28, z: 28, visibility: 1 },
        { x: 29, y: 29, z: 29, visibility: 1 },
        { x: 30, y: 30, z: 30, visibility: 1 },
        { x: 31, y: 31, z: 31, visibility: 1 },
        { x: 32, y: 32, z: 32, visibility: 1 },
        { x: 33, y: 33, z: 33, visibility: 1 }
    ]
};
```

#### Usage

```javascript
const pose = new Pose({
    locateFile: (file) => {
        return `https://cdn.jsdelivr.net/npm/@mediapipe/pose/${file}`;
    },
});

pose.setOptions({
    // Options
});

// Pass another function to receive the results
pose.onResults((results) => smoothLandmarks(results, onResutls));

function onResutls(results) {
    // Do something with the results
}

// Or get the returned data from the library
pose.onResults((results) => {
    // Smooth the landmarks
    const smoothResults = smoothLandmarks(results);

    // Do something with the smooth results
});
```

## Contributing

- Fork it!
- Create your feature branch: `git checkout -b my-new-feature`
- Commit your changes: `git commit -am 'Add some feature'`
- Push to the branch: `git push origin my-new-feature`
- Submit a pull request :D

## Author

**mediapipe-pose-smooth** © [Yousuf](https://github.com/yousufkalim)  
Authored and maintained by Yousuf Kalim.

> GitHub [@yousufkalim](https://github.com/yousufkalim) · LinkedIn [@yousufkalim](https://www.linkedin.com/in/yousufkalim/)
## License
[MIT](https://choosealicense.com/licenses/mit/)