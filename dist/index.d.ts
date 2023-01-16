/**
 * This will remove the jitter and smooth the landmarks given by Mediapipe
 * @author Yousuf Kalim
 */
type Landmarks = Array<{
    x: number;
    y: number;
    z: number;
    visibility: number;
}>;
export interface Results {
    poseLandmarks: Landmarks;
}
/**
 * smoothLandmarks
 * @param {Object} results This should be coming directly from Mediapipe
 * @param {Function} onResults Optional: If you want to call other function instead of getting return
 * @returns {Object}
 */
declare const smoothLandmarks: (results: Results, onResults?: ((results: Results) => void) | undefined) => Results | void;
export default smoothLandmarks;
