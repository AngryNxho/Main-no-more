''' 


Definición
Desde izquierda a derecha, los primeros 4 números indican el año de la competencia, los 2 siguientes dígitos indican el mes de la competencia, los 2 dígitos subsiguientes el día de la competencia

Luego, el noveno dígito indica la cantidad de competidores durante esa competencia, con un valor entre 2 a 5, y el décimo dígito, con un valor entre 1 a 5, indica la cantidad de saltos que realiza cada competidor.
Los dígitos restantes corresponden al puntaje (1 a 7) de cada uno de los saltos de clavado, ordenados por competidor.
85. si hay 3 competidores y cada uno realiza 4 saltos, entonces deben haber 12 dígitos, donde:

+ Los primeros 4 dígitos corresponden a los 4 clavados del competidor 1
+ Los 4 dígitos subsiguientes corresponden a los 4 clavados del competidor 2
+ Los últimos 4 dígitos corresponden a los 4 clavados del comperidor 3

El promedio de los puntajes de cada competidor, indica la calificación final de éste. El competidor que haya obtenido el promedio más alto en sus saltos es quien gana. Nunca habrán dos promedios iguales, los jueces se encargan de ello.

Lo que debes construir
El servidor que interpretaba esta información se arruinó, y el comité técnico quedó atochado por registros que le toma mucho tiempo interpretar. Es por eso que se te solicita que realices un programa en Python 3 que pueda identificar en el año, temporada, cantidad de competidores/clavadistas y quién de ellos
obtuvo el mejor promedio en sus puntajes.

Para ello, debes analizar este número y promediar los puntajes de cada competidor, decir cuál de ellos ganó y con qué puntaje promedio.
Además, en cada año se pueden realizar hasta dos competencias. Una en la temporada de verano (21 de Octubre hasta el 20 de Mayo) y otra en la temporada de invierno (21 de mayo hasta el 20 de Octubre).

Para cada código ingresado, debes indicar:

 

+ Eloño dela competencia y su temporada
+ La cantidad de competidores

» La cantidad de clavados

+ Elmúmero del competidor, entre 1 a 5, que ha conseguido el mejor promedio de puntajes
+ Cuál fue ese mejor promedio de puntajes.

Ejemplos entrada y salida

La salida de tu programa debe tener la siguiente estructura:

Ingrese el código de la competencia: 1956052134777766665555 — Ingrese el código de la competencia: 2018031132326471

 

 

año: 1956 Año: 2018
Temporada: invierno Temporada: verano

Cantidad de competidores: 3 Cantidad de competidores: 3
Cantidad de clavados: 4 Cantidad de clavados: 2
Comperidor ganador: 1 Comperidor ganador: 2
promedio: 7.0 Promedio: 5.0

Ejemplo 1: Esto debe imprimir tu programs, si el usuario digita e código:

Elemnplo Y: seo sete imper Ejemplo 2: Esto debe imprimir tu programs, si el usuario digta el código:

Respuesta seleccionada: 20834370.py Ema

Adjuntar archivo Examinar miequipo Buscar enta colección de contento
'''

#
codigo = '1956052134777766665555'

Anho = codigo[0:4]

