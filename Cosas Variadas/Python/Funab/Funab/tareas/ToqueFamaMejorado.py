from random import randint
import os



cantidad = 3

intentosTotales = cantidad
intentosUsuario = 1
codigo = []

counter = 1

print('Bienvenido'.center(50, '-'))

continuar = 1

i = 1

numero = randint(1,9)

while continuar == 1:
    
    while len(codigo) != cantidad:

        if numero in codigo:
            numero = randint(1,9)
        
        elif numero not in codigo:
            codigo.append(numero)

    if len(codigo) == cantidad:
        print(codigo)
        
        for x in range(cantidad):
            user_guess = int(input(f'Intento {i}: '))
            i += 1

        i = 1
