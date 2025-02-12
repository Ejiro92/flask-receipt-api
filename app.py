from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/')
def home():
    return "Flask API is running!"

@app.route('/generate_receipt', methods=['POST'])
def generate_receipt():
    data = request.json
    receipt = {
        "transaction_id": data["transaction_id"],
        "sender": data["sender"],
        "receiver": data["receiver"],
        "amount": data["amount"]
    }
    return jsonify({"receipt": receipt, "signature": "test-signature"})

@app.route('/verify_receipt', methods=['POST'])
def verify():
    data = request.json
    return jsonify({"verification_status": "✅ Receipt is Valid!"})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=10000)
