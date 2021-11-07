# -*- coding: utf-8 -*-
from flask import Flask, render_template, request, redirect
import json
import pandas as pd
app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route('/save_file',methods = ['POST'])
def save_file():
    poseData_list = []
    pose_list = []
    pose_x = []
    pose_y = []
    pose_score = []
    pose_key = []
    len_joint = 17
    key_suc = True
    requests = request.form
    for key in requests.keys():
        for value in requests.getlist(key):
            poseData_list.append(json.loads(value))

    for pose in poseData_list:
        for data in pose:
            try:
                pose_x.append(data['x'])
                pose_y.append(data['y'])
                pose_score.append(data['score'])
                if key_suc:
                    pose_key.append(data['name'])
                if len(pose_x) == len_joint:
                    pose = pose_x + pose_y + pose_score
                    pose_list.append(pose)
                    pose_x, pose_y, pose_score = [], [], []
                    key_suc = False
            except:
                pass

    unique_pose = [i + '_pose' for i in pose_key]
    unique_y = [i + '_y' for i in pose_key]
    unique = pose_key + unique_y + unique_pose
    df_pose = pd.DataFrame(pose_list, columns= unique)
    df_pose.to_csv("./static/csv/head/test.csv")
    return redirect('/')

if __name__ == "__main__":
    app.run(debug=True)
