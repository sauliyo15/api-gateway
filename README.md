# API Gateway - Node.js

Este proyecto implementa un **API Gateway** utilizando **Node.js** y **Express** para enrutar solicitudes hacia dos microservicios: uno para gestionar usuarios y otro para gestionar vehículos. El microservicio de usuarios está construido con **Node.js** y **Express**, mientras que el de vehículos está construido con **Spring Boot**.

## Características

- API Gateway con Node.js y Express.
- Ruteo hacia dos microservicios diferentes:
  - Microservicio de Usuarios (Puerto 4000, Node.js).
  - Microservicio de Vehículos (Puerto 8080, Spring Boot).
- Redireccionamiento de peticiones según el endpoint.
- Proyecto extensible para otros microservicios.

## Requisitos previos

Antes de comenzar, asegúrate de tener instalados los siguientes componentes:

- [Node.js](https://nodejs.org/) (versión 20 o superior).
- [npm](https://www.npmjs.com/) (versión 6 o superior).
- [Git](https://git-scm.com/).

Además, los microservicios de **Usuarios** y **Vehículos** deben estar en ejecución:

- **Usuarios**: Corriendo en el puerto 4000.
- **Vehículos**: Corriendo en el puerto 8080.

## Instalación

Sigue estos pasos para configurar el proyecto localmente:

1. Clona este repositorio:

        git clone https://github.com/tu_usuario/api-gateway.git
        cd api-gateway

2. Instala las dependencias:

        npm install

3. Crea un archivo `.env` en la raíz del proyecto con las variables de entorno necesarias:
        
        PORT=3000
        USERS_SERVICE_URL=http://localhost:4000
        VEHICLES_SERVICE_URL=http://localhost:8080

4. Ejecuta el API Gateway:

        npm start

## Rutas

- `GET /usuarios`: redirige al microservicio de usuarios.
- `GET /vehiculos`: Redirige al microservicio de vehículos.
- Otros métodos HTTP (`POST, PUT, DELETE`) también serán redirigidos a los microservicios correspondientes.

## Referencias

- La documentación del proyecto de usuarios y sus instrucciones de uso están disponibles en https://github.com/sauliyo15/javascript-web.

        git clone https://github.com/sauliyo15/javascript-web

- La documentación del proyecto de vehiculos y sus instrucciones de uso están disponibles en https://github.com/sauliyo15/carregistry.

        git clone https://github.com/sauliyo15/carregistry

