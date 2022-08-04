from random import randint
import os



cantidad = 2

codigo = []

print('Bienvenido'.center(50, '-'))

continuar = 1

i = 1

while continuar == 1:
    
    numero = randint(1,9)
    for primer_recorrido in range(cantidad):
        while numero in codigo:
            numero = randint(1,9)

        else:
            codigo.append(numero)
            
            for segundo_recorrido in range(cantidad):
                print(i)
                i += 1

    
