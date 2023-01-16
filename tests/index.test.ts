import { expect, test } from '@jest/globals';
import smoothLandmarks, { Results } from '../src';

test('This will test the smooth landmarks function', () => {
  // Simulating Mediapipe
  for (let i = 0; i < 8; i++) {
    const landmarks = {
      poseLandmarks: Array.from({ length: 33 }, () => ({
        x: i + 1,
        y: i + 1,
        z: i + 1,
        visibility: 0,
      })),
    };

    const expected = smoothLandmarks(landmarks) as Results;

    if (i === 7) {
      // We will test only the 1st entity
      expect(expected.poseLandmarks[0]?.x).toEqual(4.5);
    }
  }
});

test('This will test the smooth landmarks function by passing onResults', () => {
  // Simulating Mediapipe
  for (let i = 0; i < 8; i++) {
    const landmarks = {
      poseLandmarks: Array.from({ length: 33 }, () => ({
        x: i + 1,
        y: i + 1,
        z: i + 1,
        visibility: 0,
      })),
    };

    let expected = {} as Results;
    const onResults = (results: Results) => {
      expected = results as Results;
    };

    smoothLandmarks(landmarks, onResults);

    if (i === 7) {
      // We will test only the 1st entity
      expect(expected.poseLandmarks[0]?.x).toEqual(4.5);
    }
  }
});
