import json
from flask import Flask, render_template, request
from flask_assets import Environment, Bundle
from waitress import serve

app = Flask(__name__)
assets = Environment(app)

@app.route("/")
def index():
    file = open('rsc/fopt.json')
    data = json.load(file)
    return render_template("form.html", context=data)

@app.route("/curriculum", methods=["POST"])
def curriculum():
    context = request.form.to_dict()
    return render_template("curriculum.html", context=context)

assets.register('form-styles', Bundle('scss/format.scss', filters='pyscss', output='scss/format.css'))
assets.register('form-scrips', Bundle('js/uS.js', filters='jsmin', output='js/formt.css'))

assets.register('curriculum-styles', Bundle('scss/cv.scss', filters='pyscss', output='css/cv2.css'))

if __name__ == "__main__":
    serve(app, host="0.0.0.0", port=5000)