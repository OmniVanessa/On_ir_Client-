# Explicacion del proyecto on ir client 

# Este proyecto consiste en una aplicación cliente-servidor donde un administrador interactúa con un panel de control para enviar información personalizada, y un cliente visualiza esos datos en tiempo real con una pequeña animación.

# El administrador puede:
# Escribir un mensaje.
# Seleccionar el color de fondo.
# Seleccionar el color de texto.
# Enviar la información desde el panel de control.

# El cliente puede::
# Visualizar el mensaje enviado.
# Ver la fecha y hora del envío.
# Observar los colores seleccionados.
# Disfrutar de una pequeña animación en la interfaz.

# Configuracion de backend 
# Lenguajes utilizados
# Uvicorn
# python 
# FastApi

# 1. Crear entorno virtual .
# python -m venv venv .
# 1.1. Activar el servidor.

# source venv/bin/activate.
# 1.2. Ejecutar  servidor (uvicorn).
# uvicorn main:app --reload --host 0.0.0.0 --port 8000.

# 2. Configuracion del frontend.
# Instalar pnpm con (npm install -g pnpm).

# 2.1 Crear proyeto con vite.  
# pnpm create vite frontend --template react.

# 2.2 Instalar rutas. 
# pnpm install react-router-dom2.

# 2.3 Ejecutar servidor desarrollo.
# pnpm dev 
