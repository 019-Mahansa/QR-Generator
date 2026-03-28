from flask import Flask, jsonify
# from flask_cors import CORS
import qrcode
import os

app = Flask(__name__)
# CORS(app)

def pengaturan():
    penyimpanan = "resultQR"
    namaFIle = "dummy1.jpg"

    if not os.path.exists(penyimpanan):
        os.makedirs(penyimpanan)

    file_path = os.path.join(penyimpanan,namaFIle)
    return file_path


@app.route('/api/data', methods=['GET'])
def get_data():
    return jsonify({"message": "Data dari Flask!"})

@app.route('/qrcodes/<links>')
def makeQR(links):
    data = f"{links}"
    img = qrcode.make(data)
    img.save(pengaturan())


if __name__ == '__main__': 
    app.run(debug = True, port=5000) 
