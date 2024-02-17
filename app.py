from flask import Flask, request, jsonify, render_template
import numpy as np
import joblib

app = Flask(__name__)

# Carga el modelo entrenado
model = joblib.load('model.joblib')

@app.route('/')
def home():
    # Renderiza el formulario HTML
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    # Obtiene los datos de las características desde la solicitud POST
    data = request.get_json(force=True)
    features = data['features']
    
    # Asegúrate de que hay 30 características para el modelo
    if len(features) != 30:
        return jsonify({'error': 'Deben proporcionarse 30 características para la predicción.'}), 400

    # Convierte las características en un array NumPy y las redimensiona para la predicción
    features_array = np.array(features).reshape(1, -1)
    
    # Realiza la predicción
    prediction = model.predict(features_array)
    
    # Envía el resultado de la predicción como una respuesta JSON
    return jsonify({'prediction': prediction.tolist()})

if __name__ == '__main__':
    app.run(debug=True)
