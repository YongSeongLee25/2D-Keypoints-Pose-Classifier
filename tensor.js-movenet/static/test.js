///**
// * @license
// * Copyright 2021 Nextdoor. All Rights Reserved.
// * Licensed under the Apache License, Version 2.0 (the "License");
// * you may not use this file except in compliance with the License.
// * You may obtain a copy of the License at
// *
// * http://www.apache.org/licenses/LICENSE-2.0
// *
// * Unless required by applicable law or agreed to in writing, software
// * distributed under the License is distributed on an "AS IS" BASIS,
// * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// * See the License for the specific language governing permissions and
// * limitations under the License.
// * =============================================================================
// * Reference: https://blog.tensorflow.org/2021/05/next-generation-pose-detection-with-movenet-and-tensorflowjs.html
// */
//var video = document.getElementById('video');
//video.src = 'static/video/재활1.mp4';
//video.type = 'video/mp4'
//video.controls = true;
//// Create a detector.
//
//video.addEventListener('click', () => {
//    let formdata = new FormData();
//    setInterval(async () => {
//        // Pass in a video stream to the model to detect poses.
//        const detector = await poseDetection.createDetector(poseDetection.SupportedModels.MoveNet);
//        const poses = await detector.estimatePoses(video);
//        console.log(poses[0].keypoints);
//        formdata.append("poseData", JSON.stringify(poses[0].keypoints));
//
//        let xhr = new XMLHttpRequest();
//        xhr.open("POST", "/save_file", true);
//        xhr.send(formdata);
//
//    }, 100);
//});

 "use strict";
/**
 * @license
 * Copyright 2021 Nextdoor. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 * Reference: https://blog.tensorflow.org/2021/05/next-generation-pose-detection-with-movenet-and-tensorflowjs.html
 */
var video = document.getElementById('video');
video.type= 'video/webm';
video.src = 'static/video/head/두팔옆으로.mp4';
video.controls = true;


// Create a detector.
video.addEventListener('play', () => {
    let formdata = new FormData();
    setInterval(async () => {
        // Pass in a video stream to the model to detect poses.
        const detector = await poseDetection.createDetector(poseDetection.SupportedModels.MoveNet);
        const poses = await detector.estimatePoses(video);
        formdata.append("poseData", JSON.stringify(poses[0].keypoints));

    }, 100);
    $('#video').bind("ended",function(e){
        let xhr = new XMLHttpRequest();
        xhr.open("POST", "/save_file", true);
        xhr.send(formdata);
    })
});









