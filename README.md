# Pruebas
Para que sirven las pruebas
- en la aplicacion pruebas una funcion ejem: calcularImpuestos(){...} para ello se tiene que 1. login 2. selecionar articulo 3. agregar al carrito de compra 4. simular compra 5. llamar la funcion de calcular impuesto
- el objetivo de las pruebas es no tener que hacer todos los procedimientos y llamar directamente a la funcion 

Ventajas 
- Ayuda a encontrar errores
- permite probar xodigo escrito por otros programadores 
- permite detectar errores antes de que sucedan en produccion 
- ayuda a generar un codigo mas limpio, reportes y estadisticas 

Desventajas 
- no garantizan que el codigo este libre de errores 
- probar todo el codigo, puede ser un trabajo aun mas largo que la misma aplicacion 
- costos de produccion pueden aumentar
- no es muy util si trabajas solo 

## Tipos de pruebas
### Automaticas 
unitarias
- pruebas de segmentos independientes de forma aislada
- son pruebas aisladas sin presencia de recursos extrenos, como llamadas a un API u otro componente o servicio 
- Un login.component.ts nesesita de un usuario.service y un router para ello se simulan los otros componentes con peticiones falsas para probar el login.component.ts
- nos ayudan a probar rapidamente metodos y funciones 
- podemos escribir muchas pruebas rapidamente 
- Podemos someter a pruebas de estress de nuestros metodos 
- no sabriamos los tiempos de respuesta de servicios o APIs


Integracion
- incluyen 2 o mas componentes para hacer una tarea en espesifico 
- al momento de trabajar con los botones que activan al componente se comienza a probar la integracion 

Extremo a extremo
- son pruebas bien lentas. probar algo en espesifico 
- evaluar todo el proceso desde el login hasta que se active el metodo 


## ciclo de vida de las pruebas 
beforeAll > antes de todas las pruebas 
beforeEach > antes de cada una de las pruebas
afterAll > despues de todas las pruebas
afterEach > despues de cada prueba 







