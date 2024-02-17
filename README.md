
# Aplicación de Predicción de Cáncer de Mama

## Descripción

Este proyecto es una aplicación web construida con Flask que utiliza un modelo de aprendizaje automático para predecir si una masa mamaria es benigna o maligna basada en las características de la imagen digitalizada de una biopsia de mama. Utiliza el conjunto de datos de cáncer de mama de Wisconsin (Diagnostic) disponible a través de `sklearn.datasets`.

## Tecnologías

- Python 3
- Flask
- Scikit-learn
- NumPy
- Joblib

## Instalación

Para instalar y ejecutar esta aplicación en tu entorno local, sigue estos pasos:

1. Clona este repositorio a tu máquina local usando:

```bash
git clone https://github.com/tu_usuario/tu_repositorio.git
```

2. Navega al directorio del proyecto:

```bash
cd tu_repositorio
```

3. Crea un entorno virtual (opcional, pero recomendado):

```bash
python3 -m venv venv
source venv/bin/activate  # En Windows usa `venv\Scripts\activate`
```

4. Instala las dependencias:

```bash
pip install -r requirements.txt
```

El archivo `requirements.txt` debería incluir al menos:

```
Flask
numpy
scikit-learn
joblib
```

5. Ejecuta la aplicación:

```bash
python app.py
```

## Uso

Una vez que la aplicación esté ejecutándose, navega a `http://127.0.0.1:5000/` en tu navegador web para ver la interfaz de usuario de la aplicación. Completa el formulario con los datos de las características de una muestra de biopsia de mama y haz clic en "Predecir" para obtener la predicción.

## Cómo Contribuir

Las contribuciones son bienvenidas. Por favor, siente libre de fork el repositorio y enviar tus pull requests.

## Licencia

Este proyecto está bajo la licencia MIT. Ver el archivo `LICENSE` para más detalles.
