from operator import index


numero = int(input('Ingrese numero: '))

numeros = []
numeros.append(numero)

i = 1

while numero != 0:
    numero = int(input('Ingrese numero: '))
    numeros.append(numero)


    if numero == 0:
        numeros = sorted(numeros)
        while i < len(numeros):

            print(numeros[i])
        
            i += 1
        
        