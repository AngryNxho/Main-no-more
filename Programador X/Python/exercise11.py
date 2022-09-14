from random import randint

cantidad = 9

codigo = []


numero = randint(1,9)

i = 1



while i <= cantidad:
    if numero not in codigo:
        codigo.append(numero)
        i += 1

    elif numero in codigo:
        numero = randint(1,9)

    if len(codigo) == cantidad:
        print(codigo)
        
    