# push_server ![Genericbadge](https://www.darwinbiler.com/assets/license.svg)
Ejemplo de Servidor de Push Notification para PWA 

## Installation
Ejecutar el comando 
```bash
npm install
```

## Uso
```bash
npm run generate-vapid
```
Este comando se usa para obtener las vapid keys necesarias para generar suscripciones y enviar notificaciones estas claves se guardan en un archivo json llamado **vapid.json**

```bash
npm run start
```
Este comando se usa para arrancar el servidor

## Rutas
Rutas                         | Descripción
----------------------------- | -------------------------------------------------------------------------
**GET /api/key**              | Obtener el public vapid key
**GET /api/deletesubscribe**  | Borrar todas las suscripciones guardadas en el archivo **subs-db.json**
**POST /api/subscribe**       | Guarda la suscripción generada a partir de la public vapid key 
**POST /api/pushAll**         | Envía notificaciones a todas las suscripciones guardadas
