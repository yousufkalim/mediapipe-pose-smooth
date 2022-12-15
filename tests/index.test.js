import { expect, test } from '@jest/globals';
import smoothLandmarks from '../src/index.js';

test('This will test the smooth landmarks function', () => {
  let expected = {};

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

    expected = smoothLandmarks(landmarks);
  }

  // We will test only the 1st entity
  expect(expected.poseLandmarks[0]?.x).toEqual(4.5);
});

test('This will test the smooth landmarks function by passing onResults', () => {
  let expected = {};

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

    const onResults = (results) => {
      expected = results;
    };

    smoothLandmarks(landmarks, onResults);
  }

  // We will test only the 1st entity
  expect(expected.poseLandmarks[0]?.x).toEqual(4.5);
});
