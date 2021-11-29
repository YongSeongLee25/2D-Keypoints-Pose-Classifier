# 2D Keypoints Pose Classifier

![pose_skeleton](img/skeleton.png) <img src="/img/keypoints.png" width="300" height="700"/>

tensorflow.js 라이브러리를 통한 스켈레톤 MoveNet 17개 2D Keypoint 사용
머리, 상체, 하체의 무게중심을 구하여 스켈레톤을 정규화 시킨 후 머신러닝을 이용한 학습

![pose_centr1](img/centr1.png)

![pose_centr2](img/centr2.png)

# 1./ 데이터추출
https://blog.tensorflow.org/2021/08/3d-pose-detection-with-mediapipe-blazepose-ghum-tfjs.html - MoveNet 사용

# 2./ 모델
사용 라이브러리 - sklearn 
Randomforest, LogisticRegression, SVC, LGBM, Voting

# 3./ 참고논문
https://www.matec-conferences.org/articles/matecconf/pdf/2017/46/matecconf_dts2017_05016.pdf
