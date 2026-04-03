from flask import Flask, send_file, request
from flask_cors import CORS
from io import BytesIO
import qrcode
import os

app = Flask(__name__)
CORS(app)

@app.route('/qr-code')
def makeQR():
    link = request.args.get('link')
    img = qrcode.make(link)

    buffer = BytesIO()
    img.save(buffer, format="PNG")
    buffer.seek(0)

    return send_file(buffer, mimetype='image/png')
    
if __name__ == '__main__': 
    app.run(debug = True, port=5000) 
