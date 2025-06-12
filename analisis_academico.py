

import requests
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
import os

# Crear carpetas si no existen
os.makedirs("graficas", exist_ok=True)
os.makedirs("resultados", exist_ok=True)

# URL del backend
URL = "http://localhost:8080/attendances"

# Obtener los datos
response = requests.get(URL)
data = response.json()

# Convertir a DataFrame
df = pd.json_normalize(data)

# Renombrar columnas para facilitar el análisis
df.rename(columns={
    "student.user.name": "Estudiante",
    "course.name": "Curso",
    "date": "Fecha",
    "status": "Estado"
}, inplace=True)

# Guardar respaldo en CSV
df.to_csv("resultados/asistencias.csv", index=False)

# ====================
# Análisis 1: Asistencias por estudiante
# ====================
conteo = df.groupby(["Estudiante", "Estado"]).size().unstack(fill_value=0)

# Gráfico de barras
conteo.plot(kind="bar", stacked=True, figsize=(10, 6), colormap="Set2")
plt.title("Asistencias por estudiante")
plt.xlabel("Estudiante")
plt.ylabel("Cantidad")
plt.xticks(rotation=45)
plt.tight_layout()
plt.savefig("graficas/asistencias_por_estudiante.png")
plt.close()

# ====================
# Análisis 2: Porcentaje global de asistencia
# ====================
total = df["Estado"].value_counts(normalize=True) * 100
total.plot.pie(
    autopct='%1.1f%%',
    figsize=(6, 6),
    colors=["#4CAF50", "#F44336"]
)
plt.title("Porcentaje global de asistencia")
plt.ylabel("")
plt.savefig("graficas/porcentaje_asistencia_global.png")
plt.close()

print("✅ ¡Análisis generado! Revisa las carpetas 'graficas/' y 'resultados/'.")
