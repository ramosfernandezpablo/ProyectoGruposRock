## Índice
1. [Información general sobre mi proyecto](#información-general-sobre-mi-proyecto)
2. [Datos personales](#datos-personales)
3. [Aplicaciones](#aplicaciones)
4. [Terminal PowerShell](#terminal-powershell)
### Información general sobre mi proyecto
***
Este proyecto que presento va a tratar de los principales grupos de rock de las décadas de los '70 hasta la actualidad. 
Será de gran interés para aquellas personas que quieran informarse de dichos grupos, tanto de discografia, como de los miembros del grupo, 
entre otras muchas cualidades.
Además de toda esa información, he creado una serie de consultas para salir de dudas de ciertas cuestiones que me han surgido a lo largo 
de su elaboración.
### Datos personales
***
* Nombre: Pablo Jesús
* Apellidos: Ramos Fernández
* Asignatura: Gestión de Base de Datos
* Curso: 1º ASIR 2021/2022
## Aplicaciones
***
En este proyecto hemos hecho uso de:
* MongoDB versión 5.0.3 y MongoDB Compass 
* Visual Studio Code
* PowerShell
* Herramienta GitHub
## Terminal PowerShell
***
Ahora voy a listar una serie de comando que he usado:
* mongo --version: Nos devuelve la versión de MongoDB que estamos usando.
* mongo: Este comando sirve para que entremos en Mongo.
* cls: Limpia el terminal de comando para ver con mayor claridad los nuevos comandos que voy a aplicar.
* db: Nos muestra la base de datos en la que estamos trabajando.
* help: Con este comando PowerShell nos muestra una ayuda con una serie de comandos que podemos aplicar.
* show dbs: Muestra las bases de datos creadas.
* db.[nombre_Base_De_Datos].insertOne: Inserta un documento dentro de una colección, en mi caso, db.coleccionParticular.insertOne()
* show collections: Muestra las colecciones que tenemos creados.
* db.[nombre_Base_De_Datos].find(): Muestra los archivos dentro de una colección.
* use [nombre_Base_Datos]: Crea una base de datos en el servidor de Mongo.
* db.[nombre_Base_De_Datos].deleteMany: Borra muchos documentos a la vez de una colección.
* load ("nombre_fichero"): Carga el archivo y lo ejecuta.
* db.[nombre_Base_De_Datos].inserMany: Inserta varios documentos en una colección.
* db.[nombre_Base_De_Datos].find().count(): Cuenta los documentos que se encuentran en una colección.
* db.[nombre_Base_De_Datos].find({campo:"valor"}): Visualiza los documentos con el campo y valor especificados.
* db.[nombre_Base_De_Datos].find({campo:{$eq: valor}}).pretty(): Visualiza los documentos con el campo y valor especificados mediante el operador equals y le añadimos un formato más elegante con el comando .pretty().