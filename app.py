from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
import joblib

app = Flask(__name__)
CORS(app)

# Load model and encoders
model = joblib.load('model/svm_model.pkl')
transformer = joblib.load('model/transformer.pkl')
label_encoder = joblib.load('model/label_encoder.pkl')

# Load CSV for dropdown options
df = pd.read_csv("5GNetworkOptimization (1).csv")  # Adjust path if needed

@app.route('/dropdown-options', methods=['GET'])
def dropdown_options():
    try:
        description = sorted(df['Description'].dropna().unique().tolist())
        resource = sorted(df['Resource Allocation Strategy'].dropna().unique().tolist())
        throughput = sorted(df['Throughput Maximization Outcome'].dropna().unique().tolist())
        load = sorted(df['Load Balancing Outcome'].dropna().unique().tolist())

        return jsonify({
            "description": description,
            "resource": resource,
            "throughput": throughput,
            "load": load
        })
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    input_df = pd.DataFrame([{
        'Description': data['description'],
        'Resource Allocation Strategy': data['resource'],
        'Throughput Maximization Outcome': data['throughput'],
        'Load Balancing Outcome': data['load']
    }])
    input_transformed = transformer.transform(input_df)
    prediction = model.predict(input_transformed)
    label = label_encoder.inverse_transform(prediction)[0]

    return jsonify({'prediction': label})

if __name__ == '__main__':
    app.run(debug=True, port=5000)
