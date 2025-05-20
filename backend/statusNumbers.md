
### ✅ **Códigos 2xx – Éxito (Success)**

| Código    | Nombre                   | Cuándo usarlo                                                   |
| --------- | ------------------------ | --------------------------------------------------------------- |
| **200 ⭐** | `OK`                     | Todo salió bien (respuesta exitosa en general)                  |
| **201 ⭐** | `Created`                | Recurso creado con éxito (ej: nuevo usuario o producto)         |
| **202**   | `Accepted`               | La solicitud fue aceptada, pero se procesará más tarde          |
| **203**   | `Non-Authoritative Info` | La respuesta es de una fuente diferente (raro en APIs)          |
| **204 ⭐** | `No Content`             | Éxito, pero no hay contenido que devolver (ej: borrado exitoso) |
| **205**   | `Reset Content`          | Cliente debe reiniciar la vista del formulario                  |
| **206**   | `Partial Content`        | Para respuestas parciales (como rangos de archivos)             |

---

### ❌ **Códigos 4xx – Errores del Cliente (Client Error)**

| Código     | Nombre                   | Cuándo usarlo                                                                  |
| ---------- | ------------------------ | ------------------------------------------------------------------------------ |
| **400 ⭐**  | `Bad Request`            | Datos inválidos o mal formateados                                              |
| **401 ⭐**  | `Unauthorized`           | No autenticado (falta token, sesión vencida, etc.)                             |
| **402**    | `Payment Required`       | Reservado (muy poco usado, usado para pagos a veces)                           |
| **403 ⭐**  | `Forbidden`              | Prohibido. Autenticado pero sin permiso                                        |
| **404 ⭐**  | `Not Found`              | Recurso no existe                                                              |
| **405**    | `Method Not Allowed`     | El método HTTP no es soportado (ej: DELETE en un endpoint que solo acepta GET) |
| **406**    | `Not Acceptable`         | El tipo de respuesta no es aceptable (formatos)                                |
| **407**    | `Proxy Authentication`   | Se requiere autenticación por proxy                                            |
| **408**    | `Request Timeout`        | El cliente tardó demasiado en enviar la solicitud                              |
| **409 ⭐**  | `Conflict`               | Conflicto lógico (ej: datos duplicados)                                        |
| **410**    | `Gone`                   | El recurso ya no está disponible y no volverá                                  |
| **411**    | `Length Required`        | Se requiere `Content-Length` en la petición                                    |
| **412**    | `Precondition Failed`    | Falla en precondiciones (headers como `If-Match`)                              |
| **413**    | `Payload Too Large`      | El cuerpo de la petición es demasiado grande                                   |
| **414**    | `URI Too Long`           | La URL es demasiado larga                                                      |
| **415**    | `Unsupported Media Type` | Tipo de contenido no soportado                                                 |
| **416**    | `Range Not Satisfiable`  | El rango de datos solicitado no es válido                                      |
| **417**    | `Expectation Failed`     | La cabecera `Expect` no puede ser cumplida                                     |
| **418 🫖** | `I'm a teapot`           | Broma del protocolo de café (no usar en producción)                            |
| **422 ⭐**  | `Unprocessable Entity`   | Datos válidos pero lógicamente erróneos (ej: edad negativa, etc.)              |
| **426**    | `Upgrade Required`       | El cliente debe cambiar de protocolo                                           |
| **429 ⭐**  | `Too Many Requests`      | Muchas peticiones (rate limit)                                                 |

---

### 🔥 **Códigos 5xx – Errores del Servidor (Server Error)**

| Código    | Nombre                       | Cuándo usarlo                                                             |
| --------- | ---------------------------- | ------------------------------------------------------------------------- |
| **500 ⭐** | `Internal Server Error`      | Error inesperado en el servidor (fallo en el código, base de datos, etc.) |
| **501**   | `Not Implemented`            | El servidor no soporta la funcionalidad requerida                         |
| **502**   | `Bad Gateway`                | Puerta de enlace (gateway) recibió una respuesta inválida                 |
| **503 ⭐** | `Service Unavailable`        | El servidor está temporalmente fuera de servicio                          |
| **504**   | `Gateway Timeout`            | Tiempo de espera excedido entre servidores                                |
| **505**   | `HTTP Version Not Supported` | La versión de HTTP no es soportada                                        |
| **507**   | `Insufficient Storage`       | El servidor no tiene espacio suficiente (raro en APIs)                    |


