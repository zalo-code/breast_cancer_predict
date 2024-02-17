// static/script.js
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('predictionForm');
    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevenir el envío estándar del formulario

        // Recopilar los valores del formulario en un arreglo
        let features = [
            parseFloat(document.getElementById('mean_radius').value),
            parseFloat(document.getElementById('mean_texture').value),
            parseFloat(document.getElementById('mean_perimeter').value),
            parseFloat(document.getElementById('mean_area').value),
            parseFloat(document.getElementById('mean_smoothness').value),
            parseFloat(document.getElementById('mean_compactness').value),
            parseFloat(document.getElementById('mean_concavity').value),
            parseFloat(document.getElementById('mean_concave_points').value),
            parseFloat(document.getElementById('mean_symmetry').value),
            parseFloat(document.getElementById('mean_fractal_dimension').value),
            parseFloat(document.getElementById('radius_se').value),
            parseFloat(document.getElementById('texture_se').value),
            parseFloat(document.getElementById('perimeter_se').value),
            parseFloat(document.getElementById('area_se').value),
            parseFloat(document.getElementById('smoothness_se').value),
            parseFloat(document.getElementById('compactness_se').value),
            parseFloat(document.getElementById('concavity_se').value),
            parseFloat(document.getElementById('concave_points_se').value),
            parseFloat(document.getElementById('symmetry_se').value),
            parseFloat(document.getElementById('fractal_dimension_se').value),
            parseFloat(document.getElementById('worst_radius').value),
            parseFloat(document.getElementById('worst_texture').value),
            parseFloat(document.getElementById('worst_perimeter').value),
            parseFloat(document.getElementById('worst_area').value),
            parseFloat(document.getElementById('worst_smoothness').value),
            parseFloat(document.getElementById('worst_compactness').value),
            parseFloat(document.getElementById('worst_concavity').value),
            parseFloat(document.getElementById('worst_concave_points').value),
            parseFloat(document.getElementById('worst_symmetry').value),
            parseFloat(document.getElementById('worst_fractal_dimension').value)
        ];

        // Configurar la solicitud POST
        fetch('/predict', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({features: features}),
        })
        .then(response => response.json())
        .then(data => {
            // Mostrar el resultado de la predicción
            document.getElementById('predictionResult').innerText = 'Predicción: ' + (data.prediction[0] ? 'Maligno' : 'Benigno');
        })
        .catch(error => console.error('Error en la solicitud:', error));
    });
});
